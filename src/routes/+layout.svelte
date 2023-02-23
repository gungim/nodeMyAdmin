<script lang="ts">
	import '../app.postcss';
	import './styles.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import { Modal } from '@skeletonlabs/skeleton';
</script>

<main class="dark:bg-surface-800 bg-success-50 min-h-screen">
	<slot />
	<Modal />
</main>

<style>
</style>
