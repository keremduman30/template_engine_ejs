const express = require('express');
const expressLayout = require('express-ejs-layouts');
const ejs = require('ejs');
const path = require('path');
const blogRouter = require('./src/routes/blog_routers');
const app = express();

//her istek index.js e varmadan once layouta gitmesi için expressLayout kullanıdık ve use dedik
app.use(expressLayout);

//simdi biz eger veritabanına post yaparken express.json kulanıyorduk ama burda biz form duzeyindeki postlarda url kullacaz 
app.use(express.urlencoded({ extended: true }));

//ejs kulllanmak iiçn set diyorduk once views turnde snra path yolu default olarak views tir.ama biz viewsi daha duzenli olsun diye src
app.set('view engine', 'ejs');//eger defaultu degistireceksek bile bunu yazmalıyız cunku ejs formatında olsun dedik
//içinde yazdık oyuzden mecbur bu defaultu bozacaz
app.set('views', path.resolve(__dirname, './src/views'));

//mvc yapısına uygun olark gitmek için burda hiç fonksiyon yazmıyacaz hepsi routerlarda olacak
app.use('/', blogRouter);//router kullandıgımız için use dedik orda get kulnılacak cunku
app.use("/blog", blogRouter);

//oncelikle biz public içindeki dosyaları bir get olarak dusunmede express ile yol belirtmedden lullanabilirz yani publici tanımlıyoz
app.use(express.static('public'));//yani static ile bu public dosyasını tanımladık yani artık /css/main diyebilirim cunku publici tanıttık
//direk /images de diyebilirm yani kısaca pblic dosyasını tanıttık ve program burdanda acıldgı için hata vermiyor tanımlı cunku


app.listen(3000, () => {
    console.log('3000 li server ayaklandırıldı');
});
