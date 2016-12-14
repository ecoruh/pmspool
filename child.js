'use strict';
var pm2 = require('pm2');

pm2.connect((err) => {
  if (err) {
    console.error(err);
    process.exit();
  }

  setInterval(() => {
    console.log('Test running');
    pm2.sendDataToProcessId(0,
      { type: 'process:msg', data: 'data', topic: 'topic' },
      (err, res) => {});
  }, 5000);
});
