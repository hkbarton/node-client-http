var http = require('../index.js');

http.request("http://www.snee.com/xml/crud/posttest.cgi", function(data, err){
    data && console.log(data);
    err && console.log(err);
}, "fname=hello&lname=world");
