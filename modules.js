const fs = require('fs');

const readStream = fs.createReadStream('./devt/mypen.txt', {
  encoding: 'utf8',
});

const writeStream = fs.createWriteStream('./devt/new.txt');

// readStream.on('data', (chunk) => {
//   console.log('---- NEW CHUNK ----');
//   console.log(chunk);
//   writeStream.write('\nNew CHUNK\n');
//   writeStream.write(chunk);
// });

readStream.pipe(writeStream);
