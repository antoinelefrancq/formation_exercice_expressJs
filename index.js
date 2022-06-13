const express = require('express');
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "integration");
app.use(express.static("static"));

const articles = require("./data/articles.json")
app.locals.articles = articles;


app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/article/:id', (req,res)=>{
    const idFromUrl=req.params.id
    const articleFound= articles.find((a)=>{
        return a.id==parseInt(idFromUrl)
    })
    if (articleFound){        
        res.render('article', {
            articleFound
        })
    } else{
        res.send('article not found')
    }        
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
