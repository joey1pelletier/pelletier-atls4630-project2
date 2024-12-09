import './App.css';
import { useState } from "react";
import UserFear from './UserFear';
import StoredUserFear from './StoredUserFear';

function App() {
  const [section_ON, setSection_ON] = useState(false); 
  const [userFear, setUserFear] = useState(''); 
  const [buttonClicked, setButtonClicked] = useState(false);
  
  
  function isOnScreen() {
    setSection_ON(true);
    setButtonClicked(true);
  }

  function isNotOnScreen() {
    setSection_ON(false);
    
  }
  
  function handleUserFearInput(fear) {
    setUserFear(fear);
    setSection_ON(false); 
  }



  return (
    <div className="LimitBreak">
      <h1>LIMIT BREAK</h1>
      
      {!buttonClicked && <p>this app is designed to help the user overcome their fears</p>}
      
      <div className='UserFear'>
      {!buttonClicked && <button onClick={isOnScreen}>Start</button>}  
        {section_ON && <UserFear onFearEntry={handleUserFearInput} />}
      </div>

      <div className='StoredUserFear'>
        {userFear && <StoredUserFear User_Fear={userFear} isNotOnScreen={isNotOnScreen} />}
        
        {buttonClicked && <button onClick={isOnScreen}>Create Steps</button>} 
      </div>




    </div>
  );
}

export default App;
