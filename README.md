##My First Web API

Nicholas Neumann-Chun

If you clone it, do "npm install" and then "node server.js" (or "nodemon server.js" if you're cool like that). It will serve up on port 3000. Endpoints are

- gravatar/<email address>
- sentence/<a sentence encoded with encodeURI>
- math/<function>

The math functions (with parameters n and m) are

- *unary:* square/n, cube/n, double/n, binary/n, hex/n,
- *binary:* max/n/m, min/n/m, add/n/m, multiply/n/m, divide/n/m
- *multiple:* sum/n/m/...