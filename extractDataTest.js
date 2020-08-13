const playlistData = require('./playlistData');


// playlistData.tracks.items[0].track.preview_url
// console.log(playlistData.tracks.items[44].track.preview_url);
// console.log(playlistData.tracks.items[44].track.name)
const listOfUrls = [];

playlistData.tracks.items.forEach((item) => {
  if (item.track.preview_url !== null) {

    const eachSong = [];
    eachSong.push(item.track.name);
    eachSong.push(item.track.preview_url);
    // eachSong[item.track.name] = item.track.preview_url;
    listOfUrls.push(eachSong);
    // console.log(typeof item.track.preview_url);
    // listOfUrls.push(item.track.preview_url);
  }
});

console.log('how many songs? ', listOfUrls.length);
// console.log('songs ', listOfUrls);
console.log('first song: ', listOfUrls[8]);
console.log((listOfUrls[0][2]));
// console.log('OBJECT KEYS*******', listOfUrls[0]);
// console.log('PLAYLIST URL*****', listOfUrls.length, listOfUrls);

// pushing into array turns the URLs into green strings, but if you isolate by element they turn white

// const rnd = Math.random() * 10;
// console.log(rnd);

// [
//   [ 'Shape of You',
//   'https://p.scdn.co/mp3-preview/84462d8e1e4d0f9e5ccd06f0da390f65843774a2?cid=774b29d4f13844c495f206cafdad9c86' ],
//   [ 'Closer',
//   'https://p.scdn.co/mp3-preview/8d3df1c64907cb183bff5a127b1525b530992afb?cid=774b29d4f13844c495f206cafdad9c86' ],
//   [ 'Dance Monkey',
//   'https://p.scdn.co/mp3-preview/535ffea66207a0fc07d57fbaea7b5594be797f9b?cid=774b29d4f13844c495f206cafdad9c86' ],
//   [ 'Thinking out Loud',
//   'https://p.scdn.co/mp3-preview/7fba47d0806142cb34ad2080a5f139eba915fe05?cid=774b29d4f13844c495f206cafdad9c86' ],
//   [ 'Havana (feat. Young Thug)',
//   'https://p.scdn.co/mp3-preview/663b794c2fc8da8f9bbe33698cb1bac567126a23?cid=774b29d4f13844c495f206cafdad9c86' ],
//   [ 'Say You Won\'t Let Go',
//   'https://p.scdn.co/mp3-preview/00825cb1779b31d68964eda6f2a7911fc2ae96c6?cid=774b29d4f13844c495f206cafdad9c86' ],
//   [ 'Photograph',
//   'https://p.scdn.co/mp3-preview/097c7b735ceb410943cbd507a6e1dfda272fd8a8?cid=774b29d4f13844c495f206cafdad9c86' ],
//   [ 'New Rules',
//   'https://p.scdn.co/mp3-preview/75a1b521de23958a2db9acf4fc8151999ee54bd7?cid=774b29d4f13844c495f206cafdad9c86' ]
// ]