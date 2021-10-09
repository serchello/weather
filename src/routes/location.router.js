const express = require('express');

const locationRouter = express.Router();

const api = require("axios").create({
  baseURL: 'https://www.metaweather.com/api/location',
});


locationRouter.use("/locationSearch", async (req, res) => {
  const {query} = req.query;
	try {
		  const response = await api.get("/search/?query=" + query);
      res.send( {
        data: response.data
      });
	} catch (err) {
		res.status(500).json({ message: err });
	}
});


locationRouter.use("/location", async (req, res) => {
  const {query} = req.query;
	try {
		  const response = await api.get("/"+query);
      res.send( {
        data: response.data
      });
	} catch (err) {
		res.status(500).json({ message: err });
	}
});


module.exports = locationRouter;
