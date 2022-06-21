import { useState, useEffect } from 'react';
import { PictureContainer } from "./components/pictureContainer";
import { LogOrSign } from './components/logOrSign';
import { fetchPictures } from './utils';
import './App.css';

const App = () => {
  const [user, setUser] = useState();
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetchPictures(setPictures);
  }, []);

  return (
    <div className="App">
      <h1>{user ? user : "LandingPage"}</h1>
      <LogOrSign setter={setUser} />
      {pictures.map((item, index) => {
        return (
          <PictureContainer
            key={index}
            author={item.author}
            className='pictureContainer'
            url={item.download_url}
          />
        )
      })}
    </div>
  );
};

export default App;
