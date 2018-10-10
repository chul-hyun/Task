const parse = require('parse-git-config');

// sync
const config = parse.sync();

console.log(config)