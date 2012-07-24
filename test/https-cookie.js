var http = require('../index.js');

http.get("https://www.google.com/", function(data, err, cookie){
    err && console.log(err);
    !err && console.log(cookie);
});
