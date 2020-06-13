var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var poseInputRouter = require('./routes/poseInput');
var poseOutputRouter = require('./routes/poseOutput');
var historyRouter = require('./routes/history');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/rpi', poseInputRouter);
app.use('/api', poseOutputRouter);
app.use('/history', historyRouter);

module.exports = app;