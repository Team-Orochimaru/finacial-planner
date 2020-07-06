import React from 'react'
import PlaidLogin from './components/link'
import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      {/* <PlaidLogin /> */}
    </div>
  )
}

export default App
