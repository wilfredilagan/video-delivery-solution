
// will automatically increment as well as updated_at and created_at fields using the t.timestamps method.

//creae schema
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', function (t) {
    t.increments('id').primary()
    t.string('username').notNullable()
    t.string('password').notNullable()
    t.timestamps(false, true)
})
};


//roll back
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user')
  };
