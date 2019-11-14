
// constructions SQL using Javascript

// knex migrate:make create_user_table


// Created Migration: /home/ec2-user/environment/mysql/migrations/20180417161748_create_user_table.js

///fill in up and down method in migrations


// run migration  knex migrate:latest

// knex migrate:make encrypt_user_password
//Created Migration: /home/ec2-user/environment/mysql/migrations/20180417165034_encrypt_user_password.js


module.exports = {
  client: 'mysql',
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
  }
}