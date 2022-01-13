const {Router} = require("express");
const getArticlesHandler = require("./get-articles"); 
const addArticleHandler = require("./add-article"); 
const deleteArticleHandler = require("./delete-article"); 

const router = module.exports = new Router();

router.get("/articles", getArticlesHandler);
router.post("/article", addArticleHandler);
router.delete("/article/:id", deleteArticleHandler);


