var createError = require('http-errors');
var express = require('express');
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var kanbanRouter = require('./routes/kanban');
const { tryConDB } = require('./utils/db');
var cors = require('cors'); // cors 패키지 추가
var app = express();

// CORS 미들웨어 설정
app.use(cors()); // 모든 도메인에서의 요청을 허용
// 데이터베이스 연결을 위한 미들웨어 사용
app.use(tryConDB);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/kanban', kanbanRouter);
app.use(router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

router.get('/test', function (req, res) {
  res.json({ 'message': 'nodemon 사용중' });
});

router.post('/test/post', function (req, res) {
  res.json({ 'message': 'hello post api nodejs-api' });
});

module.exports = app;
