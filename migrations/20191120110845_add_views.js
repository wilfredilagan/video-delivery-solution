
exports.up = async function(knex, Promise) {
    return await createViews();
    async function createViews(){

        await knex.raw('CREATE VIEW metadata AS SELECT pub_point_asset.publish_point, pub_point_metadata.pub_point_metadata_title, pub_point_metadata.pub_point_metadata_desc, pub_point_metadata.pub_point_metadata_tags FROM pub_point_asset INNER JOIN pub_point_metadata ON (pub_point_asset.pub_point_metadata_id = pub_point_metadata.pub_point_metadata_id);')
        await knex.raw('CREATE VIEW schedule AS SELECT pub_point_asset.publish_point, pub_point_schedule.pub_point_schedule_pub_date, pub_point_schedule.pub_point_schedule_kill_date FROM pub_point_asset INNER JOIN pub_point_schedule ON (pub_point_asset.pub_point_schedule_id = pub_point_schedule.pub_point_schedule_id);')
        await knex.raw('CREATE VIEW full_cart AS SELECT cart_item.cart_id, cart_item.cart_item_id, cart.publish_status, pub_point_asset.video_id, pub_point_asset.pub_point_asset_id, pub_point_asset.pub_point_schedule_id, pub_point_asset.pub_point_metadata_id, pub_point_schedule.pub_point_schedule_pub_date, pub_point_schedule.pub_point_schedule_kill_date, pub_point_metadata.pub_point_metadata_tags, pub_point_metadata.pub_point_metadata_title, pub_point_metadata.pub_point_metadata_desc FROM cart INNER JOIN cart_item ON (cart.cart_id = cart_item.cart_id) INNER JOIN pub_point_asset ON (cart_item.pub_point_asset_id = pub_point_asset.pub_point_asset_id) INNER JOIN pub_point_metadata ON (pub_point_metadata.pub_point_metadata_id = pub_point_asset.pub_point_metadata_id) INNER JOIN pub_point_schedule ON (pub_point_schedule.pub_point_schedule_id = pub_point_asset.pub_point_schedule_id);')
    }
};

exports.down = function(knex, Promise) {
  
};
