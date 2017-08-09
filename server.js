var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
    title: 'article-one|deepthi vj',
    heading: 'article one',
    date: 'july 5 1996',
    content: ` <p>
                this is the content for my first article.this is the content for my first article.this is the content for my first article.
                this is the content for my first article.this is the content for my first article.
                this is the content for my first article.
            </p>
             <p>
                this is the content for my first article.this is the content for my first article.this is the content for my first article.
                this is the content for my first article.this is the content for my first article.
                this is the content for my first article.
            </p>
             <p>
                this is the content for my first article.this is the content for my first article.this is the content for my first article.
                this is the content for my first article.this is the content for my first article.
                this is the content for my first article.
            </p>
             <p>
                this is the content for my first article.this is the content for my first article.this is the content for my first article.
                this is the content for my first article.this is the content for my first article.
                this is the content for my first article.
            </p>`
},
    'article-two': { 
    title: 'article-two|deepthi vj',
    heading: 'article two',
    date: 'july 10 1996',
    content: ` <p>
                this is the content for my second article.this is the content for my first article.this is the content for my first article.
                this is the content for my first article.this is the content for my first article.
                this is the content for my first article.
            </p>
             <p>
                this is the content for my first article.this is the content for my first article.this is the content for my first article.
                this is the content for my first article.this is the content for my first article.
                this is the content for my first article.
            </p>
             <p>
                this is the content for my first article.this is the content for my first article.this is the content for my first article.
                this is the content for my first article.this is the content for my first article.
                this is the content for my first article.
            </p>
             <p>
                this is the content for my first article.this is the content for my first article.this is the content for my first article.
                this is the content for my first article.this is the content for my first article.
                this is the content for my first article.
            </p>`},
    'article-three': { 
    title: 'article-three|deepthi vj',
    heading: 'article three',
    date: 'july 20 1996',
    content: ` <p>
                this is the content for my third article.this is the content for my first article.this is the content for my first article.
                this is the content for my first article.this is the content for my first article.
                this is the content for my first article.
            </p>
             <p>
                this is the content for my first article.this is the content for my first article.this is the content for my first article.
                this is the content for my first article.this is the content for my first article.
                this is the content for my first article.
            </p>
             <p>
                this is the content for my first article.this is the content for my first article.this is the content for my first article.
                this is the content for my first article.this is the content for my first article.
                this is the content for my first article.
            </p>
             <p>
                this is the content for my first article.this is the content for my first article.this is the content for my first article.
                this is the content for my first article.this is the content for my first article.
                this is the content for my first article.
            </p>`}
};
function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate = `<html>
             <head>
             <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,inetial-scale=1"/>
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
    <div class="container">
        <div>
            <a href='/'>home</a>
        </div>
        <hr/>
        <h3>
        ${heading}    
        </h3>
        <div>
            ${date}
        </div>
        <div>
          ${content}
        </div>
    </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
