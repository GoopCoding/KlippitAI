const config = require('./config');
class MarkovChain {
constructor(order = 2) {
this.order = order;
this.chain = {};
}
train(text) {
const words = text.split(/\s+/);
for (let i = 0; i <= words.length - this.order; i++) {
const key = words.slice(i, i + this.order).join(' ');
const nextWord = words[i + this.order];
if (!this.chain[key]) {
this.chain[key] = [];
}
if (nextWord) {
this.chain[key].push(nextWord);
}
}
}
generate(seed = '', maxLength = config.responseMaxLength) {
let keys = Object.keys(this.chain);
if (!seed || !this.chain[seed]) {
seed = keys[Math.floor(Math.random() * keys.length)];
}
let result = seed.split(' ');
let currentKey = seed;
for (let i = 0; i < maxLength; i++) {
const possibleNext = this.chain[currentKey];
if (!possibleNext || possibleNext.length === 0) break;
const nextWord = possibleNext[Math.floor(Math.random() * possibleNext.length)];
result.push(nextWord);
const words = currentKey.split(' ');
words.push(nextWord);
words.shift();
currentKey = words.join(' ');
}
return result.join(' ');
}
}
module.exports = MarkovChain;
