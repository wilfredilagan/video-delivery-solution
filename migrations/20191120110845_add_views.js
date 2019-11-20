
exports.up = async function(knex, Promise) {
    return await createViews();
    async function createViews(){

    
        await knex.raw('CREATE VIEW metadata AS SELECT pub_point_asset.publish_point, pub_point_metadata.pub_point_metadata_title, pub_point_metadata.pub_point_metadata_desc, pub_point_metadata.pub_point_metadata_tags FROM pub_point_asset INNER JOIN pub_point_metadata ON (pub_point_asset.pub_point_metadata_id = pub_point_metadata.pub_point_metadata_id);')
        await knex.raw('CREATE VIEW cart AS SELECT pub_point_asset.publish_point, pub_point_schedule.pub_point_schedule_pub_date, pub_point_schedule.pub_point_schedule_kill_date, pub_point_asset.video_id FROM pub_point_asset INNER JOIN pub_point_schedule ON (pub_point_asset.pub_point_schedule_id = pub_point_schedule.pub_point_schedule_id);')
        await knex.raw('CREATE VIEW schedule AS SELECT pub_point_asset.publish_point, pub_point_schedule.pub_point_schedule_pub_date, pub_point_schedule.pub_point_schedule_kill_date FROM pub_point_asset INNER JOIN pub_point_schedule ON (pub_point_asset.pub_point_schedule_id = pub_point_schedule.pub_point_schedule_id);')
    }
};

exports.down = function(knex, Promise) {
  
};
