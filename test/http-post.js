var http = require('../index.js');

http.request("http://httpbin.org/post", function(data, err){
    data && console.log(data);
    err && console.log(err);
}, "fname=hello&lname=world", {"Content-Type":"application/x-www-form-urlencoded"});
