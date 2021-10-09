const express = require('express');

const { locationSearch, location } = require("./controller");

const locationRouter = express.Router();

locationRouter.get("/locationSearch", locationSearch);
locationRouter.get("/location", location);

module.exports = locationRouter;
