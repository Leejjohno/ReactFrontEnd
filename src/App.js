import { useState, useEffect } from 'react';
import { Display } from './components/display';
import { CreateUser } from './components/createUser';
import { LogUser } from './components/logUser';
import { DeleteUser } from './components/deleteUser';
import { UpdateEmail } from './components/updateEmail'
import { fetchPictures } from './utils';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [createUser, setCreateUser] = useState();
  const [deleteUser, setDeleteUser] = useState();
  const [updateEmail, setUpdateEmail] = useState();
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetchPictures(setPictures);
  }, []);

  return (
    <div className="App">
      <h1>{!isLoggedIn ? "Login" : isLoggedIn} </h1>
      {!isLoggedIn && <LogUser setIsLoggedIn={setIsLoggedIn} />}
      <h1>{!isLoggedIn ? "Create an account" : createUser} </h1>
      {!isLoggedIn && <CreateUser setCreateUser={setCreateUser} setIsLoggedIn={setIsLoggedIn} />}
      <h1>{isLoggedIn ? "Delete Your Account" : deleteUser} </h1>
      {isLoggedIn && <DeleteUser setDeleteUser={setDeleteUser} />}
      <h1>{isLoggedIn ? "Update your email" : updateEmail} </h1>
      {isLoggedIn && <UpdateEmail setUpdateEmail={setUpdateEmail} />}
      {isLoggedIn && <Display pictures={pictures} />}
    </div>
  );
};

export default App;
