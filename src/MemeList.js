import React from "react";
import Meme from "./Meme";

function MemesList({ memes, deleteMeme }) {
  return memes.map((meme) => {
    return (
      <Meme
        key={meme.id}
        topText={meme.topText}
        bottomText={meme.bottomText}
        imageUrl={meme.imageUrl}
        deleteMeme={() => deleteMeme(meme.id)}
      />
    );
  });
}

export default MemesList;
