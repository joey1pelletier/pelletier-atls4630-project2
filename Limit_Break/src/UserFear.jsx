import { useState } from "react";

export default function UserFear() {
  const [FEAR, setFEAR] = useState('');
  const [CurrFEAR, setCurFEAR] = useState('');

  const handleChange = (event) => {
    setFEAR(event.target.value);
  };

  const handleClick = () => {
    if (FEAR.trim() !== "") {
      setCurFEAR(FEAR); 
      setFEAR(''); 
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
            ENTER
          </button>
        </div>
      </div>

      <div className="TheUserFear">
        {CurrFEAR === '' ? (
          <p>No fears stored</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Fear</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{CurrFEAR}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
