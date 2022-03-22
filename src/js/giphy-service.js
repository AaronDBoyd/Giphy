//Business Logic
export default class GiphyService {
  static getGiphy(keyword) {
    // return fetch(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${keyword}&limit=3`)
    // .then(function(response) {
    //   if (!response.ok) {
    //     throw Error(response.statusText);
    //   }
    //   return response.json();
    // })
    // .catch(function(error) {
    //   return error;
    // })
//   }
// }


return new Promise(function(resolve, reject) {
  let request = new XMLHttpRequest();
  const url = `http://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${keyword}&limit=3&lang=en`;
  request.onload = function() {
    if (this.status === 200) {
      resolve(request.response);
    } else {
      reject(request.response);
    }
  }
  request.open("GET", url, true);
  request.send();
},
  