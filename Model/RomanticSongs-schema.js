import mongoose from "mongoose";

const romanticSongsSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    title: String,
    playlist: [{
        id: {
            type: String,
            required: true,
        },
        url: String,
        title: String,
        file: String,
        duration:String,
        songName: String,
        artist: String
    }]


});

const RomanticSongs = mongoose.models.romanticSongs || mongoose.model('romanticSongs', romanticSongsSchema);

export default RomanticSongs;