import React from 'react';
import './App.css';
import Avatar from './components/Avatar.js';
import Badge from './components/Badge.js';
import ProductList from './components/ProductList.js';

const App = () => {
    const avatars = [
      {
        url: "https://66.media.tumblr.com/4a8a43573a9536e4241455c52341761c/tumblr_p3rna11bwn1x4j82do3_250.png"
      },
      {
        url: "https://66.media.tumblr.com/6bbd99868d1ef17d3c77e70455c534f7/tumblr_p3rna11bwn1x4j82do8_250.png"
      },
      {
        url: "https://66.media.tumblr.com/821176cd0a2bdea78e5d48373c93a836/tumblr_p3rna11bwn1x4j82do9_250.png"
      },
      {
        url: "https://66.media.tumblr.com/a7d05f9d015b7b1cf31f57762670dbff/tumblr_p3rna11bwn1x4j82do6_250.png"
      },
      {
        url: "https://66.media.tumblr.com/796d20ead68e3c47bee3efde3746330a/tumblr_p3nscu4bZf1x4j82do9_250.png"
      },
      {
        url: "https://66.media.tumblr.com/de29b4485fb1b06048662a44560bf77f/tumblr_p3rna11bwn1x4j82do5_250.png"
      },
      {
        url: "https://66.media.tumblr.com/fe47625d4c70cfee0bbb9d80e7fad039/tumblr_p3rna11bwn1x4j82do1_250.png"
      },
      {
        url: "https://66.media.tumblr.com/9673fee7d484d855de9aaada1cf72fa6/tumblr_p3rna11bwn1x4j82do4_250.png"
      },
      {
        url: "https://66.media.tumblr.com/de29b4485fb1b06048662a44560bf77f/tumblr_p3rna11bwn1x4j82do5_250.png"
      },
      {
        url: "https://66.media.tumblr.com/fe47625d4c70cfee0bbb9d80e7fad039/tumblr_p3rna11bwn1x4j82do1_250.png"
      },
    ]

  const avatarCollection = avatars.map((avatar, i) => {
    return <div className="container" key={i}><Avatar url={avatar.url} /><Badge number={Math.floor((Math.random() * 100))}/></div>
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>THE NEOPET CARTEL</h1>
        <p id="subheading">Your Pets Changed While You Were Away</p>
      </header>
      <div id="avatarCollection">
        {avatarCollection}
      </div>
      {/* <div id="productCollection">
        <ProductList />
      </div> */}
    </div>
  );
}

export default App;
