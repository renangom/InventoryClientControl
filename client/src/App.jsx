
import './app.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import EditClient from './Pages/EditClient'
import { useSelector } from 'react-redux'
import LoginPage from './Pages/Login'
import UserInfo from './Pages/UserInfo'


function App() {
  const isLoggedIn = useSelector((state) => {
    return state.user.isLoggedIn
  })


  return (
    <div>
      <Router>
        <Routes>
          <Route path='' element={isLoggedIn ? <Home /> : <LoginPage />} />
          <Route path='/client/:id' element={isLoggedIn ? <EditClient /> : <LoginPage />} />
          <Route path='/user/:id' element={isLoggedIn ? <UserInfo /> : <LoginPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
