
import './App.css'
import { increment } from './features/counter/CounterSlice'
import { decrement } from './features/counter/CounterSlice'
import { reset } from './features/counter/CounterSlice'
import { incrementByAmount } from './features/counter/CounterSlice'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState(0)

  function handleIncrementClick(){
    dispatch(increment())
  }
  function handleDecrementClick(){
    dispatch(decrement())
  }
  function handleResetClick(){
    dispatch(reset())
  }
  function handleIncrementByAmountClick(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <>
    <div className='container'>
      <button onClick={handleIncrementClick}>Pluce</button> 
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}>Minuce</button> 
      <br />
      <br />
      <button onClick={handleResetClick}>Recat</button> 
      <br />
      <br />
      <input type='number'
      placeholder='Enter Amount'
      value={amount}
      onChange={(e) => setAmount(e.target.value)}/>
      <br/>
      <button onClick={() => dispatch(handleIncrementByAmountClick(amount))}>Increment By Amount</button>
    </div>
    </>
  )
}

export default App
