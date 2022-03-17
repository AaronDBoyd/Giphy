import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// // import './../css/styles.css';
import GiphyService from './js/giphy-service.js';

function clearFields() {
  $('#searchKey').val("");
  $('.showImages').load("");
}

$(document).ready(function() {
  $('#enterSearch').click(function() {
    const gif = $('#Giphy').val();
    clearFields();
    let promise = GiphyService.getGiphy(keyword);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showImages').load(`${body.data[0].images.original.url}`);
      //.text or ????
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    
    });
  });
});
  