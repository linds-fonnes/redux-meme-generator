import React from "react";
import "./styles/Meme.css";

function Meme({ deleteMeme, topText, bottomText, imageUrl, id }) {
  function handleDeleteMeme() {
    deleteMeme(id);
  }

  return (
    <div className="Meme">
      <p className="Meme-top-text">{topText}</p>
      <img src={imageUrl} alt="meme" className="Meme-img" />
      <p className="Meme-bottom-text">{bottomText}</p>
      <button onClick={handleDeleteMeme}>X</button>
    </div>
  );
}

export default Meme;
