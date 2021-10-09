const api = require("axios").create({
  baseURL: 'https://www.metaweather.com/api/location',
});


async function getLocationSearch(req, res) {
  const {query} = req.query;
  try {

    const response = await api.get("/search/?query=" + query);
    return {data: response.data};

  } catch (err) {

		return { message: err };
	}
}


async function getLocation(req, res) {
  const {query} = req.query;
	try {
		  const response = await api.get("/"+query);
      return { data: response.data };

	} catch (err) {
		return { message: err };
	}
}

module.exports = {
  getLocationSearch,
  getLocation
};
