const path = require('path');

const rootDir = path.resolve(__dirname,'..');
// const publicDir = path.resolve(rootDir, 'public');
const algorithmsDir = path.resolve(rootDir, 'Algorithms');
module.exports={
    rootDir:rootDir,
    algorithmsDir:algorithmsDir,
}