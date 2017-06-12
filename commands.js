var fs = require('fs');
var request = require('request');

var done = function(output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
};

var pwd = function(stdin, filename, done) {
  done(process.cwd());
};

var ls = function(stdin, filename, done) {
  fs.readdir('.', function(err, files) {
  if (err) throw err;
  var str = ''
  files.forEach(function(file) {
    str += (file.toString() + "\n");
  });
  done(str);
  });
};

var echo = function(stdin, filename, done) {
  done(filename);
};

var date = function(stdin, filename, done){
  var d = new Date();
  var day = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var date = '' + day[d.getDay()] + ' ' + month[d.getMonth()] + ' ' + d.getDate();
  var time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
  //done(date + ' ' + time + ' EDT ' + d.getFullYear());
  done(Date());
};

var cat = function(stdin, filename, done){
  fs.readFile('./' + filename, function(err, data) {
    if (err) throw err;
    done(data);
  });
};

var head = function(stdin, filename, done){
  var input = (filename === undefined) ? stdin : filename;
fs.readFile('./' + filename, function(err, data) {
    if (err) throw err;
    var lines = data.toString('utf-8').split("\n").slice(0, 5).join('\n');
    // for (var i = 0; i < 5; i++){
    //     str += (lines[i] + '\n');
    // }
    done(lines);
  });
};

var tail = function(stdin, filename, done){
fs.readFile('./' + filename, function(err, data) {
    if (err) throw err;
    var lines = data.toString('utf-8').split("\n");
    var str = '';
    for (var i = lines.length -5; i < lines.length; i++){
       str += (lines[i] + '\n');
    }
    done(str);
  });
};

var sort = function(stdin, filename, done) {
fs.readFile('./' + filename, function(err, data) {
    if (err) throw err;
    var lines = data.toString('utf-8').split("\n").sort();
    var str = '';
    for (var i = 0; i < lines.length; i++){
      str += (lines[i] + '\n');
    }
    done(str);
  });
}

var wc = function(stdin, filename, done) {
fs.readFile('./' + filename, function(err, data) {
    if (err) throw err;
    var lines = data.toString('utf-8').split("\n");
    done(lines.length.toString());
  });
}

var uniq = function(stdin, filename, done) {
fs.readFile('./' + filename, function(err, data) {
    if (err) throw err;
    var lines = data.toString('utf-8').split("\n");
    var str = '';
    for (var i = 0; i < lines.length; i++){
      if (lines[i] !== lines[i-1]) {
        str += (lines[i] + '\n');
      }
    }
    done(body);
  });
}

var curl = function(stdin, filename, done) {
  request(filename, function(error, response, body) {
    if (error) throw error;
    done(body);
  });
};



module.exports = {
  pwd: pwd,
  ls: ls,
  echo: echo,
  date: date,
  cat: cat,
  head: head,
  tail: tail,
  sort: sort,
  wc: wc,
  uniq: uniq,
  curl: curl
};

