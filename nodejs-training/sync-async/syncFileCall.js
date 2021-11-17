var fs = require('fs');

var syncCall = fs.readFileSync('./users.txt', 'utf-8');
console.log(syncCall);
console.log('Sync file call\n');

