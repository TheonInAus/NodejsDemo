var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      const oldPath = files.filetoupload[0].filepath;
      const newPath = './newdemofile.html';
      fs.copyFile(oldPath, newPath, function(err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      })
      //oldPath is fake path, not the real path
      //now can only move to or downside the same directory
      //fs.rename(oldPath, newPath, function(err) {
      //  if (err) throw err;
      //  res.write('File uploaded and moved!');
      //  res.end();
      //})

    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);