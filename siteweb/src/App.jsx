import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import LandingPage from './components/LandingPage';
import OverLayPage from './components/OverLayPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <OverLayPage />
      </div>
    </>
  )
}

export default App
