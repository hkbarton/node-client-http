var http = require('../index.js');

http.get("http://www.google.com/", function(data, err, cookie, header){
    err && console.log(err);
    !err && console.log(header);
});
