<script lang="ts">
	import { tabs, type TabProps } from '$lib/store/tabs.store';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { v4 } from 'uuid';
	import Space from './ui/space.svelte';

	export let parent: ModalSettings;
	const form: TabProps = {
		name: 'newTabs',
		id: v4(),
		content: ''
	};
	const handleSubmitForm = () => {
		tabs.addTab(form);
	};
</script>

<div>
	<input type="text" bind:value={form.name} placeholder="New tab name" />
	<Space>
		<button on:click={parent.onClose} class="btn btn-sm btn-filled-secondary"
			>{parent.buttonTextCancel || 'Cancel'}</button
		>
		<button on:click={handleSubmitForm} class="btn btn-sm btn-filled-primary"
			>{parent.buttonTextConfirm || 'Submit'}</button
		>
	</Space>
</div>
