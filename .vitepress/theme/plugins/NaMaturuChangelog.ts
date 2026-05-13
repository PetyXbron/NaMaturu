import type { Plugin } from 'vite';

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

const virtualId = 'virtual:changelog';
const resolvedId = `\0${virtualId}`;
const baseUrl = 'https://api.github.com/repos/PetyXbron/NaMaturu';
const limit = 5;

const changelogPlugin = (): Plugin => ({
	name: 'nm-changelog-data',
	resolveId(id) {
		return id === virtualId ? resolvedId : null;
	},
	async load(id) {
		if (id !== resolvedId) return null;
		let changelog: ChangelogEntry[] = [];
		let fetchedAt = '';
		try {
			const list = await fetch(`${baseUrl}/commits?per_page=${limit}`);
			if (list.ok) {
				const commits = (await list.json()) as Array<{ sha: string; commit: { message: string; author?: { date?: string; }; }; }>;
				const detailed = await Promise.all(
					commits.map(async (commit) => {
						const detailResponse = await fetch(`${baseUrl}/commits/${commit.sha}`);
						if (!detailResponse.ok) return null;
						const detail = (await detailResponse.json()) as {
							sha: string;
							commit: { message: string; author?: { date?: string; }; };
							html_url: string;
							stats?: { additions?: number; deletions?: number; };
							files?: Array<{ filename: string; }>;
						};

						const pages = new Map<string, { path: string; url: string; }>();
						for (const file of detail.files ?? []) {
							if (!file.filename.toLowerCase().endsWith('.md')) continue;
							const normalized = file.filename.replace(/\\/g, '/').replace(/\.md$/i, '');
							const url = normalized === 'index'
								? '/'
								: normalized.endsWith('/index')
									? `/${normalized.replace(/\/index$/i, '')}/`
									: `/${normalized}`;
							pages.set(url, { path: file.filename, url });
						}

						const uniquePages = Array.from(pages.values());
						return {
							sha: detail.sha,
							message: detail.commit.message.split('\n')[0],
							date: detail.commit.author?.date ?? '',
							url: detail.html_url,
							pagesCount: uniquePages.length,
							additions: detail.stats?.additions ?? 0,
							deletions: detail.stats?.deletions ?? 0,
							pages: uniquePages
						} satisfies ChangelogEntry;
					})
				);

				changelog = detailed.filter((entry): entry is ChangelogEntry => Boolean(entry));
			}
			fetchedAt = new Date().toISOString();
		} catch (error) {
			console.warn('[NaMaturu] Failed to fetch changelog data.', error);
		}
		return `export const changelog = ${JSON.stringify(changelog)};\nexport const changelogFetchedAt = ${JSON.stringify(fetchedAt)};`;
	}
});

export default changelogPlugin;