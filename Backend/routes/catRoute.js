const catController = require("../controllers/catController");
const express = require("express");
const catRouter = express.Router();

catRouter.get("/cattos", catController.getCats);
catRouter.post("/createcattos", catController.postCats);
catRouter.delete("/deletecattos/:cat_id", catController.deleteCats);

module.exports = catRouter;