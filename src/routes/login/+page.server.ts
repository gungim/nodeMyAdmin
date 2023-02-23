import { db, type DBProp } from '$lib/store/db.store';
import type { RequestEvent } from '.svelte-kit/types/src/routes/$types';
import { redirect } from '@sveltejs/kit';
import mysql from 'mysql2/promise';

export const actions = {
	login: async ({ request }: RequestEvent) => {
		const form_data = await request.formData();

		const convertForm: DBProp = Object.fromEntries(form_data);
		try {
			db.update(convertForm);

			await mysql.createConnection(convertForm);
		} catch (error) {
			return error;
		}
		throw redirect(302, '/');
	}
};
