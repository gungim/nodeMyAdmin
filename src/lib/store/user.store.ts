import { writable } from 'svelte/store';

interface IProps {
	host?: string;
	port?: number;
	database?: string;
	user?: string;
	password?: string;
}

export const dbConfig = writable<IProps>({
	host: undefined,
	port: undefined,
	database: undefined,
	user: undefined,
	password: undefined
});
