
// constructions SQL using Javascript

// knex migrate:make create_user_table


// Created Migration: /home/ec2-user/environment/mysql/migrations/20180417161748_create_user_table.js

///fill in up and down method in migrations


// run migration  knex migrate:latest

// knex migrate:make encrypt_user_password
//Created Migration: /home/ec2-user/environment/mysql/migrations/20180417165034_encrypt_user_password.js


module.exports = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'sandman',
    database: 'test'
  },
    migrations: {
      directory: './migrations'
    },
    //useNullAsDefault: true
  
}