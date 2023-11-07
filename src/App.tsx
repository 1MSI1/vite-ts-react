import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './ts-exercise-01'
import './ts-exercise-02'
import './ts-exercise-03'
import './ts-exercise-04'
import './ts-exercise-06'
import './ts-exercise-07'
import './ts-exercise-08'
import './ts-exercise-09'
import './ts-exercise-10'
import './ts-exercise-11'
import './ts-exercise-12'
import { Planet, PlanetsRoot } from './PlanetsTypes'

function App() {
  //TS Generics - type inference
  const [count, setCount] = useState(0)
  // TS Generics - explice type definition
  const [message, setMessage] = useState<string | number>("");
const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    async function fetchPlanets() {
      const result = await fetch('https://swapi.dev/api/planets/?page=1');
      if(result.ok) {
        const data: PlanetsRoot = await result.json();
        setPlanets(data.results);       
      }
    }
    fetchPlanets();
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
   

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>Lista planet <ul>{planets.map(({name}) => <li key={name}>{name}</li>)}</ul></div>
    </>
  )
}

export default App
