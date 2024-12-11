export default function StoredUserStep({ User_Step, isNotOnScreen }) {
    return (
      <div className="TheUserStep">
        {User_Step === '' ? (
          <p>No steps stored</p>
        ) : (
          <table>
            <thead>
                <tr className="checkbox-style">
                <input type="checkbox" />
                </tr>
              <tr>
                <th className="step-header">STEP</th>
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
  