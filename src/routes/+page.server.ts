import { get_all_dbs_mysql } from '$lib/db/mysql/database';
import { db } from '$lib/store/db.store';
import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';

export const load = async () => {
	const { host, port, password, user } = get(db);

	if (password && host && user && port) {
		const dbs = await get_all_dbs_mysql({ host, port, password, user });
		return {
			success: true,
			databases: dbs,
			os: '',
			version: '0.1'
		};
	} else {
		throw redirect(308, '/login');
	}
};
