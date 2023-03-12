import './app.css'
import React from "react"
import Counter from "../counter"
import List from '../list'

const App: React.FC = () => {
  return (
    <div className="app">
      <Counter />
      <List />
    </div>
  )
}

export default App;
