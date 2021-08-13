const express = require("express");
const app = express();


const api = require("axios").create({
  baseURL: 'https://www.metaweather.com/api/location',
});

// export async function locationSearch(filter) {
//   const { data } = await api.get('?query=san', {
//     params: {
//       food: filter || undefined,
//       per_page: ITEMS_PER_PAGE,
//     },
//   });
//   data.forEach(fillImage);
//   console.log(data);
//   return data;
// }



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




app.listen(2400, () => {
	console.log("Server started at port 2400");
});




// const express = require("express"),
//   app = express(),
//   port = process.env.PORT || 5000,
//   cors = require("cors");

// app.use(cors());
// app.listen(port, () => console.log("Backend server live on " + port));

// app.get("/", (req, res) => {
//   res.send({ message: "We did it!" });
// });



// const express = require('express');
// const cors = require('cors')
// const app = express();
// const port = process.env.PORT || 3001; 



 
// app.get('/products/:id', cors(corsOptionsDelegate), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
// })
 
// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })