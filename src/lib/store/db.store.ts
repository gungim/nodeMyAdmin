import { writable } from 'svelte/store';

export interface DBProp {
	port?: number;
	host?: string;
	user?: string;
	password?: string;
	type?: string;
	database?: string;
}

const createDBStore = () => {
	const { subscribe, update } = writable<DBProp>({
		port: 3306,
		host: 'localhost',
		user: 'admin',
		password: '123456',
		type: 'MySql',
		database: 'sys'
	});
	return {
		subscribe,
		update: (db: DBProp) => update((prev) => ({ ...prev, ...db }))
	};
};

export const db = createDBStore();
