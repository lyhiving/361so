var express = require('express');
var logger = require("morgan");
var errorhandler = require("errorhandler");
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();


app.set('port', process.env.PORT || 8000);
app.use(logger('combined'));

app.use(express.static(path.join(__dirname, 'public')));




/*app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
}); */
app.get('/', routes.index);
app.get('/pdf', user.pdf);
app.get('/downPdf', user.downPdf);
app.get('/mp3', user.mp3);
app.get('/down', user.downMp3);
app.get('/film', user.film);
app.get('/downFilm', user.downFilm);
app.get('/zh', user.zh);
app.get('/downZh', user.downZh);
app.get('/tw', user.tw);
app.get('/downTw', user.downTw);
app.get('/search', user.search);

app.get('/searchMp3', user.searchMp3);
app.get('/searchFilm', user.searchFilm);
app.get('/searchPdf', user.searchPdf);
app.use(errorhandler);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
