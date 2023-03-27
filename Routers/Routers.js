import express from 'express';
import { getAlbums } from '../Controllers/getAlbums.js';
import { getArtist } from '../Controllers/getArtist.js';
import { getPartySong } from '../Controllers/getPartySong.js';
import { getRequests } from '../Controllers/getRequest.js';
import {getLatestSong} from '../Controllers/getLatestSong.js'
import { getCategory } from '../Controllers/getCategory.js';
import { getRomanticSongs } from '../Controllers/getRomanticSongs.js';
const Routers = express.Router();
Routers.get('/Latest_song',getLatestSong);
Routers.get('/party_song',getPartySong);
Routers.post('/Wish',getRequests);
Routers.get('/romantic_song',getRomanticSongs);
Routers.get('/artists',getArtist);
Routers.get('/Albums',getAlbums);
Routers.get('/Category',getCategory);
export default Routers;