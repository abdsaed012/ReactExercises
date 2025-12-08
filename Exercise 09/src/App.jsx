import { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState(null);  // Store single user data
  const [username, setUsername] = useState('');  // Store the username entered by the user
  const [error, setError] = useState(null);  // Handle errors if user not found

  // Function to handle the search
  const getUser = async () => {
    setError(null);  // Reset error when trying a new search
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');  // If the response is not ok, throw an error
      }
      const data = await response.json();
      setUserData(data);  // Set the user data when found
    } catch (error) {
      setError(error.message);  // If error, set the error message
      setUserData(null);  // Reset user data if error occurs
    }
  };

  // Function to handle input change
  const getUsername = (e) => {
    setUsername(e.target.value);  // Update username state when input changes
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

      {error && <div className="error">{error}</div>}  {/* Show error message if any */}

      {userData && (
        <div className="user-card">
          <div className="avatar">
            <img src={userData.avatar_url} alt={userData.login} />
          </div>
          <div className="user-info">
            <h2>{userData.name || 'No name available'}</h2>
            <p className="username">@{userData.login}</p>
            <p className="location">{userData.location || 'Location not available'}</p>
            <div className="stats">
              <div className="stat-item">
                <p><strong>Followers:</strong> {userData.followers}</p>
              </div>
              <div className="stat-item">
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
