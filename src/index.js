import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GiphyService from './js/giphy-service.js';

function clearFields() {
  $('#searchKey').val("");
  $('.showImages').text("");
}

// function getElements(response) {
//   for (let i = 0; i < response.data.length; i++) {
//   if (response.data[i].images.downsized.url) {
//     $('.showImages').append(`<img src="${response.data[i].images.downsized.url}">`);
//   } else {
//     $('.showErrors').text(`There was an error processing your request: ${response.message}`);
//   }
// }}

// $(document).ready(function() {
//   $('#enterSearch').click(function() {
//     const keyword = $('#searchKey').val();
//     clearFields();
//     GiphyService.getGiphy(keyword)
//     .then(function(response) {
//       getElements(response);
//     });
//   });
// });




$(document).ready(function() {
  $('#enterSearch').click(function() {
    const keyword = $('#searchKey').val();
    clearFields();
    let promise = GiphyService.getGiphy(keyword);
    promise.then(function(response) {
      const body = JSON.parse(response);
      
      $('.showImages').append(`<img src="${body.data[0].images.downsized.url}">`);
      //.text or ????
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    
    });
  });
});
  