const express = require('express');
const blogControllers = require('../controllers/blog_controllers');
const router = express.Router();
/* 
not: burdada asıl işlevleri routerlar deil controllerlar yapacak yani once kontrol ettirecez sonra bu route calısacak mvc için onemli
*/
router.get("/", blogControllers.tumMakaleleriGetir);//biz direk fonksiyonu cagırmadık get yaptıında calısacak eger direk yazsaydık
router.get("/:makaleId", blogControllers.tekMakaleGetir);//eger idli makale getirmek istiyorsak /:kullanmamaız lazım
router.post("/", blogControllers.aramaYap)
//her baslangıcta calosacaktı



module.exports = router;