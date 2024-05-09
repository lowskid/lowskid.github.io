const lastfm_username = "danielsbadtaste"
const lastfm_apikey = "cb1555188592fdd74931d79378590be3"
/* Playing */
let playingImg = document.getElementById("playingImg");
let playingSong = document.getElementById("playingSong");
let playingArtist = document.getElementById("playingArtist");
/* Recent1 */
let recentImg1 = document.getElementById("recentImg1");
let recentSong1 = document.getElementById("recentSong1");
let recentArtist1 = document.getElementById("recentArtist1");
/* Recent2 */
let recentImg2 = document.getElementById("recentImg2");
let recentSong2 = document.getElementById("recentSong2");
let recentArtist2 = document.getElementById("recentArtist2");
/* Recent3 */
let recentImg3 = document.getElementById("recentImg3");
let recentSong3 = document.getElementById("recentSong3");
let recentArtist3 = document.getElementById("recentArtist3");
/* Recent4 */
let recentImg4 = document.getElementById("recentImg4");
let recentSong4 = document.getElementById("recentSong4");
let recentArtist4 = document.getElementById("recentArtist4");

function fetchtrack(){
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastfm_username}&api_key=${lastfm_apikey}&format=json`).then(response => response.json()).then(e => {
    if(e["recenttracks"]){
        if (!e.recenttracks.track[0]["@attr"]){
          playingSong.style.color = '#b4f8c8'
        }
    }else{
       playingSong.style.color = '#ced4df' 

    }
      playingSong.innerText = e.recenttracks.track[0].name
      playingImg.src = e.recenttracks.track[0].image[1]["#text"]
      playingArtist.innerText = e.recenttracks.track[0].artist["#text"]

      recentSong1.innerText = e.recenttracks.track[1].name
      recentImg1.src = e.recenttracks.track[1].image[1]["#text"]
      recentArtist1.innerText = e.recenttracks.track[1].artist["#text"]

      recentSong2.innerText = e.recenttracks.track[2].name
      recentImg2.src = e.recenttracks.track[2].image[1]["#text"]
      recentArtist2.innerText = e.recenttracks.track[2].artist["#text"]
        
      recentSong3.innerText = e.recenttracks.track[3].name
      recentImg3.src = e.recenttracks.track[3].image[1]["#text"]
      recentArtist3.innerText = e.recenttracks.track[3].artist["#text"] 
        
      recentSong4.innerText = e.recenttracks.track[4].name
      recentImg4.src = e.recenttracks.track[4].image[1]["#text"]
      recentArtist4.innerText = e.recenttracks.track[4].artist["#text"]    
})
}

fetchtrack()
setInterval(fetchtrack, 4000);
