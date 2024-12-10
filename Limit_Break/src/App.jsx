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

  function handleReset(){ 
    setUserFear(''); 
    setSection_ON(false); 
    setButtonClicked(false); 
  }

  function handleUserSteps(){
      // handle user steps entry 
  }



  return (
    <div className="LimitBreak">
      <h1>LIMIT BREAK</h1>
      
      {!buttonClicked && <p>This app is designed to help the user overcome their fears</p>}
      
      <div className='UserFear'>
      {!buttonClicked && <button className='start' onClick={isOnScreen}>Start</button>}  
        {section_ON && <UserFear onFearEntry={handleUserFearInput} />}
      </div>

      <div className='StoredUserFear'>
        {userFear && (
          <>
           <StoredUserFear User_Fear={userFear} isNotOnScreen={isNotOnScreen} />
           <button className='reset' onClick={handleReset}>Reset</button>
           <button className='create-steps' onClick={handleUserSteps}>Enter Steps</button>
          </>
        )}
       
      </div>

    </div>
  );
}

export default App;
