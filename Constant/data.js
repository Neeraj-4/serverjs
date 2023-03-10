export const LatestSongs = [
    { id: 'Chhod Diya', url: '/images/Arijit Singh/Chhod Diya.jpg', file: '/Songs/Arijit Singh/Chhod Diya.mp3', songName: 'Chhod Diya', artist: 'Arjit Singh' },
    { id: 'Rafta Rafta', url: '/images/Rafta Rafta.jpg', file: '/Songs/Rafta Rafta.mp3', songName: 'Rafta Rafta', artist: 'Atif Aslam' },
    { id: 'Pairs Ka Trip', url: '/images/Honey Singh/pairs ka trip.jpg', file: '/Songs/Honey Singh/pairs ka trip.mp3', songName: 'Pairs Ka Trip', artist: 'Honey Singh' },
    { id: 'Besharam Rang', url: '/images/Albums/Hindi Album/Pathaan/Besharam Rang.jpg', file: '/Songs/Besharam Rang.mp3', songName: 'Besharam Rang', artist: 'Shilpa Rao' },
    { id: "Believer", url: "/images/Imagine Dragon/Believer.jpg", file: "/Songs/Imagine Dragon/Believer.mp3", songName: "Believer", artist: "Imagine Dragon" },
    { id: "Kesariya", url: "/images/Arijit Singh/Kesariya.jpg", file: "/Songs/Arijit Singh/Kesariya.mp3", songName: "Kesariya", artist: 'Arjit Singh' },
    { id: 'Baarish Mein Tum', url: '/images/Neha Kakkar/Baarish Mein Tum.jpg', file: '/Songs/Neha Kakkar/Baarish Mein Tum.mp3', songName: 'Baarish Mein Tum', artist: 'Neha Kakkar, Rohanpreet Singh' },
    { id: 'Raatan Lambiyan', url: '/images/Jubin Nautiyal/Raatan Lambiyan.jpg', file: '/Songs/Jubin Nautiyal/Raatan Lambiyan.mp3', songName: 'Raatan Lambiyan', artist: 'Jubin Nautiyal, Asees Kaur' },

];
export const PartySongs = [

    { id: 'Rock-it', url: './images/rock_it.jpg', file: './Songs/rock-it.mp3', songName: 'Rock-it', artist: 'Rock' },
    { id: 'SunShine', url: './images/Sunshine.jfif', file: './Songs/sunshine.mp3', songName: 'Sunshine', artist: 'Sun' },
    { id: 'Aankhon Aankhon', url: '/images/Honey Singh/Aankhon Aankhon.jpg', file: '/Songs/Honey Singh/Aankhon Aankhon.mp3', songName: 'Aankhon Aankhon', artist: 'Honey Singh' },
    { id: 'Excuses', url: '/images/AP Dillon/Excuses.jpg', file: '/Songs/AP Dillon/Excuses.mp3', songName: 'Excuses', artist: 'AP Dillon' },
    { id: "Bones", url: "/images/Imagine Dragon/Bones.jpg", file: "/Songs/Imagine Dragon/Bones.mp3", songName: "Bones", artist: "Imagine Dragon" },
    { id: 'Brown Munde', url: '/images/AP Dillon/Brown Munde.jpg', file: '/Songs/AP Dillon/Brown Munde.mp3', songName: 'Brown Munde', artist: 'AP Dillon' },
    { id: 'pairs ka trip', url: '/images/Honey Singh/pairs ka trip.jpg', file: '/Songs/Honey Singh/pairs ka trip.mp3', songName: 'pairs ka trip', artist: 'Honey Singh' },
    { id: 'Town', url: './images/Town.jpg', file: './Songs/town.mp3', songName: 'Town', artist: 'Twon' },
    { id: 'Baarish Mein Tum', url: '/images/Neha Kakkar/Baarish Mein Tum.jpg', file: '/Songs/Neha Kakkar/Baarish Mein Tum.mp3', songName: 'Baarish Mein Tum', artist: 'Neha Kakkar, Rohanpreet Singh' },


];



export const SearchDatas = [
    { id: 'Chhod Diya', url: './images/Chhod Diya.jpg', file: './Songs/Chhod Diya.mp3', songName: 'Chhod Diya', artist: 'Arjit Singh' },
    { id: 'Rafta Rafta', url: './images/Rafta Rafta.jpg', file: './Songs/Rafta Rafta.mp3', songName: 'Rafta Rafta', artist: 'Atif Aslam' },
    { id: 'Pairs Ka Trip', url: './images/Honey Singh/pairs ka trip.jpg', file: './Songs/Honey Singh/pairs ka trip.mp3', songName: 'Pairs Ka Trip', artist: 'Honey Singh' },
    { id: 'Rock-it', url: './images/rock_it.jpg', file: './Songs/rock-it.mp3', songName: 'Rock it', artist: 'Post Malon' },
    { id: 'Sunshine', url: './images/Sunshine.jpg', file: './Songs/sunshine.mp3', songName: 'Sunshine', artist: 'Dua Lips' },
    { id: 'Town', url: './images/Town.jpg', file: './Songs/town.mp3', songName: 'Town', artist: 'Justin Bebar' },

];
/* if  song is not play and error occure like  
Uncaught (in promise) DOMException: Failed to load because no supported source was found.
just remove (dot) from (file) ans then it play  
*/
export const allArtists = [
    {
        id: 'Arijit Singh',
        url: '/images/Arijit Singh/Arijit Singh.jpg',
        playlist: [
            { id: "Chhod Diya", url: '/images/Arijit Singh/Chhod Diya.jpg', file: '/Songs/Arijit Singh/Chhod Diya.mp3', songName: 'Chhod Diya', artist: 'Arjit Singh' },
            { id: "Jhoome Jo Pathaan", url: '/images/Arijit Singh/Jhoome Jo Pathaan.jpg', file: '/Songs/Arijit Singh/Jhoome Jo Pathaan.mp3', songName: 'Jhoome Jo Pathaan', artist: 'Arjit Singh' },
            { id: "Kesariya", url: "/images/Arijit Singh/Kesariya.jpg", file: "/Songs/Arijit Singh/Kesariya.mp3", songName: "Kesariya", artist: 'Arjit Singh' }
        ]
    },
    {
        id: 'Atif Aslam',
        url: '/images/Atif Aslam/Atif Aslam.jpg',
        playlist: [
            { id: 'Dil Diyan Gallan', url: '/images/Atif Aslam/Dil Diyan Gallan.jpg', file: '/Songs/Atif Aslam/Dil Diyan Gallan.mp3', songName: 'Dil Diyan Gallan', artist: 'Atif Aslam' },
            { id: 'Dil Meri Na Sune', url: '/images/Atif Aslam/Dil Meri Na Sune.jpg', file: '/Songs/Atif Aslam/Dil Meri Na Sune.mp3', songName: 'Dil Meri Na Sune', artist: 'Atif Aslam' },
            { id: 'Jeena Jeena', url: '/images/Atif Aslam/Jeena jeena.jpg', file: '/Songs/Atif Aslam/Jeena Jeena.mp3', songName: 'Jeena Jeena', artist: 'Atif Aslam' },
            { id: 'Jeene Laga Hoon', url: '/images/Atif Aslam/Jeene Laga Hoon.jpg', file: '/Songs/Atif Aslam/Jeene Laga Hoon.mp3', songName: 'Jeene Laga Hoon', artist: 'Atif Aslam' },

        ]
    },
    {
        id: 'Honey Singh',
        url: '/images/Honey Singh/Honey Singh.jpg',
        playlist: [
            { id: 'Aankhon Aankhon', url: '/images/Honey Singh/Aankhon Aankhon.jpg', file: '/Songs/Honey Singh/Aankhon Aankhon.mp3', songName: 'Aankhon Aankhon', artist: 'Honey Singh' },
            { id: 'Brown Rang', url: '/images/Honey Singh/Brown Rang.jpg', file: '/Songs/Honey Singh/Brown Rang.mp3', songName: 'Brown Rang', artist: 'Honey Singh' },
            { id: 'Call Aundi', url: '/images/Honey Singh/Call Aundi.jpg', file: '/Songs/Honey Singh/Call Aundi.mp3', songName: 'Call Aundi', artist: 'Honey Singh' },
            { id: 'Chaar Botal Vodka', url: '/images/Honey Singh/Chaar Botal Vodka.jpg', file: '/Songs/Honey Singh/Chaar Botal Vodka.mp3', songName: 'Chaar Botal Vodka', artist: 'Honey Singh' },
            { id: 'pairs ka trip', url: '/images/Honey Singh/pairs ka trip.jpg', file: '/Songs/Honey Singh/pairs ka trip.mp3', songName: 'pairs ka trip', artist: 'Honey Singh' },

        ]
    },

    {
        id: 'Neha Kakkar',
        url: '/images/Neha Kakkar/Neha Kakkar.jpg',
        playlist: [
            { id: 'Baarish Mein Tum', url: '/images/Neha Kakkar/Baarish Mein Tum.jpg', file: '/Songs/Neha Kakkar/Baarish Mein Tum.mp3', songName: 'Baarish Mein Tum', artist: 'Neha Kakkar, Rohanpreet Singh' },
            { id: 'Dil Galti Kar Baitha hai', url: '/images/Neha Kakkar/Dil Galti Kar Baitha hai.jpg', file: '/Songs/Neha Kakkar/Dil Galti Kar Baitha hai.mp3', songName: 'Dil Galti Kar Baitha hai', artist: 'Neha Kakkar,Jubin Nautiyal' },
            { id: 'Taaron Ke Shehar', url: '/images/Neha Kakkar/Taaron Ke Shehar.jpg', file: '/Songs/Neha Kakkar/Taaron Ke Shehar.mp3', songName: 'Taaron Ke Shehar', artist: 'Neha Kakkar,Jubin Nautiyal' },
            { id: 'Teri Aankhon Mein ', url: '/images/Neha Kakkar/Teri Aankhon Mein.jpg', file: '/Songs/Neha Kakkar/Teri Aankhon Mein.mp3', songName: 'Teri Aankhon Mein ', artist: 'Neha Kakkar,Darshan Raval' },

        ]
    },
    {
        id: 'Jubin Nautiyal',
        url: '/images/Jubin Nautiyal/Jubin Nautiyal.jpg',
        playlist: [
            { id: 'Raatan Lambiyan', url: '/images/Jubin Nautiyal/Raatan Lambiyan.jpg', file: '/Songs/Jubin Nautiyal/Raatan Lambiyan.mp3', songName: 'Raatan Lambiyan', artist: 'Jubin Nautiyal, Asees Kaur' },
            { id: 'Dil Galti Kar Baitha', url: '/images/Jubin Nautiyal/Dil Galti Kar Baitha hai.jpg', file: '/Songs/Jubin Nautiyal/Dil Galti Kar Baitha hai.mp3', songName: 'Dil Galti Kar Baitha hai', artist: 'Jubin Nautiyal,Neha Kakkar' },
            { id: 'Tumse Pyaar Karke', url: '/images/Jubin Nautiyal/Tumse Pyaar Karke.jpg', file: '/Songs/Jubin Nautiyal/Tumse Pyaar Karke.mp3', songName: 'Tumse Pyaar Karke', artist: 'Jubin Nautiyal,Tulsi Kumar' },
            { id: 'Meri Zindagi Hai Tu', url: '/images/Jubin Nautiyal/Meri Zindagi Hai Tu.jpg', file: '/Songs/Jubin Nautiyal/Meri Zindagi Hai Tu.mp3', songName: 'Meri Zindagi Hai Tu ', artist: 'Jubin Nautiyal,Neeti Mohan' },

        ]
    },
    {
        id: 'AP Dillon',
        url: '/images/AP Dillon/AP Dillon.jpg',
        playlist: [
            { id: 'Brown Munde', url: '/images/AP Dillon/Brown Munde.jpg', file: '/Songs/AP Dillon/Brown Munde.mp3', songName: 'Brown Munde', artist: 'AP Dillon' },
            { id: 'Desires', url: '/images/AP Dillon/Desires.jpg', file: '/Songs/AP Dillon/Desires.mp3', songName: 'Desires', artist: 'AP Dillon' },
            { id: 'Excuses', url: '/images/AP Dillon/Excuses.jpg', file: '/Songs/AP Dillon/Excuses.mp3', songName: 'Excuses', artist: 'AP Dillon' },
            { id: 'Summer High', url: '/images/AP DIllon/Summer High.jpg', file: '/Songs/AP DIllon/Summer High.mp3', songName: 'Summer High ', artist: 'AP DIllon' },

        ]
    },
    {
        id: "Karan Aujla",
        url: "/images/Karan Aujla/Karan Aujla.jpg",
        playlist: [
            { id: '80 Degree', url: "/images/Karan Aujla/80 Degree.jpg", file: "/Songs/Karan Aujla/80 Degrees.mp3", songName: "80 Degree", artist: "Karan Aujla" }
        ]
    },
    {
        id: "Justin Bieber",
        url: "/images/Justin Bieber/Justin Bieber.jpg",
        playlist: [
            { id: "Believe", url: "/images/Justin Bieber/Believe.jpg", file: "/Songs/Justin Bieber/Believe.mp3", songName: "Believe", artist: "Justin Bieber" },
            { id: "Let Me Love You", url: "/images/Justin Bieber/Let Me Love You.jpg", file: "/Songs/Justin Bieber/Let Me Love You.mp3", songName: "Let Me Love You", artist: "Justin Bieber" },

        ]
    },
    {
        id: "Imagine Dragon",
        url: "/images/Imagine Dragon/Imagine Dragon.jpg",
        playlist: [
            { id: "Bones", url: "/images/Imagine Dragon/Bones.jpg", file: "/Songs/Imagine Dragon/Bones.mp3", songName: "Bones", artist: "Imagine Dragon" },
            { id: "Enemy", url: "/images/Imagine Dragon/Enemy.jpg", file: "/Songs/Imagine Dragon/Enemy.mp3", songName: "Enemy", artist: "Imagine Dragon" },
            { id: "Thunder", url: "/images/Imagine Dragon/Thunder.jpg", file: "/Songs/Imagine Dragon/Thunder.mp3", songName: "Thunder", artist: "Imagine Dragon" }

        ]
    },
    {
        id: "A.R.Rhaman",
        url: "/images/AR Rahman/A.R.Rahman.jpg",
        playlist: [
            { id: "Muqabla", url: "/images/AR Rahman/Muqabla.jpg", file: "/Songs/AR Rahman/Muqabla.mp3", songName: "Muqabla", artist: "A.R.Rahman" }
        ]
    }


];

export const HindiAlbum = [
    {
        id: 'Pathan',
        albumUrl: '/images/Albums/Hindi Album/Pathaan/Pathaan.jpg',
        albumName: 'Pathaan',
        playlist: [
            { id: "Jhoome Jo Pathaan", url: '/images/Arijit Singh/Jhoome Jo Pathaan.jpg', file: '/Songs/Arijit Singh/Jhoome Jo Pathaan.mp3', songName: 'Jhoome Jo Pathaan', artist: 'Arjit Singh' },

        ]
    },
    {
        id: '3 peg',
        albumUrl: '/images/Albums/Hindi Album/Pathaan/Pathaan.jpg',
        albumName: 'Pathaan',
        playlist: [
            { id: '3 pegs', url: '/images/Rafta Rafta.jpg', file: '/Songs/Rafta Rafta.mp3', songName: "abc", artist: 'xyz' }
        ]
    },
    {
        id: '5 peg',
        albumUrl: '/images/Albums/Hindi Album/Pathaan/Pathaan.jpg',
        albumName: 'Pathaan',
        playlist: [
            { id: '6 pegs', url: '/images/Rafta Rafta.jpg', file: '/Songs/Rafta Rafta.mp3', songName: "abc", artist: 'xyz' }
        ]
    },
];

export const EnglishAlbum = [
    {
        id: 'sathan',
        albumUrl: "/images/Arijit Singh/Kesariya.jpg",
        albumName: 'sathan',
        playlist: [
            { id: '2', url: '/images/Rafta Rafta.jpg', file: '/Songs/Rafta Rafta.mp3', songName: "abc", artist: 'xyz' }
        ]
    }
];

export const MainAlbum = [
    { id: "Hindi", albums: HindiAlbum },
    { id: "English", albums: EnglishAlbum }

]








