require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const app = express()
const cors = require ('cors')

app.use(cors());
app.use(express.static('public'))
app.use(bodyParser.json())



app.post('/api/authenticate', (req, res) => {
  store
    .authenticate({
      username: req.body.username,
      password: req.body.password
    })
    .then(({ success }) => {
      if (success) res.sendStatus(200)
      else res.sendStatus(401)
    })
})

app.post('/api/adduser', (req,res) =>{
  console.log('test');
    store
    .createUser({
      username: req.body.username,
      password: req.body.password,
      role: req.body.role,
      department: req.body.department,
      email_address: req.body.email_address,
      profile_picture: req.body.profile_picture,
    })
    .then(() => res.sendStatus(200))
})

app.get('/', (req, res) => {
  res.sendStatus(200);
})




app.listen(4000, () => {
  console.log("Server running:  " + 4000)})
