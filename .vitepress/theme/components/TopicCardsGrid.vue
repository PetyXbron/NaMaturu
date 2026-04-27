<script setup lang="ts">
import { computed } from 'vue'

type TopicItem = {
    text: string
    link: string
    state: '0' | '1' | '2' | ''
    category?: string
}

const props = defineProps<{
    items: TopicItem[]
    en?: boolean
}>()

const doneCount = computed(() => props.items.filter((item) => item.state === '2').length)
const progress = computed(() => {
    if (props.items.length === 0) return 0
    return Math.round((doneCount.value / props.items.length) * 100)
})

const stateClass = (state: TopicItem['state']) => `state-${state}`

const stateEmoji = (state: TopicItem['state']) => {
    if (state === '2') return '✅'
    if (state === '1') return '🟡'
    if (state === '0') return '❌'
    return '❓'
}

const displayItems = computed(() => {
    return props.items.map((item, index) => {
        const previous = props.items[index - 1]
        const previousCategory = previous?.category ?? ''
        const currentCategory = item.category ?? ''
        const showCategoryHeader = currentCategory !== '' && (index === 0 || currentCategory !== previousCategory)

        return {
            ...item,
            showCategoryHeader,
            showCategoryDivider: index > 0 && currentCategory !== previousCategory,
        }
    })
})

const getTopicParts = (text: string) => {
    const match = text.match(/^(\d+)\.\s*(.*)$/)
    if (!match) {
        return { number: '', label: text }
    }

    return { number: `${match[1]}.`, label: match[2] }
}
</script>

<template>
    <section class="topic-grid-wrapper">
        <div class="topic-grid-summary">
            <div class="topic-grid-progress">
                <div class="topic-grid-progress-bar" :style="{ width: `${progress}%` }" />
            </div>
            <p v-if="!en">
                Hotovo <strong>{{ doneCount }}</strong> z <strong>{{ items.length }}</strong> otázek
                ({{ progress }} %)
            </p>
            <p v-else>
                Done <strong>{{ doneCount }}</strong> out of <strong>{{ items.length }}</strong> topics
                ({{ progress }} %)
            </p>
        </div>

        <div class="topic-grid" role="list">
            <hr class="topic-category-divider" />
            <template v-for="item in displayItems" :key="item.link">
                <hr v-if="item.showCategoryDivider" class="topic-category-divider" />
                <p v-if="item.showCategoryHeader" class="topic-category-heading">
                    {{ item.category }}
                </p>

                <a :href="item.link" class="topic-card" role="listitem">
                    <span class="topic-card-title">
                        <span class="topic-card-number">{{ getTopicParts(item.text).number }}</span>
                        <span class="topic-card-label">{{ getTopicParts(item.text).label }}</span>
                    </span>
                    <span class="topic-card-status" :class="stateClass(item.state)">
                        {{ stateEmoji(item.state) }}
                    </span>
                </a>
            </template>
        </div>
    </section>
</template>

<style scoped>
.topic-grid-wrapper {
    margin-top: 1.5rem;
}

.topic-grid-summary {
    margin-bottom: 1rem;
}

.topic-grid-progress {
    width: 100%;
    height: 8px;
    border-radius: 999px;
    overflow: hidden;
    background: color-mix(in srgb, var(--vp-c-default-3) 45%, transparent);
    margin-bottom: 0.75rem;
}

.topic-grid-progress-bar {
    height: 100%;
    background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-3));
    transition: width 250ms ease;
}

.topic-grid-summary p {
    margin: 0;
    color: var(--vp-c-text-2);
    font-size: 0.95rem;
}

.topic-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.85rem;
}

@media (max-width: 640px) {
    .topic-grid {
        grid-template-columns: 1fr;
    }
}

.topic-card {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    text-decoration: none;
    color: var(--vp-c-text-1);
    background: color-mix(in srgb, var(--vp-c-bg-soft) 80%, var(--vp-c-default-3) 20%);
    border: 1px solid color-mix(in srgb, var(--vp-c-divider) 75%, transparent);
    border-radius: 14px;
    padding: 0.75rem 0.9rem;
    transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}

.topic-category-divider {
    grid-column: 1 / -1;
    width: 100%;
    border: 0;
    border-top: 1px solid color-mix(in srgb, var(--vp-c-divider) 80%, transparent);
    margin: 0.15rem 0;
}

.topic-category-heading {
    grid-column: 1 / -1;
    margin: 0.1rem 0 0.2rem;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: var(--vp-c-text-2);
}

.topic-card:hover {
    transform: translateY(-2px);
    border-color: color-mix(in srgb, var(--vp-c-brand-1) 45%, var(--vp-c-divider));
    box-shadow: 0 10px 24px -16px color-mix(in srgb, var(--vp-c-brand-1) 55%, transparent);
}

.topic-card-status {
    margin-left: auto;
    flex-shrink: 0;
    font-size: 1.1rem;
}

.topic-card-title {
    display: flex;
    align-items: baseline;
    gap: 0.45rem;
    line-height: 1.3;
    font-size: 0.94rem;
}

.topic-card-number {
    font-size: 1.15rem;
    font-weight: 800;
    line-height: 1;
    color: var(--vp-c-text-1);
}

.topic-card-label {
    color: var(--vp-c-text-1);
}

.topic-card-status.state-2 {
    filter: saturate(1.1);
}

.topic-card-status.state-1 {
    filter: saturate(1.15);
}

.topic-card-status.state-0 {
    filter: saturate(0.95);
}
</style>