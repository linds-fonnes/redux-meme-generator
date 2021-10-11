import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles/MemeGenerator.css";

function MemeGenerator({ addMeme }) {
  const INIT_FORM = {
    imageUrl: "",
    topText: "",
    bottomText: "",
  };
  const [form, setForm] = useState(INIT_FORM);

  function handleSubmit(evt) {
    evt.preventDefault();
    addMeme({ ...form, id: uuidv4() });
    setForm(INIT_FORM);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setForm((data) => ({ ...data, [name]: value }));
  }
  return (
    <div className="MemeGenerator">
      <h1>Meme Generator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="imageUrl">Image Link</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          onChange={handleChange}
          value={form.imageUrl}
        ></input>
        <label htmlFor="topText">Top Text</label>
        <input
          type="text"
          id="topText"
          name="topText"
          onChange={handleChange}
          value={form.topText}
        ></input>
        <label htmlFor="bottomText">Bottom Text</label>
        <input
          type="text"
          id="bottomText"
          name="bottomText"
          onChange={handleChange}
          value={form.bottomText}
        ></input>
        <button type="submit" id="submitMeme">
          Create Meme
        </button>
      </form>
    </div>
  );
}

export default MemeGenerator;
