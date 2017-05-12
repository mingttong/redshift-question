/**
 * Created by lenovo on 2017/5/12.
 */

const http = require('http');
const fs = require('fs');

let server = http.createServer(function (req, res) {

  console.log('>' + req.url);

  let filePath = false;

  // router
  if (req.url === '/') {
    filePath = 'public/index.html';
  } else {
    filePath = 'public' + req.url;
  }

  let absPath = './' + filePath;

  // 检查文件是否存在
  fs.exists(absPath, (exists) => {

    if (exists) {

      fs.readFile(absPath, (err, data) => {

        if (err) {
          // 读取文件错误
        } else {

          // 返回页面
          res.writeHead(
            200,
            {"content-type": "text/html"}
          );

          res.end(data);

        }
      })
    }
  })

});

server.listen(8080, function () {
  console.log('listen on port 8080...');
});