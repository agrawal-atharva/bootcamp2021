const { execFile } = require('child_process');

const child = execFile('node',['server.js'], (error, stdout, stderr) => {
    if(error){
        console.log(error.message);
        console.log('Error')
    }
    if(stderr){
        console.log(stderr);
        console.log('Terminal error')
    }
    console.log(stdout);
    console.log('Success')
})