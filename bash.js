
var commands = require('./commands.js');

// Output a prc
//console.log(process.uptime());
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmdString = data.toString().trim();
  var cmdList = cmdString.split(/\s*\|\s*/g); // any amount of whitespace, pipe, any amount of whitespace
  console.log(cmdList);
  //var cmds = cmdStr.split(' ');
 // var file = cmds.slice(1).join(' ');
 // commands[cmds[0]](file);

  // else process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt > ');


});
//solutions at https://www.youtube.com/watch?v=v_lhkZ849jk
//last line
