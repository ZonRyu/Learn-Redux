import './App.css'

// Store 
interface CounterState {
  value: number
}

interface UserState {
  isSigedIn: boolean
}

// Actions
const IncrementByAmount = {
  type: 'INCREMENT', // Calling method name
  payload: 10 // Optional if the method needs parameters or data
}

const DecrementAction = {
  type: 'DECREMENT'
}

function App() {
  return (
    <div>
      <h1>Redux Complete Tutorial</h1>
    </div>
  )
}

export default App
