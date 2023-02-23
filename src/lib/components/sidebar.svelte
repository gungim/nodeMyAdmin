<script lang="ts">
	import { db } from '$lib/store/db.store';
	import { get } from 'svelte/store';

	export let databases: Array<string>;
	const handleClickSelectDatabase = (item: string) => {
		db.update({ database: item });
	};
</script>

<!-- on:click={() => dialogs.modal(NewDb)} -->
<nav class="p-2">
	<button on:click={() => console.log(get(db))}>cls</button>
	{#if databases}
		{#each databases as database}
			<div
				class="px-3.5 py-1.5 hover:bg-surface-500 cursor-pointer"
				on:dblclick={() => handleClickSelectDatabase(database)}
			>
				<p class="dark:text-white text-black select-none inline-block">
					{database}
				</p>
			</div>
		{/each}
	{/if}
</nav>
<!-- Sidebar -->
