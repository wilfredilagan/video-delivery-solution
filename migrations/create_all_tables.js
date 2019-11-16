
// will automatically increment as well as updated_at and created_at fields using the t.timestamps method.

//creae schema
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('users', function (t) {
        t.increments('user_id').primary()
        t.string('salt').notNullable()
        t.string('username').notNullable()
        t.string('password').notNullable()
        t.string('role').notNullable()
        t.string('department').notNullable()
        t.string('email_address').notNullable()
        t.string('profile_picture').notNullable()
        t.timestamps(true, true)
    })
    .createTable('series', function(t){
            t.integer('series_id').primary()
            t.string('series_title').notNullable()
            t.string('series_desc').notNullable()
            t.string('series_tags').notNullable()
    })
    
    .createTable('group_type', function(t){
            t.string('group_type').primary()
            t.boolean('active').notNullable()
            t.integer('user_id').notNullable()
            t.integer('series_id').notNullable()
            t.foreign('series_id').references('series_id')
                .on('series')
            t.foreign('user_id').references('user_id')
                .on('users')
    })
    .createTable('video_assets', function(t){
            t.string('video_id').primary()
            t.string('main_title').notNullable()
            t.integer('series_id').notNullable()
            t.string('main_description').notNullable()
            t.timestamp('early_pub_date', {useTz: true}).notNullable()
            t.timestamp('last_kill_date', {useTz: true}).notNullable()
            t.string('status').notNullable()
            t.timestamps(true,true)
            t.foreign('series_id').references('series_id')
                .on('series')
    })

    .createTable('pub_point_asset', function(t){
            t.increments('pub_point_asset_id').primary()
            t.string('pub_point_title').notNullable()
            t.string('pub_point_desc').notNullable()
            t.string('pub_point_tags').notNullable()
            t.string('video_id').notNullable()
            t.foreign('video_id').references('video_id')
                .on('video_assets')
    })
    
    .createTable('pub_dates', function(t){
            t.increments('pub_dates_id').primary()
            t.integer('pub_point_asset_id').notNullable()
            t.timestamp('pub_date', {useTz: true}).notNullable()
            t.timestamp('kill_date', {useTz: true}).notNullable()
            t.foreign('pub_point_asset_id').references('pub_point_asset_id')
                .on('pub_point_asset')
        })
};


//roll back
exports.down = function(knex, Promise) {
    return rollBack() 
    function rollBack(){
        knex.schema.dropTableIfExists('users')
        knex.schema.dropTableIfExists('series')
        knex.schema.dropTableIfExists('group_type')
        knex.schema.dropTableIfExists('video_assets')
        knex.schema.dropTableIfExists('pub_point_asset')
        knex.schema.dropTableIfExists('pub_dates')
    }
    
  };

