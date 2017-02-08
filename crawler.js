var request = require("request");
  var fs = require("fs");
  var cheerio = require("cheerio");
  request({
    url: "http://blog.infographics.tw",
    method: "GET"
  }, function(e,r,b) {
    if(e || !b) { return; }
    var $ = cheerio.load(b);
    var result = [];
    var titles = $("li.item h2");(function() {
  var fs, http, qs, server, url;

  http = require('http');

  url = require('url');

  qs = require('querystring');

  fs = require('fs');

  server = http.createServer(function(req, res) {
    var action, form, formData, msg, publicPath, urlData;
    urlData = url.parse(req.url, true);
    action = urlData.pathname;
    publicPath = __dirname + "\\public\\";
    if (action === "/Signup") {
     
      if (req.method === "POST") {
        formData = '';
        msg = '';
        return req.on('data', function(data) {
          formData += data;
          return req.on('end', function() {
            var user;
            user = qs.parse(formData);
            user.id = "123456";
            msg = JSON.stringify(user);
            res.writeHead(200, {
              "Content-Type": "application/json",
              "Content-Length": msg.length
            });
            return res.end(msg);
          });
        });
      } else {
        //form = publicPath + "ajaxSignupForm.html";
        form = "signup.html";
        return fs.readFile(form, function(err, contents) {
          if (err !== true) {
            res.writeHead(200, {
              "Content-Type": "text/html"
            });
            return res.end(contents);
          } else {
            res.writeHead(500);
            return res.end;
          }
        });
      }
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      return res.end("<h1>歡迎光臨Node.js菜鳥筆記</h1><p><a href=\"/Signup\">註冊</a></p>");
    }
  });

  server.listen(9000);

  console.log("Server跑起來了，現在時間是" + new Date());

}).call(this);
    for(var i=0;i<titles.length;i++) {
      result.push($(titles[i]).text());
    }
    fs.writeFileSync("result.json", JSON.stringify(result));
  });