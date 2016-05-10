let koa = require('koa');
let serve = require('koa-static');
let router = require('koa-router')();
let request = require('superagent');

let app = koa();

router.get('/search', function *(next) {
  let query = this.request.query.q;

  this.redirect('https://google.com/search?q=' + query);

  yield next;
});

router.get('/suggest', function *(next) {
  // Delegate suggestions to google
  this.body = request
    .get('http://suggestqueries.google.com/complete/search')
    .query({
      output: 'firefox',
      q: this.request.query.q
    })

  yield next;
});

app
  .use(serve('public'))
  .use(router.routes());

app.listen(process.env.PORT || 8080);
