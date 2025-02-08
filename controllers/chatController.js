const { trainModel } = require('../training');
const { sanitizeInput } = require('../utils');
const systemPrompt = require('../systemPrompt');
let markovModel = trainModel();
function handleChat(req, res) {
const userMessage = sanitizeInput(req.body.message || '');
if (!userMessage) {
return res.status(400).json({ error: "No message provided." });
}
const seed = userMessage.split(' ').slice(0, markovModel.order).join(' ');
const generatedText = markovModel.generate(seed);
res.json({
system: systemPrompt,
response: generatedText
});
}
module.exports = {
handleChat
};
