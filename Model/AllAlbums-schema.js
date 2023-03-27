import mongoose from "mongoose";
const MainSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true

    },
    albums: [
        {
            id: {
                type: String,
                required: true,
                unique: true

            },
            url: String,
            playlist: [{
                id: {
                    type: String,
                    required: true,
                    unique: true
                },
                url: String,
                file: String,
                title: String,
                duration: String,
                artist: String,
            }]
        }
    ]
})
const AllAlbums = mongoose.models.MainAlbum || mongoose.model('MainAlbum', MainSchema);

export default AllAlbums;