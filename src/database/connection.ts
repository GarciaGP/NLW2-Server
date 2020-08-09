import knex from 'knex';
import path from 'path';

// migrations - controlador de versão do DB

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

export default db;