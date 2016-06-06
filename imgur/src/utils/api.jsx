var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '83a5c20d817c03d'; //would not want this to be visible if this app was a production app

module.exports = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })

    .then(function(response) {
      return response.json()
    })
  }
};
