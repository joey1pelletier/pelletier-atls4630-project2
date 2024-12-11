import './App.css';
import { useState } from "react";
import UserFear from './UserFear';
import StoredUserFear from './StoredUserFear';
import Steps from './Steps';
import StoredUserStep from './StoredUserStep'


function App() {
  const [section_ON, setSection_ON] = useState(false);
  const [userFear, setUserFear] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [stepButtonClicked, setStepButtonClicked] = useState(false);
  const [userStep, setUserStep] = useState('');
  const [allUserSteps, setAllUserSteps] = useState([]);
  const [stepSection_ON, setStepSection_ON] = useState(false);

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

  function handleUserStepInput(step) {
    setUserStep(step);
    setAllUserSteps([...allUserSteps, step]);
    console.log(allUserSteps);
    setStepButtonClicked(true);
    setStepSection_ON(false);
  }

  // reset app back to start page 
  function handleReset() {
    setUserFear('');
    setSection_ON(false);
    setButtonClicked(false);
    setStepSection_ON(false);
    setAllUserSteps([]);
  }

  function handleUserSteps() {
    // handle user steps entry 
    console.log("input!");
    setStepSection_ON(true);
  }

  function handleRemoveStep(stepIndex) {
    setAllUserSteps((prevSteps) => prevSteps.filter((_, index) => index !== stepIndex));
    setStepSection_ON(false);
  }

  return (
    <div className="LimitBreak">
      <h1>LIMIT BREAK</h1>

      {/* If the start button hasn't been clicked - show the intro text and start button*/}
      {!buttonClicked && <h2>This app is designed to help the user overcome their fears</h2>}
      {!buttonClicked && <button className='start' onClick={isOnScreen}>Start</button>}

      {/* When section_ON is true - show the UserFear component*/}
      {section_ON && <UserFear onFearEntry={handleUserFearInput} />}

      {/*show user fear entry */}

      <div className='StoredUserFear'>
        {userFear && (
          <>
            <StoredUserFear User_Fear={userFear} isNotOnScreen={isNotOnScreen} />

            <div className='BUTTONS'>
              {/*show reset button */}
              <button className='reset' onClick={handleReset}>Reset</button>

              {/*show enter steps button */}
              <button className='create-steps' onClick={handleUserSteps}>Enter Steps</button>
            </div>

          </>
        )}
      </div>

      <div className='StoredUserSteps'>

        {stepSection_ON && <Steps onStepEntry={handleUserStepInput} />}

        <div className='EnteredSteps'>
          {allUserSteps.length > 0 && (
            allUserSteps.map((step, index) => (
              <StoredUserStep 
              key={index} 
              User_Step={step} 
              stepIndex={index} 
              isNotOnScreen={isNotOnScreen}
              onRemoveStep={handleRemoveStep} />
            ))
          )}

          {/* {console.log(section_ON)};
        {stepSection_ON && <Steps onStepEntry={handleUserStepInput}  />}
        
        <div className='EnteredSteps'>
        { userStep && (
            <>
            {
              allUserSteps.map((n, index) => (
                <StoredUserStep key={index} User_Step={n} isNotOnScreen={isNotOnScreen} />
                
              ))
            }
            </>
          )} */}
        </div>

      </div>


    </div>
  );
}

export default App;
