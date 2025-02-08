const fs = require('fs');
const config = require('./config');
const MarkovChain = require('./model');
function loadTrainingData() {
const data = fs.readFileSync(config.trainingDataPath, 'utf8');
const jsonData = JSON.parse(data);
return jsonData.join(' ');
}
function trainModel() {
const text = loadTrainingData();
const markov = new MarkovChain(config.markovOrder);
markov.train(text);
return markov;
}
module.exports = {
trainModel
};
