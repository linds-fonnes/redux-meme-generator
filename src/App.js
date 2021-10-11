import MemeGenerator from "./MemeGenerator";
import { useSelector, useDispatch } from "react-redux";
import MemesList from "./MemeList";
import "./styles/MemeList.css";

function App() {
  const memes = useSelector((state) => state.memes);
  const dispatch = useDispatch();

  function addMeme(meme) {
    dispatch({ type: "ADD_MEME", meme: meme });
  }

  function deleteMeme(id) {
    dispatch({ type: "DELETE_MEME", id });
  }

  return (
    <div className="App">
      <MemeGenerator addMeme={addMeme} />
      <div className="MemeList">
        <MemesList memes={memes} deleteMeme={deleteMeme} />
      </div>
    </div>
  );
}

export default App;
