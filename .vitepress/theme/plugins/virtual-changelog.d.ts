declare module 'virtual:changelog' {
	export type ChangelogPage = {
		path: string;
		url: string;
	};

	export type ChangelogEntry = {
		sha: string;
		message: string;
		date: string;
		url: string;
		pagesCount: number;
		additions: number;
		deletions: number;
		pages: ChangelogPage[];
	};

	export const changelog: ChangelogEntry[];
	export const changelogFetchedAt: string;
}
