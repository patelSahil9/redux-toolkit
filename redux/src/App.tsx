import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { increment, decrement } from './redux/slices/counter'
import './App.css'
import { useAppDispatch,useAppSelector  } from './redux/hooks'

function App() {
  const count = useAppSelector((state)=>state.counter)
  const dispatch = useAppDispatch()

  return (
    <>
    
      <div>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>Count is {count}</h1>
        <button onClick={()=>dispatch(increment())}>increment </button>
        <button onClick={()=>dispatch(decrement())}>decrement </button>
        
      </div>
     
    </>
  )
}

export default App
