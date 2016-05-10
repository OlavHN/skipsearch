let koa = require('koa');
let serve = require('koa-static');

let app = koa();

app.use(serve('public'))

app.listen(80);
