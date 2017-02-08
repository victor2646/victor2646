var http = require('http');

http.createServer(function (req, res) {var request = require("request");
  var fs = require("fs");
  var cheerio = require("cheerio");
  request({
    url: "http://blog.infographics.tw",
    method: "GET"
  }, function(e,r,b) {
    if(e || !b) { return; }
    var $ = cheerio.load(b);
    var result = [];
    var titles = $("li.item h2");
    for(var i=0;i<titles.length;i++) {
      result.push($(titles[i]).text());
    }
    fs.writeFileSync("result.json", JSON.stringify(result));
  });
    console.log('request received');
    res.writeHead(200, {'Content-Type': 'text/plain'});
   // res.write("Ajax call");
     //res.end("end call");
  res.end('_testcb(\'{"message": "Hello world!"}\')');
}).listen(8000);