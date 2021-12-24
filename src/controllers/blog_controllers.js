const axios = require('axios');

const tumMakaleleriGetir = async (req, res) => {
    //biz istekte res.json yapacagımız gibi arayuz olarak html de gosterebiliriiz oyuzden html kulancaksak render kullacaz
    //bu bir proje old için emreltunbielk sitesini kulanıp datalarını alıp indexe yoluyacaz
    try {
        const blogApi = await axios.get("https://emrealtunbilek.com/wp-json/wp/v2/posts?per_page=20");
        // console.log(blogApi.data);s
        res.render("./makaleler/index.ejs", {
            makaleler: blogApi.data,
            sayfaBilgisi: blogApi.headers
        });
    } catch (hata) {
        console.log(hata.response.data);
        console.log(hata.response.status);//404
        console.log(hata.response.header);
        res.json({
            hata: "hata olustu : " + hata.response.data,
        });

    }



}
const tekMakaleGetir = async (req, res) => {
    const makaleID = req.params.makaleId;
    try {
        const tekMakale = await axios.get("https://emrealtunbilek.com/wp-json/wp/v2/posts/" + makaleID);
        res.render("./makaleler/makale.ejs", {//tek makaleye bu parametreyi makale ejs gonderiyozu
            makale: tekMakale.data,
        });

    } catch (hata) {
        console.log(hata.response.data);
        console.log(hata.response.status);//404
        console.log(hata.response.header);
        res.json({
            hata: "hata olustu : " + hata.response.data,
        });

    }



}

const aramaYap = async (req, res, next) => {
    const aranacakKelime = req.body.kerem;//biz input textin namesine search dedik bı istek yaparken bodysinde search olanı arıyacak 
    try {
        const blogApi = await axios.get("https://emrealtunbilek.com/wp-json/wp/v2/posts?search=" + aranacakKelime);
        //sayfalama bilgisi için kactane veri var kactane sayfa olmalı diye headersda bu bilgiler mevcut biz onlarıda aktaralım

        // console.log(blogApi.data);s
        res.render("./makaleler/index.ejs", {
            makaleler: blogApi.data,
          
        });
    } catch (hata) {
        console.log(hata.response.data);
        console.log(hata.response.status);//404
        console.log(hata.response.header);
        res.json({
            hata: "hata olustu : " + hata.response.data,
        });

    }
}

//birden gazla metod olacagı için obje olarak  dısarıya sunduk 
module.exports = {
    tumMakaleleriGetir,
    tekMakaleGetir,
    aramaYap
}