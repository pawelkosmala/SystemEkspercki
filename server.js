//Install express server
const express = require('express');
const path = require('path');

const app = express();

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false});

// Serve only the static files form the dist directory
app.use(express.static('./dist/sys-exp-res'));

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
  }));
  
app.use(bodyParser.json());

app.get('/', function(req,res) {
    
res.sendFile(path.join(__dirname, '/dist/sys-exp-res/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);