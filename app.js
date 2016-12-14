'use strict';
var pm2 = require('pm2');

pm2.connect((err) => {
  if (err) {
    console.error(err);
    process.exit();
  }

  pm2.start({
    script: 'child.js'
  }, (err, apps) => {
    pm2.disconnect();
  });
});

process.on('message', (data) => {
  console.log('Data', data.data);
});

setInterval(() => {
  console.log('Agent running');
}, 5000);
