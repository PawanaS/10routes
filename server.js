const express = require('express');
require("dotenv").config
const app = express();
const PORT = 3000
//const home = require('./views/Home')
//const About = require('./views/About')

// setting up view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// Build 10 Routes and say anything you want
app.get('/', (req, res) => {
    //res.send(`Home page`);
    res.render('Home');
    
  });

  app.get('/about', (req, res) => {
    //res.send('About ');
    res.render('About');
  });
  
  app.get('/contact', (req, res) => {
    res.send('Contact page');
  });
  
  app.get('/products', (req, res) => {
    res.send('Products page');
  });
  
  app.get('/products/', (req, res) => {
    res.send(`Product`);
  });
  
  app.get('/services', (req, res) => {
    res.send('Services page');
  });
  
  app.get('/services/', (req, res) => {
    res.send(`Service `);
  });
  
  app.get('/blog', (req, res) => {
    res.send('Blog page');
  });
  
  app.get('/blog/', (req, res) => {
    res.send(`Blog post `);
  });
  
  app.get('/404', (req, res) => {
    res.send('404 page');
  });

  app.listen(3000, () => {
    console.log(`Server running on port: ${PORT}`);
})