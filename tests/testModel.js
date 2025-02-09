const MarkovChain = require('../model');
function testMarkovChain() {
const markov = new MarkovChain(2);
const sampleText = "Hello world. Hello there. Hello world. Hello there.";
markov.train(sampleText);  
const generated = markov.generate("Hello world", 10);
console.log("Generated text:", generated);
}
testMarkovChain();
