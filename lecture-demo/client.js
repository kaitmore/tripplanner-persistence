/* global $ */

$(function () {
  // load number of results
  $.ajax({
    method: 'GET',
    url: '/api/survey'
  })
  .then(function (responseData) {
    const actualNumber = responseData.length;
    $('#num-survery-results').text(actualNumber);
  })
  .catch(alert);

  // submit form data
  $('#survey').on('submit', function (event) {
    event.preventDefault();

    const name = $('#name').val();
    const understanding = $('#survey [name="understanding"]:selected').val();
    $.ajax({
      method: 'POST',
      url: '/api/survey',
      data: { // this is how you specify the request body for an AJAX request in jquery
        name: name,
        understanding: understanding
      }
    })
    .then(function () {
      console.log('successful submission');
      const currentNum = Number($('#num-survery-results').text());
      $('#num-survery-results').text(currentNum + 1);
    })
    .catch(alert);
  });
});
