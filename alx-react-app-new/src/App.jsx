import WelcomeMessage from './components/WelcomeMessage'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      </div>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <WelcomeMessage />
      <Counter />
      <Footer />
    </>
  )
}

export default App
