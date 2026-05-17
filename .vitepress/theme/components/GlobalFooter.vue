<template>
	<footer style="margin-top: 24px;">
		<p style="text-align: center; color: var(--vp-c-text-2); font-size: 14px; font-weight: 500;">
			Informace jsou čerpány z volně dostupných zdrojů a mohou obsahovat chyby.
			<br>
			Licence
			<strong><u><a href="https://github.com/PetyXbron/NaMaturu/blob/master/LICENSE" target="_blank">MIT</a></u></strong>
			- Volné použití a šíření
			<br>
			© 2025 - {{ currentYear.toString() }}
			<strong><u><a href="https://github.com/PetyXbron" target="_blank">PetyXbron</a></u></strong>
		</p>
	</footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const currentYear = ref(new Date().getFullYear());
</script>
