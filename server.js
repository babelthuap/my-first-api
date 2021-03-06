'use strict';

{

let http = require('http');
let unary = require('./unary');
let binary = require('./binary');
let multiple = require('./multiple');
var md5 = require('md5');

let server = http.createServer(function(req, res) { // request, response
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  let uri = req.url.split('/').slice(1); // e.g. -> ['math', 'cube', '2']

  // handle different endpoints here
  switch (uri.splice(0,1)[0]) { // cuts off (& returns) the first entry
    case 'math':
      res.write( handleMath(uri) );
      break;
    case 'gravatar':
      res.write( handleGravatar(uri) );
      break;
    case 'sentence':
      res.write( handleSentence(uri) );
      break;
    default:
      res.write('not a valid endpoint');
  }

  res.end();
});

server.listen(3000); // turn on the server

function handleSentence(uri) {
  let sentence = decodeURI(uri[0]);
  return JSON.stringify({ "letters": sentence.replace(/\W/g, '').length,
                          "spaces":  sentence.replace(/\S/g, '').length,
                          "words":   sentence.split(/\s+/).length });
}

function handleMath(uri) {
  let op = uri[0];
  let n = uri[1];
  let m = uri[2];
  if (unary[op] && !isNaN(+n)) {
    return `${n} ${op}d is ${unary[op](n)}`;
  } else if (binary[op] && !isNaN(+n) && !isNaN(+m)) {
    return `${op}(${n}, ${m}) -> ${binary[op](n, m)}`;
  } else if (multiple[op]) {
    return `${op} of numbers = ${multiple[op](uri.slice(1))}`;
  } else {
    return 'invalid function';
  }
}

function handleGravatar(uri) {
  if (uri[0]) {
    return 'https://s.gravatar.com/avatar/' + md5(uri[0]);
  } else {
    return 'email address expected but not received';
  }
}

}
