const express = require('express');
const expressLayout = require('express-ejs-layouts');
const ejs = require('ejs');
const path = require('path');
const blogRouter = require('./src/routes/blog_routers');
const app = express();


app.use(expressLayout);

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views'));

app.use('/', blogRouter);
app.use("/blog", blogRouter);

app.use(express.static('public'));


app.listen(3000, () => {
    console.log('3000 li server ayaklandırıldı');
});
