var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();

var allkraft = 'http://localhost:3030';

app.all("/allkraft/*", function(req, res) {
    console.log('redirecting to allkraft');
    apiProxy.web(req, res, {target: allkraft});
});

app.listen(3000);