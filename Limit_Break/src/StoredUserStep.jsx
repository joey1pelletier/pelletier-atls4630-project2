export default function StoredUserStep({ User_Step, stepIndex, onRemoveStep }) {
  const handleCheckboxClick = () => {
    onRemoveStep(stepIndex)
  }; 
  
  return (
      <div className="TheUserStep">
        {User_Step === '' ? (
          <p>No steps stored</p>
        ) : (
          <table>
            <thead>
                <tr className="checkbox-style">
                <input type="checkbox" id={`step-${stepIndex}`} onClick={handleCheckboxClick} />
                <label htmlFor={`step-${stepIndex}`}></label> {/* Custom label for checkbox */}
                </tr>
              <tr>
                <th className="step-header">STEP {stepIndex +1}</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{User_Step}</td>
              </tr>
            </tbody>
          </table>
        )}
      
      </div>
      
    );
    
  }
  