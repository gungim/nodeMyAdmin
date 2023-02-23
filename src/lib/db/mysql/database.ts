import { connection } from './connection';
import mysql from 'mysql2/promise';

interface CProps {
	host: string;
	port: number;
	user: string;
	password: string;
}

export async function get_all_dbs_mysql({
	host,
	port,
	user,
	password
}: CProps): Promise<Array<string>> {
	try {
		const databases: Array<string> = [];

		if (!port) port = 3306;

		const conn = await mysql.createConnection({ host, port, user, password, database: 'sys' });

		const [databases_raw] = await conn.query('SHOW DATABASES;');
		databases_raw.forEach((db) => {
			databases.push(db.Database);
		});
		connection.destroy();
		return databases;
	} catch (error) {
		throw error;
	}
}
