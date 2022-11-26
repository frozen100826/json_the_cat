const request = require('request')
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


// request(url, (error, resp, body) => {
//    console.log(body);
//    console.log(typeof body);
//   const data = JSON.parse(body);
//     console.log(data);
//     console.log(typeof data);
//   if(error) {
//     console.log("error: ", error)
//   }
  
//   if(data[0]){
//       console.log(data[0].description)
//     }
//     else{
//       console.log('wrong name')
//     }

//   }
// )

//refactoring
const fetchBreedDescription = function(breedName, callback) {
  let searchAddress = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(searchAddress, (error, response, body) => {
    let description = "";
  
    if (body === '[]') {
      description = "Sorry, that breed was not found. Try another one!";
    } else {
      const data = JSON.parse(body)[0];
      description = data.description;
    }
    callback(error, description);
  });
};


module.exports = { fetchBreedDescription };