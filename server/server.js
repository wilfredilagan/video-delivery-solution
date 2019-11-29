require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const app = express()
const cors = require ('cors')
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const { postgraphile } = require("postgraphile");
const PgSimplifyInflectorPlugin = require("@graphile-contrib/pg-simplify-inflector");

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});


app.use(
  postgraphile(
    process.env.DATABASE_URL || "postgres://postgres:sandman@localhost:5432/vds",
    "public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      graphqlRoute: '/gql/graphql',
      graphiqlRoute: '',
      skipPlugins: [
        require('graphile-build').NodePlugin,
        require('graphile-build-pg').PgRowByUniqueConstraint,
      ],
      simpleCollections: 'only',
      appendPlugins: [
        PgSimplifyInflectorPlugin
      ],
      graphileBuildOptions: {
        pgOmitListSuffix: true
      },
      enableCors: true
    }
    
  )
);

app.use(cors());
app.use(express.static('public'))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

const jwtMW = exjwt({
  secret: 'keyboard cat 4 ever'
});




app.post('/api/authenticate', (req, res) => {
  store
    .authenticate({
      username: req.body.username,
      password: req.body.password
    })
    .then(({ success }) => {
      if (success) {
        let token = jwt.sign({ username: success.username }, 'keyboard cat 4 ever', { expiresIn: 129600 });
        res.status(200).json({
          token
        })
      }else {
        console.log("Entered Password and Hash do not match!");
        res.status(401).json({
          sucess: false,
          token: null,
          err: 'Entered Password and Hash do not match!'
        });
      }
    })
})

app.post('/api/adduser', (req,res) =>{
  if (!req.body.username || !req.body.password || !req.body.role || !req.body.department || !req.body.email_address || !req.body.profile_picture){
    res.sendStatus(404);
  }else{
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
  }
})

app.get('/', jwtMW, (req, res) => {
  res.send('You are authenticated');
})




app.listen(4000, () => {
  console.log("Server running:  " + 4000)})
