<script setup lang="ts">
import { computed } from 'vue';
import { changelog, changelogFetchedAt } from 'virtual:changelog';

type ChangelogEntry = {
	sha: string;
	message: string;
	date: string;
	url: string;
	pagesCount: number;
	additions: number;
	deletions: number;
	pages: Array<{ path: string; url: string; }>;
};

const entries = computed(() => (changelog as ChangelogEntry[]) ?? []);
const formatDate = (isoDate: string) =>
	isoDate
		? new Intl.DateTimeFormat('cs-CZ', {
			dateStyle: 'medium',
			timeStyle: 'short'
		}).format(new Date(isoDate))
		: '';
const lastUpdated = computed(() => formatDate(changelogFetchedAt));
const formatPageLabel = (path: string) => path.replace(/\\/g, '/').replace(/\.md$/i, '');
</script>

<template>
	<section class="changelog-wrapper">
		<header class="changelog-header">
			<div>
				<h2>Poslední změny</h2>
				<p class="changelog-subtitle">Seznam všech posledních aktualizací stránek.</p>
			</div>
			<p v-if="lastUpdated" class="changelog-updated">Aktualizováno {{ lastUpdated }}</p>
		</header>

		<div v-if="entries.length" class="changelog-list" role="list">
			<article v-for="entry in entries" :key="entry.sha" class="changelog-card" role="listitem">
				<div class="changelog-card-main">
					<div class="changelog-title-row">
						<h3 class="changelog-title">{{ entry.message }}</h3>
						<a class="changelog-commit-link" :href="entry.url" target="_blank" rel="noreferrer" title="Zobrazit commit na GitHubu">
							<span style="--icon: url('https://api.iconify.design/simple-icons/github.svg'); width: 25px; height: 25px; display: inline-block; vertical-align: middle; background: no-repeat center/contain var(--icon);"></span>
						</a>
					</div>
					<div class="changelog-meta">
						<span>{{ formatDate(entry.date) }}</span>
						<span v-if="entry.pagesCount === 1">1 změněná stránka</span>
						<span v-else-if="entry.pagesCount < 5">{{ entry.pagesCount }} změněné stránky</span>
						<span v-else>{{ entry.pagesCount }} změněných stránek</span>
						<span>Řádků:
							<span style="color: green;">+{{ entry.additions }}</span>
							/
							<span style="color: red;">-{{ entry.deletions }}</span>
						</span>
					</div>
				</div>
				<ul class="changelog-pages">
					<li v-for="page in entry.pages.slice(0, 5)" :key="page.url">
						<a :href="page.url">{{ formatPageLabel(page.path) }}</a>
					</li>
					<li v-if="entry.pages.length > 5" class="changelog-more" style="list-style: none;">
						+ {{ entry.pages.length - 5 }} dalších stránek
					</li>
				</ul>
			</article>
		</div>

		<p v-else class="changelog-empty">Zatím tu nejsou žádné commit změny ke zobrazení.</p>
	</section>
</template>

<style scoped>
.changelog-wrapper {
	margin-top: 16px;
	padding: 24px;
	border-radius: 12px;
	background: var(--vp-c-bg-soft);
	border: 1px solid var(--vp-c-bg-soft);
}

.changelog-header {
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	flex-wrap: wrap;
	margin-bottom: 1.5rem;
}

.changelog-header h2 {
	margin: 0;
	padding: 0;
	font-size: 16px;
	font-weight: 600;
	border: none;
}

.changelog-subtitle {
	font-size: 14px;
	font-weight: 500;
	margin: 0;
	padding-top: 3px;
	color: var(--vp-c-text-2);
}

.changelog-updated {
	margin: 0.2rem 0 0;
	color: var(--vp-c-text-2);
	font-size: 0.9rem;
}

.changelog-list {
	display: grid;
	gap: 0.85rem;
}

.changelog-card {
	display: grid;
	gap: 0.75rem;
	padding: 0.95rem 1.1rem;
	border-radius: 14px;
	border: 1px solid color-mix(in srgb, var(--vp-c-divider) 80%, transparent);
	background: color-mix(in srgb, var(--vp-c-bg) 86%, var(--vp-c-default-2) 14%);
	transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
}

.changelog-card:hover {
	transform: translateY(-2px);
	border-color: color-mix(in srgb, var(--vp-c-brand-1) 45%, var(--vp-c-divider));
	box-shadow: 0 12px 26px -18px color-mix(in srgb, var(--vp-c-brand-1) 55%, transparent);
}

.changelog-title-row {
	display: flex;
	justify-content: space-between;
	gap: 0.75rem;
	align-items: baseline;
	flex-wrap: wrap;
}

.changelog-title {
	margin: 0;
	font-size: 1.05rem;
}

.changelog-commit-link {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	transition: filter 180ms ease;
	filter: grayscale(1) opacity(0.6);
}

.changelog-commit-link:hover {
	filter: grayscale(0) opacity(1);
}

.changelog-meta {
	display: flex;
	flex-wrap: wrap;
	gap: 0.75rem 1rem;
	font-size: 0.85rem;
	color: var(--vp-c-text-2);
}

.changelog-pages {
	margin: 0;
	display: grid;
	font-size: 0.9rem;
}

.changelog-pages a {
	color: var(--vp-c-text-1);
}

.changelog-pages a:hover {
	color: var(--vp-c-brand-1);
}

.changelog-more {
	color: var(--vp-c-text-2);
	font-size: 0.85rem;
}

.changelog-empty {
	margin: 0;
	color: var(--vp-c-text-2);
}

@media (max-width: 640px) {
	.changelog-wrapper {
		padding: 1rem;
	}
}
</style>
