import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.integer('id').primary();
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.string('email', 80).notNullable().unique();
    table.string('name', 80).notNullable();
    table.string('role');
  });
  await knex.schema.createTable('posts', (table) => {
    table.specificType('id', 'CHAR(16)').primary();
    table.string('slug', 60).notNullable().unique();
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updatedAt').notNullable();
    table.boolean('isPublished').notNullable();
    table.string('title', 80).notNullable();
    table.string('author', 80).notNullable();
    table.integer('authorId');
    table.text('content');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('posts');
  await knex.schema.dropTable('users');
}
