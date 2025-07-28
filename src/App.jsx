import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactGA from "react-ga4";

ReactGA.initialize('G-CPNSL6DNTK');

function App() {
  
  const [count, setCount] = useState(0)

  useEffect(()=> {
    ReactGA.initialize('G-CPNSL6DNTK');
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "App.jsx" });

  }, [])

  return (
    <>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    
    </>
  )
}

export default App
