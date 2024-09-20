import React from 'react';
import { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  return (
    <div className="m-10 font-mono text-xl">
      <h1>GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;
