import './App.css';
import { useState } from "react";
import UserFear from './UserFear';
import StoredUserFear from './StoredUserFear';

function App() {
  const [section_ON, setSection_ON] = useState(false); 
  const [userFear, setUserFear] = useState(''); 
  const [buttonClicked, setButtonClicked] = useState(false);
  
  // turn on screen 
  function isOnScreen() {
    setSection_ON(true);
    setButtonClicked(true);
  }

  // turn off on screen 
  function isNotOnScreen() {
    setSection_ON(false);
  }
  
  // display user fear entry from StoredUserFear 
  function handleUserFearInput(fear) {
    setUserFear(fear); 
    setSection_ON(false); 
  }

  // reset app back to start page 
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
      
      {/* If the start button hasn't been clicked - show the intro text and start button*/}
      {!buttonClicked && <p>This app is designed to help the user overcome their fears</p>}
      {!buttonClicked && <button className='start' onClick={isOnScreen}>Start</button>}  

      {/* When section_ON is true - show the UserFear component*/}
        {section_ON && <UserFear onFearEntry={handleUserFearInput} />}
      
      {/*show user fear entry */}
      <div className='StoredUserFear'>
        {userFear && (
          <>
           <StoredUserFear User_Fear={userFear} isNotOnScreen={isNotOnScreen} />

           {/*show reset button */}
           <button className='reset' onClick={handleReset}>Reset</button>

           {/*show enter steps button */}
           <button className='create-steps' onClick={handleUserSteps}>Enter Steps</button>
          </>
        )}
       
      </div>

    </div>
  );
}

export default App;
