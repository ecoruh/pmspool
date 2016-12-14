'use strict';

console.log('child started');
function logMessage() {
  console.log('child is running..');
}

setInterval(logMessage, 2000);

