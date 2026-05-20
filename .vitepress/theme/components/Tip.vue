<template>
	<span class="tooltip" :class="{ 'tooltip-missing': !content }">
		<span ref="triggerEl" class="tooltip-trigger" :aria-describedby="content && open ? `tooltip-${id}` : undefined" @mouseenter="openTipDelayed" @mouseleave="scheduleClose" @focus="openTipDelayed" @blur="scheduleClose">
			<slot />
		</span>

		<Teleport to="body">
			<span v-if="content" class="tooltip-popover" :class="{ 'is-open': open }" :style="popoverStyle" role="tooltip" :id="`tooltip-${id}`" @mouseenter="openTipDelayed" @mouseleave="scheduleClose">
				<strong class="tooltip-title">
					<span class="tooltip-textcursor">{{ content.title }}</span>
				</strong>

				<span class="tooltip-text">
					<span class="tooltip-textcursor">
						{{ content.text }}
						<a v-if="content.wiki" class="tooltip-wiki-inline" :href="content.wiki" target="_blank" rel="noreferrer">
							(Wikipedie)
						</a>
					</span>
				</span>
			</span>
		</Teleport>
	</span>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import tooltips from '../utils/tooltipList';

const props = defineProps<{
	id: string | number;
}>();
const id = computed(() => String(props.id));
const content = computed(() => tooltips[id.value]);

const open = ref(false);
const triggerEl = ref<HTMLElement | null>(null);

const x = ref(0);
const y = ref(0);

let openTimer: number | undefined;
let closeTimer: number | undefined;

function placePopover() {
	const el = triggerEl.value;
	if (!el) return;

	const r = el.getBoundingClientRect();
	x.value = r.left + 10;
	y.value = r.bottom + 10;
}

function openTipDelayed() {
	if (!content.value) return;

	if (closeTimer) window.clearTimeout(closeTimer);

	if (open.value) {
		placePopover();
		return;
	}

	if (openTimer) window.clearTimeout(openTimer);
	openTimer = window.setTimeout(() => {
		placePopover();
		open.value = true;
	}, 200);
}

function scheduleClose() {
	if (openTimer) window.clearTimeout(openTimer);
	if (closeTimer) window.clearTimeout(closeTimer);
	closeTimer = window.setTimeout(() => (open.value = false), 200);
}

const popoverStyle = computed(() => ({
	left: `${x.value}px`,
	top: `${y.value}px`
}));
</script>

<style scoped>
.tooltip {
	display: inline;
}

.tooltip-trigger {
	text-decoration: underline;
	text-decoration-style: dotted;
	text-decoration-thickness: 2px;
	text-underline-offset: 3px;
	cursor: help;
}

.tooltip-popover {
	position: fixed;
	z-index: 9999;

	width: max-content;
	max-width: min(360px, 90vw);

	padding: 10px 12px;
	border-radius: 10px;

	border: 1px solid color-mix(in srgb, var(--vp-c-divider) 70%, transparent);
	background: color-mix(in srgb, var(--vp-c-bg) 92%, black 8%);
	color: var(--vp-c-text-1);
	box-shadow: 0 14px 34px -22px rgba(0, 0, 0, 0.45);

	opacity: 0;
	visibility: hidden;
	pointer-events: none;

	transform: translateY(0);

	transition:
		opacity 140ms ease,
		transform 140ms ease,
		visibility 0s linear 180ms;
}

.tooltip-popover.is-open {
	opacity: 1;
	visibility: visible;
	pointer-events: auto;
	transform: translateY(-2px);
	transition:
		opacity 140ms ease,
		transform 140ms ease,
		visibility 0s linear 0s;
}

.tooltip-popover::before {
	content: "";
	position: absolute;
	top: -6px;
	left: 12px;
	width: 12px;
	height: 12px;
	background: color-mix(in srgb, var(--vp-c-bg) 92%, black 8%);
	border-left: 1px solid color-mix(in srgb, var(--vp-c-divider) 70%, transparent);
	border-top: 1px solid color-mix(in srgb, var(--vp-c-divider) 70%, transparent);
	transform: rotate(45deg);
	pointer-events: none;
}

.tooltip-title {
	display: block;
	margin-bottom: 4px;
	font-size: 0.9rem;
	cursor: default;
}

.tooltip-text {
	display: block;
	font-size: 0.85rem;
	color: var(--vp-c-text-2);
	cursor: default;
}

.tooltip-textcursor {
	display: inline;
	cursor: text;
}

.tooltip-wiki-inline {
	font-size: calc(0.85rem - 3px);
	color: var(--vp-c-brand-1);
	text-decoration: underline;
	cursor: pointer;
}

.tooltip-wiki-inline:hover {
	color: var(--vp-c-brand-2);
}

.tooltip-missing .tooltip-trigger {
	text-decoration-style: wavy;
	color: var(--vp-c-danger-1);
}
</style>