# Client HTTP/HTTPS request in node

[![NPM version](https://badge.fury.io/js/client-http.png)](http://badge.fury.io/js/client-http)

## Feature List

1. Automatic proxy setting, if you set the proxy in your environment variable(http_proxy), it will be auto detected and used in your any HTTP request, also it will be used in your HTTPS request by HTTPS Tunnel(depend on node-tunnel) to make HTTPS request through HTTP. Optional, you can set proxy manually by calling setProxy(proxy).

2. Make your HTTP/HTTPS request with cookie, cookie will be automaticlly processed int any HTTP/HTTPS request and you can get cookie value in response.

3. HTTP redirect handling, HTTP redirect(301/302) will be automaticlly handled in you HTTP/HTTPS request.

## Example
    
    var http = require('client-http');

    http.get("http://www.google.com/", function(data){
        data && console.log(data);
    });

## Installation

    $ npm install client-http

## Usages

### HTTPS request

    var http = require('client-http');

    http.get("https://www.google.com/", function(data){
        data && console.log(data);
    });

### Read cookie from response

    var http = require('client-http');

    http.get("http://www.google.com/", function(data, err, cookie){
        !err && console.log(cookie);
    });

### Read header from response

    var http = require('client-http');

    http.get("http://www.google.com/", function(data, err, cookie, headers){
        !err && console.log(headers);
    });

### HTTP Post

    var http = require('client-http');

    http.request("http://www.snee.com/xml/crud/posttest.cgi", function(data){
        data && console.log(data);
    }, "fname=hello&lname=world");

### HTTP request with specific header

    var http = require('client-http');

    // we use iPhone as our user-agent and see what happen
    http.request("http://twitter.com/", function(data){
        data && console.log(data);
    }, null, {"User-Agent": "iPhone"});

### HTTP request with proxy setting

    var http = require('client-http');
    
    http.setProxy('http://127.0.0.1:8080');
    http.get("https://www.google.com/", function(data){
        data && console.log(data);
    });

### HTTP request with timeout setting

    var http = require('client-http');
   
    http.setTimeout(5000);
    http.get("https://www.google.com/", function(data){
        data && console.log(data);
    });
