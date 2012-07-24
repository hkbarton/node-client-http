var http = require('../index.js');

http.get("http://www.google.com/", function(data, err){
    data && console.log(data);
    err && console.log(err);
});
