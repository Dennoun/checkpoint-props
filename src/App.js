import './App.css';
import React from 'react';
import Profile from './Profile/Profile';
import pic from './picty.jpg';

// import styles from './style.css';



function App() {
  const handleName = name => alert(name);
  return (
  <>
    <Profile fullName="Wall-breaker" bio="GeNius" profession="Hacker" handleName={handleName} >
      <img src ={pic} alt ="profile pic" />
    </Profile>
  </> 
    
  );
}

export default App;
