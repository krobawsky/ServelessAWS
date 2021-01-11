const mongoose = require('mongoose');

const FilmSchema = new mongoose.Schema({
    title: String,
    director: String,
    producer: String,
    episode_id: Number,
    characters: [{
        type: String
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Film', FilmSchema);