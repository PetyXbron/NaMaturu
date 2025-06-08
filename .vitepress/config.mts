import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "NaMaturu",
	description: "Učební materiály",
	lang: 'cs-CZ',
	cleanUrls: true,

	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Domů', link: '/' },
			{ text: 'Matematika', link: '/matematika', activeMatch: '/matematika/' },
			{ text: 'Zeměpis', link: '/zemepis', activeMatch: '/zemepis/' },
		],

		sidebar: {
			'/matematika/': {
				base: '/matematika/',
				items: [
					{
						text: 'Sekce 1',
						collapsed: true,
						items: [
							{ text: '1 Algebraické výrazy', link: '/1-algebraicke-vyrazy' },
							{ text: '2 Lineární rovnice a nerovnice', link: '/2-linearni-rovnice-a-nerovnice' },
							{ text: '3 Kvadratické rovnice a nerovnice', link: '/3-kvadraticke-rovnice-a-nerovnice' },
							{ text: '4 Rovnice s absolutní hodnotou', link: '/4-rovnice-s-absolutni-hodnotou' },
							{ text: '5 Soustavy rovnic a nerovnic', link: '/5-soustavy-rovnic-a-nerovnic' },
							{ text: '6 Goniometrické funkce a rovnice', link: '/6-goniometricke-funkce-a-rovnice' },
							{ text: '7 Exponenciální funkce a rovnice', link: '/7-exponencialni-funce-a-rovnice' },
							{ text: '8 Logaritmické funkce a rovnice', link: '/8-logaritmicke-funkce-a-rovnice' },
							{ text: '9 Ostatní funkce', link: '/9-ostatni-funkce' },
							{ text: '10 Zobrazení a konstrukce', link: '/10-zobrazeni-konstrukce-trojuhelniku-a-kruznice' },
							{ text: '11 Pravouhlý a obecný trojúhelník', link: '/11-pravouhly-a-obecny-trojuhelnik' },
						]
					},
					{
						text: 'Sekce 2',
						collapsed: true,
						items: [
							{ text: '12 Posloupnosti', link: '/12-posloupnosti' },
							{ text: '13 Nekonečná geometrická řada', link: '/13-nekonecna-geometricka-rada' },
							{ text: '14 Kombinatorika', link: '/14-kombinatorika' },
							{ text: '15 Pravděpodobnost a statistika', link: '/15-pravdepodobnost-a-statistika' },
							{ text: '16 Stereometrie', link: '/16-stereometrie' },
							{ text: '17 Objemy a povrchy těles', link: '/17-objemy-a-povrchy' },
						]
					},
					{
						text: 'Sekce 3',
						collapsed: true,
						items: [
							{ text: '18 Vektorová algebra', link: '/18-vektorova-algebra' },
							{ text: '19 Přímka v rovině a prostoru', link: '/19-primka-v-rovine-a-prostoru' },
							{ text: '20 Rovnice roviny', link: '/20-rovnice-roviny-a-vzajemna-poloha' },
							{ text: '21 Kružnice', link: '/21-kruznice' },
							{ text: '22 Elipsa', link: '/22-elipsa' },
							{ text: '23 Hyperbola', link: '/23-hyperbola' },
							{ text: '24 Parabola', link: '/24-parabola' },
							{ text: '25 Množiny a výroky', link: '/25-mnoziny-vyroky-typy' }
						]
					}
				]
			},
			'/': [
				{
					text: 'Examples',
					items: [
						{ text: 'Markdown Examples', link: '/markdown-examples' },
						{ text: 'Runtime API Examples', link: '/api-examples' },
					],
				},
			],
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/PetyXbron/NaMaturu' },
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
			copyright: '© 2025 <a href="https://github.com/PetyXbron" target="_blank">PetyXbron</a>',
		}
	},

	head: [
		['meta', { name: 'robots', content: 'noindex, nofollow, noarchive' }],
	],
})
