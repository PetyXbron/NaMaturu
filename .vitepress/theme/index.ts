// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';

import { inject as injectAnalytics } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

import GlobalFooter from './components/GlobalFooter.vue';
import GlobalConfetti from './components/Confetti.vue';
import Tooltip from './components/Tip.vue';

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
			'doc-after': () => h(GlobalFooter),
			'layout-bottom': () => h(GlobalConfetti)
		});
	},
	enhanceApp({ app, router, siteData }) {
		injectAnalytics();
		injectSpeedInsights();
		console.log('[NM] Vercel balíčky byly spuštěny.');

		app.component('Tip', Tooltip);
	}
} satisfies Theme;
