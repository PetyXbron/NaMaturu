import { loadEnv, defineConfig } from 'vitepress'
import math from 'markdown-it-katex'
const env = loadEnv("", process.cwd());

function getSidebar(subject: string) {
	return require(`./sidebars/${subject}.json`);
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "NaMaturu",
	description: "Učební materiály",
	lang: 'cs-CZ',
	cleanUrls: true,
	base: '/',
	titleTemplate: ':title',

	sitemap: {
		hostname: env.VITE_hostname
	},

	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: '🏠 Domů', link: '/' },
			{ text: '🌍 Zeměpis', link: '/zemepis', activeMatch: '/zemepis/' },
			{ text: '💻 Informatika', link: '/informatika', activeMatch: '/informatika/' },
			{ text: '📊 Matematika', link: '/matematika', activeMatch: '/matematika/' },
		],

		sidebar: {
			'/matematika/': {
				base: '/matematika/',
				items: getSidebar('matematika')
			},
			'/zemepis/': {
				base: '/zemepis/',
				items: getSidebar('zemepis')
			},
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/PetyXbron/NaMaturu' },
			{ icon: 'minutemailer', link: `mailto:${env.VITE_email}` },
		],

		lastUpdated: {
			text: 'Aktualizováno',
			formatOptions: {
				dateStyle: 'long',
				timeStyle: 'short'
			}
		},

		outline: {
			label: "Obsah stránky"
		},

		docFooter: {
			prev: 'Předchozí stránka',
			next: 'Následující stránka'
		},

		search: {
			provider: 'local',
			options: {
				locales: {
					root: {
						translations: {
							button: {
								buttonText: 'Hledat',
							},
							modal: {
								displayDetails: 'Zobrazení',
								resetButtonTitle: 'Smazat',
								backButtonTitle: 'Zpět',
								noResultsText: 'Žádné výsledky pro',
								footer: {
									selectText: 'Přejít na',
									navigateText: 'Výběr',
									closeText: 'Zavřít'
								}
							}
						}
					}
				}
			}
		},

		footer: {
			copyright: 'Informace jsou čerpány z volně dostupných zdrojů a mohou obsahovat chyby.<br>Licence <strong>MIT</strong> - Volné použití a šíření<br>© 2025 <strong><a href="https://github.com/PetyXbron" target="_blank">PetyXbron</a></strong>',
		}
	},

	head: [
		['link', { rel: "icon", href: "/media/NM.png" }],
		['meta', { name: "og:image", content: "/media/NM.png" }],
		['meta', { name: 'og:site_name', content: 'NaMaturu' }],
		['meta', { name: 'twitter:card', content: 'summary' }],
		['meta', { name: 'theme-color', content: '#1DCD9F' }],
		['meta', { name: 'robots', content: 'noindex, nofollow, noarchive' }],
		['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
	],

	markdown: {
		config: (md) => {
			md.use(math)
		},
	},
})
