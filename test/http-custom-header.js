var http = require('../index.js');

// we use iPhone as our user-agent and see what happen
http.request("http://twitter.com/", function(data, err){
    data && console.log(data);
    err && console.log(err);
}, null, {"User-Agent": "iPhone"});
