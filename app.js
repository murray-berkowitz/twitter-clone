const express = require('express');
const chalk = require('chalk');
const nunjucks = require('nunjucks'); /*Templating Engine*/

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache:true});

app.use(function(req,res,next){
    if(req.method == 'GET'){
        console.log(chalk.bold.red(req.method, req.url));
    }
    else if(req.method == 'POST'){
        console.log(chalk.bold.yellow(req.method, req.url));
    }
    else if(req.method == 'PUT'){
        console.log(chalk.bold.green(req.method, req.url));
    }
    else {
        console.log(chalk.bold.blue(req.method, req.url));
    }
    next();
})

app.use('/special/*', function(req,res,next){
    console.log('This is the special section!');
    next();
    /*res.send('request ended in special section');*/
})

app.get('/', function(req,res,next){
    res.render('index', {title:'Tweetr', people:[{name:'Murray'}, {name:'Annie'}, {name: 'Joel Embiid'}]});
});

app.get('/news', function(req,res,next){
    res.send('news biatch');
})

app.listen(port, function(){
    console.log(`Server running on ${port}...`);
})