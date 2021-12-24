const express = require('express');
const blogControllers = require('../controllers/blog_controllers');
const router = express.Router();

router.get("/", blogControllers.tumMakaleleriGetir);
router.get("/:makaleId", blogControllers.tekMakaleGetir);
router.post("/", blogControllers.aramaYap)




module.exports = router;