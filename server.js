let koa = require('koa');
let serve = require('koa-static');
let router = require('koa-router')();

let app = koa();

router.get('/search', function *(next) {
  console.log('SEARCH');
  console.log(request.query);

  yield next;
});

router.get('/suggest', function *(next) {
  console.log('suggest');
  console.log(request.query);

  this.body = [request.query.q || '', ['cookie']];

  yield next;
});

app.use(serve('public'));


app.listen(process.env.PORT || 8080);
