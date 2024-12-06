import { useState } from "react";

export default function UserFear({ onFearEntry }) {
  const [FEAR, setFEAR] = useState('');
  const [Message, setMessage]= ('')
  

const handleChange = (event) => {
    setFEAR(event.target.value);
  };

  const handleClick = () => {
    if (FEAR.trim() !== '') {
      onFearEntry(FEAR); 
      setFEAR(''); 
      setMessage('to overcome fears, it is important to create smaller goals to work towards overcoming bigger fears')
      
    }
  };

  return (
    <>
     
      <p>What is your fear?</p>
      <div className="Fear">
        <div className="TheUserFear">
          <label htmlFor="userfear" className="form-label"></label>
          <input
            type="text"
            className="FEAR"
            name="FEAR"
            placeholder="Enter your fear here"
            onChange={handleChange}
            value={FEAR}
          />
          <br />
          <button type="button" className="EnterFearbtn" onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
