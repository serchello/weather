const { getLocationSearch, getLocation } = require('./model');


async function locationSearch(req, res) {

  return await res.send(await getLocationSearch(req));
}


async function location(req, res) {

  return await res.send(await getLocation(req));
}

module.exports = {
  locationSearch,
  location
};
