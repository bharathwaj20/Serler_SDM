const createError = require('http-errors'),
	express = require('express'),
	path = require('path'),
	cookieParser = require('cookie-parser'),
	logger = require('morgan'),
  bodyParser = require('body-parser');

const registrationRoutes = require('./routes/registration');
const apiRoutes = require('./routes/api');
const mongoose = require('mongoose');
const config = require('./DB.js');

// require('dotenv').config({path : path.join(__dirname, '.env')});
// require('dotenv').config({path : path.join(__dirname, '.env.url-only')});

var app = express();


var distDir = '../dist';

app.use(logger(':date[iso] ":method :url HTTP/:http-version" :status :response-time ms ":referrer" ":user-agent"'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, distDir));
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

mongoose.Promise = global.Promise;
mongoose.set('debug', true);
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(/[\/]/,(req, res) => {
	res.render("index");
});

app.use(express.static(path.join(__dirname, distDir)))

app.use('/registration', registrationRoutes);

app.use(/^((?!(api)).)*/, (req, res) => {
	res.render("index");
});

app.use("/api", apiRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.error(err);
  // render the error page
  res.status(err.status || 500);
  res.status(500).send({ status : 500, message : "Internal Server Error" });
});

module.exports = app;
