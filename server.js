const jsonSever = require('json-sever');
const sever = jsonSever.create();
const router = jsonSever.require('./data.json');
const middlewares = jsonSever.defaults({
    static : './build',
});
const port = process.env.PORT || 3000;

sever.use(middlewares);
sever.use(
    jsonSever.rewriter({
        "/api/*": '/$1',
    })
);

sever.use(router);

sever.listen(port, ()=>{
    console.log('sever is running');
});

