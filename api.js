var Story = require('./story');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { response } = require('express');
var app = express();

app.all('*', function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Methods", "*");
       res.header("Access-Control-Allow-Headers", "X-Requested-With");
       res.header('Access-Control-Allow-Headers', 'Content-Type');
       next();
});

app.use(cors());
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/api', router);

router.use((request,response,next) => {
    console.log('middleware up');
    next();
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/stories', function (req, res) {
    console.log('about to start dboperations')
      dboperations.getStories().then(result => {
        const list = result[0];
        console.log('result from azure is:', list);
       res.send(list) 
})  
})

app.get('/todaysqc', function (req, res) {
    console.log('about to start dboperations')
      dboperations.getTodaysQC().then(result => {
        const list = result[0];
        console.log('todays qc is:', list);
       res.send(list) 
})  
})

var port = process.env.PORT || 8700;
app.listen(port);
console.log('Story API is running at ' + port);

