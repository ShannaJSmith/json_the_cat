const request = require('request');
const cmlArgs = process.argv.slice(2);
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breed = cmlArgs[0];

request(`${url}${breed}`, (error, response, body) => {
  if (body === '[]') {
    console.log('ERROR: Breed not found');
    return;
  }
  if (error) {   //example of an error would be a broken URL
    console.log('ERROR');
    return;
  }
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  const data = JSON.parse(body);
  console.log('body:', data[0].description);
});

