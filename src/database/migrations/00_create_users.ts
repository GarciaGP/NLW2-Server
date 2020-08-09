import knex from 'knex';

export async function up(knex: knex) { // Define alterações no banco
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    })
}

export async function down(knex: knex) { // O que fazer em caso de erro
    return knex.schema.dropTable('users')
}