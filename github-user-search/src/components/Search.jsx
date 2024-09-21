import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(''); 
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      const searchQuery = {
        username: username.trim(),
        location: location.trim(),
        minRepos: minRepos.trim(), 
      };
      const userData = await fetchAdvancedUserData(searchQuery);
      setUsers(userData.items);
    } catch (err) {
      setError('No users found for the given criteria');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label>Username</label>
          <input
            type="text"
            className="border rounded p-2"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label>Location</label>
          <input
            type="text"
            className="border rounded p-2"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label>Minimum Repos</label>
          <input
            type="number"
            className="border rounded p-2"
            placeholder="Min. repositories"
            value={minRepos} // Update to minRepos
            onChange={(e) => setMinRepos(e.target.value)} // Update to setMinRepos
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="mt-4">
        {users.length > 0 &&
          users.map((user) => (
            <div key={user.id} className="border-b p-4">
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                width="50"
                className="inline-block mr-4"
              />
              <div className="inline-block align-middle">
                <h3 className="text-lg font-bold">{user.login}</h3>
                <p>Location: {user.location || 'N/A'}</p>
                <p>Repos: {user.public_repos}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
