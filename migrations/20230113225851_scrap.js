const tableName = "scrapp";
exports.up = async function(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await knex.schema.createTable(tableName, function(table){
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('title'),
    table.float('amount'),
    table.text('description'),
    table.string('data_rating'),
    table.string('pull_right'),
    table.timestamp("created_at").defaultTo(knex.fn.now());
})
};

exports.down = function(knex) {
    return knex.schema.dropTable(tableName);
};
