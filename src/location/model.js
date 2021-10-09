const api = require("axios").create({
  baseURL: 'https://www.metaweather.com/api/location',
});


async function getLocationSearch(req, res) {
  const {query} = req.query;
  try {

    const response = await api.get("/search/?query=" + query);
    return {data: response.data};

  } catch (err) {

		res.status(500).json({ message: err });
	}
}


async function getLocation(req, res) {
  const {query} = req.query;
	try {
		  const response = await api.get("/"+query);
      return { data: response.data };

	} catch (err) {
		res.status(500).json({ message: err });
	}
}

module.exports = {
  getLocationSearch,
  getLocation
};
