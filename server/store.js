const crypto = require('crypto')
const knex = require('knex')(require('../knexfile'))

module.exports = {
  createUser ({ username, password, role, department, email_address, profile_picture}) {
    console.log(`Add user ${username}`)
    const { salt, hash } = saltHashPassword({ password })
    return knex('users')
    .insert({
      salt: salt,
      password: hash,
      username: username,
      role: role,
      department: department,
      email_address: email_address,
      profile_picture: profile_picture,
    })
  },
  authenticate ({ username, password }) {
    console.log(`Authenticating user ${username}`)
    return knex('users').where({ username })
      .then(([user]) => {
        if (!user) return { success: false }
        const { hash } = saltHashPassword({
          password,
          salt: user.salt
        })
        return { success: hash === user.password }
      })
  }
}

function saltHashPassword ({
  password,
  salt = randomString()
}) {
  const hash = crypto
    .createHmac('sha512', salt)
    .update(password)
  return {
    salt,
    hash: hash.digest('hex')
  }
}

function randomString () {
  return crypto.randomBytes(4).toString('hex')
}