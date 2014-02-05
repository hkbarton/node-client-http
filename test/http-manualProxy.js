var http = require('../index.js');

http.setProxy('http://127.0.0.1:8081');
http.get("http://www.google.com/", function(data, err){
    data && console.log(data);
    err && console.log(err);
});
