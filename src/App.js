import "./App.css";
import Player from "./Player";
import React ,{useEffect, useState} from 'react';
function App() {
  const [songs] = useState([
    {
      title: "Raataan Lambiyan",
      artist: "Jubin Nautiyal",
      img_src: "https://www.pagalworld.pw/GpE34Kg9Gq/113558/145809-raataan-lambiyan-shershaah-mp3-song-300.jpg",
      src:"./songs/Raatan Lambiyan_64(PagalWorld.com.se) (1).mp3",
    },
    {
      title: " Tumse Pyaar Hai",
      artist: "Vishal Mishra",
      img_src: "https://www.pagalworld.pw/GpE34Kg9Gq/113514/145848-tumse-pyaar-hai-vishal-mishra-mp3-song-300.jpg",
      src: "./songs/Tumse Pyaar Hai_64(PagalWorld.com.se).mp3",
    },
    {
      title: " Ranjha",
      artist: "B Praak",
      img_src: "https://www.pagalworld.pw/GpE34Kg9Gq/113558/145847-ranjha-shershaah-mp3-song-300.jpg",
      src: "./songs/B Praak - Ranjha_64(PagalWorld.com.se).mp3",
    },
    {
      title: "Senorita",
      artist: "Shawn Mendes",
      img_src: "https://pagalworld.com.se/siteuploads/thumb/sft6/2836_4.jpg",
      src: "./songs/Senorita_64(PagalWorld.com.se).mp3",
    },
    {
      title: "Relation",
      artist: "Nikk",
      img_src: "https://www.pagalworld.com.de/_big/relation-nikk-250.jpg",
      src: "./songs/Relation - Nikk.mp3",
    },
    {
      title: "Lehanga",
      artist: "Jass Manak",
      img_src: "https://www.pagalworld.com.de/_big/lehanga-jass-manak-250.jpg",
      src: "./songs/Lehanga - Jass Manak.mp3",
    },
    {
      title: " Desh Mere Bhuj",
      artist: "Arijit Singh",
      img_src: "https://www.pagalworld.pw/GpE34Kg9Gq/113556/145865-desh-mere-bhuj-arijit-singh-mp3-song-300.jpg",
      src: "./songs/Desh Mere Bhuj - Arijit Singh.mp3",
    },
    {
      title: " Baarish Ban Jana ",
      artist: "Payal Dev",
      img_src: "https://www.pagalworld.pw/GpE34Kg9Gq/113514/145518-baarish-ban-jana-stebin-ben-mp3-song-300.jpg",
      src: "./songs/Stebin Ben - Baarish Ban Jaana_64(PagalWorld.com.se).mp3",
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  useEffect(()=>{
  setNextSongIndex(() => {
    if (currentSongIndex + 1 > songs.length - 1) {
      return 0;
    } else {
      return currentSongIndex + 1;
    }
  });
}, [currentSongIndex, songs.length]);


  return (
  <div className="app">
    <Player
       currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
    />
  </div>
  )
}

export default App;
