import { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState(null); 
  const [username, setUsername] = useState(''); 
  const [error, setError] = useState(null);  

  const getUser = async () => {
    setError(null);  
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');  
      }
      const data = await response.json();
      setUserData(data);  
    } catch (error) {
      setError(error.message);  
    }
  };

  const getUsername = (e) => {
    setUsername(e.target.value);  
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <div>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={getUsername}
        />
        <button onClick={getUser}>Search</button>
      </div>

      {error && <div>{error}</div>}  

      {userData && (
        <div>
          <div>
            <img src={userData.avatar_url} alt={userData.login} />
          </div>
          <div>
            <h2>{userData.name || 'No name available'}</h2>
            <p>@{userData.login}</p>
            <p>{userData.location || 'Location not available'}</p>
            <div>
              <div>
                <p><strong>Followers:</strong> {userData.followers}</p>
              </div>
              <div>
                <p><strong>Public Repos:</strong> {userData.public_repos}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
