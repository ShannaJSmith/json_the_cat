const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {
  request(`${url}${breedName}`, (error, response, body) => {
    if (body === '[]') {
      callback('ERROR: Breed not found', null);
      return;
    }
    if (error) {
      callback(error, null);
      return;
    }
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    const data = JSON.parse(body);
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };


//callback is the (error, description)