var http = require('../index.js');

http.get("https://www.google.com/", function(data, err){
    data && console.log(data);
    err && console.log(err);
});
