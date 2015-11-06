'use strict';

var request = require('request');

// Luke Skywalker
// request('http://swapi.co/api/people/', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     let bodyObj = JSON.parse(body);
//     console.log(bodyObj);
//     for (let person in bodyObj.results) {
//       console.log(person.name || ''); 
//     }
//   }
// })

// cube 8 using my local server
// request('http://localhost:2000/cube/2', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body);
//   }
// })


var _ = require('lodash');

// console.log( _.sample([1, 2, 3, 4], 2) );
// console.log( _.shuffle([1, 2, 3, 4]) );
// console.log( _.size({ 'a': 1, 'b': 2 }) );

var names = ['A', 'B', 'C', 'D', 'E', 'F'];
console.log('teams:', _.chunk(_.shuffle(names), 2))


var md5 = require('md5');
console.log(md5('nicholas.babelthuap@gmail.com'));

console.log(encodeURI('hi there'));
