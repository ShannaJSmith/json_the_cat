const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('ERROR FETCH DETAILS:', error);
  } else {
    console.log(description);
  }
});





//(error, description) <-callback function