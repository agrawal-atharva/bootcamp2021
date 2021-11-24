const { Buffer } = require('buffer');

//length

const snowman = '☃️';
console.log('Variable length:', snowman.length);
const buff = Buffer.byteLength(snowman);
console.log('Buffer Length:', buff);

//alloc

const buf = Buffer.alloc(16);
console.log('Buffer Length with word "Hello":', buf.write('Hello', 'utf-8'));
console.log('Buffer Length with word " world!":', buf.write(' world!', 5, 'utf-8'));
console.log('Buffer data:', buf.toString());
