import knex from 'knex';

export async function up(knex: knex) { // Define alterações no banco
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable(); // Dia Semana
        table.integer('from').notNullable(); // Horario init
        table.integer('to').notNullable(); // Horario Fim

        table.integer("class_id")
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
}

export async function down(knex: knex) { // O que fazer em caso de erro
    return knex.schema.dropTable('class_schedule')
}