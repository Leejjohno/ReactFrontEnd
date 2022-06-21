import { useState, useEffect } from 'react';
import { PhotoContainer } from "./components/photoContainer";
import { LogOrSign } from './components/logOrSign';
import { fetchPictures } from '../utils';
import './App.css';

const App = () => {
  const [user, setUser] = useState();
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetchPictures(setPictures);
  }, []);

  const fetchPhotos = async () => {
    const res = await fetch("https://picsum.photos/v2/list");
    const data = await res.json();
    setPictures(data);
  }

  return (
    <div className="App">
      {user ? <h1>{user}</h1> : <h1>Type a name in</h1>}
      <input onChange={(event) => setUser(event.target.value)} />
      {pictures.map((item, index) => {
        return (
          <div>
            <h2>{item.author}</h2>
            <img 
            className='photoContainer'
            src={item.download_url}
            alt="random"
          />
          </div>
        )
      })}
    </div>
  );
}

export default App;
