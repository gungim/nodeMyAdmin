<script lang="ts">
	import Sidebar from '$lib/components/sidebar.svelte';
	import type { Information } from 'src/app';
	import { tabs, type TabProps } from '$lib/store/tabs.store';
	import TiDelete from 'svelte-icons/ti/TiDelete.svelte';
	import { modalStore, type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton';
	import AddTab from '$lib/components/add_tab.svelte';
	import Headbar from '$lib/components/headbar.svelte';
	import { get } from 'svelte/store';

	export let data: Information;
	const onClickDeleteTab = (id: string) => {
		tabs.deleteTab(id);
	};

	let currentTabId: string | null = null;

	function openAddTab(): void {
		const modalComponent: ModalComponent = {
			ref: AddTab
		};
		const alert: ModalSettings = {
			type: 'component',
			title: 'New SQL tab',
			component: modalComponent,
			buttonTextCancel: 'Cancel',
			buttonTextConfirm: 'OK'
		};
		modalStore.trigger(alert);
	}

	const saveTabContent = (tab: TabProps) => {
		tabs.updateTab(tab);
	};

	const onSelectTab = (id: string) => {
		currentTabId = id;
		if(currentTabId)
		saveTabContent({id: id, name:""})
	};
</script>

<div class="flex w-full">
	<Sidebar databases={data.databases} />
	<div class="border-l border-l-surface-600 p-2 w-full">
		<div class="flex w-full flex-col">
			<Headbar />

			<div class="flex gap-3">
				{#if $tabs.length > 0}
					{#each $tabs as tab}
						<div
							on:click={() => onSelectTab(tab.id)}
							class="flex gap-3 p-1.5 cursor-pointer hover:bg-surface-700 duration-300"
						>
							<div class="flex items-center gap-2">
								{tab.name}
								<button class="w-5 h-5" on:click={() => onClickDeleteTab(tab.id)}>
									<TiDelete />
								</button>
							</div>
						</div>
						<div />
					{/each}
				{/if}
				<div>
					<button class="btn btn-sm btn-filled-primary" on:click={openAddTab}>
						<span>+</span>
					</button>
				</div>
			</div>
			<textarea class="w-full h-full" value={''} />
		</div>
	</div>
	<button on:click={() => console.log(get(tabs))}>Log tab</button>
</div>
