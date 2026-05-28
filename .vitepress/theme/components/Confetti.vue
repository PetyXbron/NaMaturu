<script setup lang="ts">
import { ref, onMounted } from 'vue';
import confetti from 'canvas-confetti';

const showGraduation = ref(false);
let alreadyShown = false;

onMounted(() => {
	const isEnabled = (import.meta as any).env.VITE_graduated === 'true';

	if (isEnabled && !alreadyShown) {
		showGraduation.value = true;
		alreadyShown = true;

		confetti({
			startVelocity: 90,
			particleCount: 700,
			scalar: 1.3,
			spread: 200,
			origin: { y: 1.2 },
			ticks: 300,
		});

		setTimeout(() => {
			showGraduation.value = false;
		}, 5500);
	}
});
</script>
