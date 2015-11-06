#My First Web API

Nicholas Neumann-Chun

If you clone it, do "`npm install`" and then "`node server.js`" (or "`nodemon server.js`" if you're cool like that). It will serve up on port 3000. Endpoints are

- `gravatar/`_email address_: responds with a url of the associated Gravatar picture
- `sentence/`_a sentence encoded with encodeURI_: counts the letters, spaces, and words in the sentence and responds with a JSON object containing that information
- `math/`_function_`/n/m/`...: evaluates the function with the given inputs

The math functions (with parameters `n` and `m`) are

- *unary:* `square/n`, `cube/n`, `double/n`, `binary/n`, `hex/n`,
- *binary:* `max/n/m`, `min/n/m`, `add/n/m`, `multiply/n/m`, `divide/n/m`
- *multiple:* `sum/n/m/`...
