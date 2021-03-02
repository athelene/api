var Story = require('./story');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

const configurationOptions = {
    methods: ['GET'],
    origin: 'localhost:8080'
}

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/api', router);

router.use((request,response,next) => {
    console.log('middleware up');
    next();
})

app.get('/', cors(configurationOptions), function (req, res) {
  res.send('Hello World!')
})

router.route('/stories').get((request,response) => {

    dboperations.getStories().then(result => {

        response.json(result[0]);
})

})


var port = process.env.PORT || 8088;
app.listen(port);
console.log('Story API is running at ' + port);

