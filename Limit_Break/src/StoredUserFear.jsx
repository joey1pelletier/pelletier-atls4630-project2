export default function StoredUserFear({ User_Fear, isNotOnScreen }) {
  return (
    <div className="TheUserFear">
      {User_Fear === '' ? (
        <p>No fears stored</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>FEAR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{User_Fear}</td>
            </tr>
          </tbody>
        </table>
      )}
   
    </div>
    
  );
  
}
