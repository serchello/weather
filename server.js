const express = require("express");
const app = express();

const PORT = process.env.PORT || 2400;

const api = require("axios").create({
  baseURL: 'https://www.metaweather.com/api/location',
});



app.get("/locationSearch", async (req, res) => {
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


app.get("/location", async (req, res) => {
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




app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`);
});
