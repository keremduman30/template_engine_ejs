const axios = require('axios');

const tumMakaleleriGetir = async (req, res) => {
   
    try {
        const blogApi = await axios.get("https://emrealtunbilek.com/wp-json/wp/v2/posts?per_page=20");
       
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
        res.render("./makaleler/makale.ejs", {
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
    const aranacakKelime = req.body.kerem;
    try {
        const blogApi = await axios.get("https://emrealtunbilek.com/wp-json/wp/v2/posts?search=" + aranacakKelime);
    

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


module.exports = {
    tumMakaleleriGetir,
    tekMakaleGetir,
    aramaYap
}