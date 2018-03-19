const functions = require('firebase-functions');
const BASE_MAPS_URL = 'https://maps.googleapis.com/maps/api/';
const API_KEY = 'AIzaSyCcWQftr51E8GZR0nFG2N207HZm8cLIM2Y';
const client = require('superagent');
const cors = require('cors')();

exports.getPlacesByTextSearch = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    client.get(`${BASE_MAPS_URL}place/textsearch/json?query=${req.query.query}&types=park&key=${API_KEY}`)
      .then(({ body }) => res.json(body))
      .catch(({ error }) => res.status(500).send(error));
  });
});



(`${BASE_MAPS_URL}place/geocode/json?address=${encodeURI(query)}&${API_KEY}`)
  .then(response => {
    const lat = response.results[0].geometry.location.lat;
    const long = response.results[0].geometry.location.lng;
    return { lat, long };