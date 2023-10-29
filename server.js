// How nodejs differs from vanillajs
// 1) Node runs on a server - not in a browser (backend, not frontend)
// 2) Thee console is the terminal window
// 3) Global object instead of a window object
// 4) Has common core modules
// 5) CommonJS modules instead of ES6 modules
// 6) Missing some JS API's like fetch
console.log('Hello World')
//console.log(global)

const os = require('os')
const path = require('path')
const { add, subtract, multiply, divide, frequency, iavg, cirkelfreq } = require('./math');
const { log } = require('console');

console.log(add(2,3));
console.log(subtract(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));
console.log(frequency(50));
console.log(iavg(4,8,4,-2,-4,-2));
console.log(cirkelfreq(50) + ' rad / s');


// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));