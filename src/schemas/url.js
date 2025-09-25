const { Schema, model } = require('mongoose');

const urlSchema = new Schema({
    originalUrl: { type: String, required: true },
    shortId: { type: String, required: true, unique: true },
    shortUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('Url', urlSchema);