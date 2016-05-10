let koa = require('koa');
let serve = require('koa-static');
let router = require('koa-router')();

let app = koa();

router.get('/search', function *(next) {
  console.log('SEARCH');
  console.log(this.request.query);
  this.body = this.request.query.q;

  yield next;
});

router.get('/suggest', function *(next) {
  // TODO Augment with http://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=sea
  console.log('suggest');
  console.log(this.request.query);

  this.body = [this.request.query.q || '', ['cookie']];

  yield next;
});

app
  .use(serve('public'))
  .use(router.routes());

app.listen(process.env.PORT || 8080);
