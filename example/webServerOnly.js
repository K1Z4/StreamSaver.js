"use strict";

const express = require('express');
const path = require('path');
const port = process.env.PORT || 80; // PORT=8080 node webServerOnly.js

const app = express();
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname.replace("example", "src"))));
app.use(express.static(__dirname));

app.get('*', function(req, res) {
	res.status(404).send('404');
});

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('500 ERR');
});

app.listen(port);
console.log("Running")
