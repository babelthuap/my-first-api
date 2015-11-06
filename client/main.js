'use strict';

$(document).ready(function() {

  $('button.math').click(evaluate);
  $('button.sentence').click(count);
  $('button.gravatar').click(getGravatar);
  $('input.math').on('keypress', (e) => { if (e.charCode === 13) evaluate(); });
  $('input.sentence').on('keypress', (e) => { if (e.charCode === 13) count(); });
  $('input.gravatar').on('keypress', (e) => { if (e.charCode === 13) getGravatar(); });

  function evaluate() {
    let op = $('input.math.op').val();
    let args = $('input.math.args').val().replace(/,\s*/g, '/');
    $.ajax(`http://localhost:3000/math/${op}/${args}`)
    .done((data) => {
      $('span.math').text(data);
    });
  }

  function count() {
    let sentence = encodeURI( $('input.sentence').val() );
    $.ajax(`http://localhost:3000/sentence/${sentence}`)
    .done((data) => {
      let counts = JSON.parse(data);
      $('span.sentence').text(`Letters: ${counts.letters}, ` + 
                              `Spaces: ${counts.spaces}, ` +
                              `Words: ${counts.words}`);
    });
  }

  function getGravatar() {
    let email = $('input.gravatar').val();
    $.ajax(`http://localhost:3000/gravatar/${email}`)
    .done((data) => {
      let $img = $('<img>').attr('src', data + '?s=256');
      $('div.gravatar').empty().append( $img );
    });
  }

});
