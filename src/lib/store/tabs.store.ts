import { get, writable } from 'svelte/store';

export interface TabProps {
	id: string;
	name: string;
	content: string;
}

const createTabs = () => {
	const { subscribe, update} = writable<Array<TabProps>>([]);

	return {
		subscribe,
		addTab: (newTab: TabProps) => update((prev) => [...prev, newTab]),
		deleteTab: (id: string) => update((prev) => prev.filter((item) => item?.id !== id)),
		updateTab: (tab: TabProps) =>
			update((prev) => {
				return prev.map((item) => (item.id === tab.id ? { ...item, ...tab } : item));
			}),
	};
};

export const tabs = createTabs();
