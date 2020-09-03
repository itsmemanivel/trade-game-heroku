var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');
var path = require('path');
var timer = require('./routes/timer');
var users = require('./routes/user');
var records = require('./routes/records');
var payments = require('./routes/payment');
var multer = require('multer');
var upload = multer();


//port
var port = process.env.port || 3000;

//db
var DBconfig = require('./admin/config/db');
var redisStore = require('connect-redis');
var client = require('./admin/config/cache');
var app = express();



// redisCached
// client.on('connect', () => {
//     console.log(`connected to redis`);
// });
// client.on('error', err => {
//     console.log(`Error: ${err}`);
// });






//db
mongoose.connect(DBconfig.db, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log('connected to db' + DBconfig.db);
});
// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err);
});



//cors
var corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposeHeaders: ['x-auth-token']
};
app.use(cors(corsOption));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));



//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(upload.array());



app.use('/timer', timer);
app.use('/users', users);
app.use('/records', records);
app.use('/payments', payments);



// static files

app.use(express.static(path.join(__dirname, 'public/frontend')));
app.use('**', express.static(__dirname + '/public/frontend/index.html'));



app.listen(process.env.port || 3000, (err, res) => {

    console.log("App running on port: " + port);
});