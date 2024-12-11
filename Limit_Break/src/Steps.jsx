import { useState } from "react";

export default function Steps({ onStepEntry }) {
  const [STEP, setSTEP] = useState('');
  const [Message, setMessage]= useState('')
  const [stepSubmitted, setStepSubmitted] = useState(false);

const handleChange = (event) => {
    setSTEP(event.target.value);
  };

  const handleClick = () => {
    if (STEP.trim() !== '') {
      onStepEntry(STEP);
      console.log(STEP); 

      setSTEP(''); 
      setMessage('to overcome fears, it is important to create smaller goals to work towards overcoming bigger fears')
      setStepSubmitted(true);
    }
  };

  return (
    <>
    {!stepSubmitted && (
        <>
            <p>To overcome fears, it is important to create smaller goals <br></br>to work towards overcoming bigger fears</p>
            <p> What step would you like to add?</p> 
       
           {/* <div className="Fear"> */}
           {/* <div className="TheUserFear"> */}
           {/* <label htmlFor="userfear" className="form-label"></label> */}

           <div className="Steps">
          <div className="TheUserSteps">
          <label htmlFor="userSteps" className="form-label"></label>
           
            <input
              type="text"
              className="STEP"
              name="STEP"
              placeholder="Enter your step here"
              onChange={handleChange}
              value={STEP}
            />
            <br/>
            <button type="button" className="EnterStepBtn" onClick={handleClick}>
              Enter
            </button>
          </div>
        </div>
        </>
        
    )}
      
    </>
  );
}
