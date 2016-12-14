'use strict';

var kickoff = true;
var counter = 5;
var checkCounter = true;
console.log('spool started..');

function logMessage() {
  console.log('spool is running..');
  if (kickoff) {
    var spawn = require('child_process').spawn;
    var bat = spawn('cmd.exe', ['/c', 'pm2 start child.js --name 1234']);
    kickoff = false;
  }
  counter--;
  if (checkCounter && !counter) {
    var spawn = require('child_process').spawn;
    var bat = spawn('cmd.exe', ['/c', 'pm2 stop child.js --name 1234']);
    checkCounter = false;
  }
}

setInterval(logMessage, 2000);


