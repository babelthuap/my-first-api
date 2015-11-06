'use strict';

$(document).ready(function() {

  $('#a-button').click(doThing);

  function doThing() {
    console.log('a thing');
  }

  console.log(`$.ajax('http://localhost:2000/sum/3/4/5/6')
  .done(function(data){
    console.log(data)
  });`)

  $.ajax('http://localhost:2000/sum/3/4/5/6')
  .done(function(data){
    console.log(data)
  });

});