import React, { useEffect } from 'react';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Mail from './components/Mail.js'
import EmailList from './components/EmailList.js'
import './App.css';
import SendMail from './components/SendMail'
import { useSelector } from 'react-redux' 
import { selectSendMessageIsOpen } from './features/mailSlice'
import { selectUser } from './features/userSlice'
import Login from './components/Login.js';
import { useDispatch } from 'react-redux'
import { auth } from './components/Firebase'
import { login } from './features/userSlice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoUrl
      }))
      }
    })  
  }, [])

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)

  return (
    <Router>

    {!user ? (
      <Login />
    ) : (
      <div className="App">
        <Header />
         <div className='App__body'>
              <Sidebar />
                <Routes>
                  <Route path='/' element={<EmailList />} /> 
                  <Route path='/mail' element={<Mail />} /> 
                </Routes>
            </div>
               
          {sendMessageIsOpen && <SendMail className='sendMail__send' /> }
      </div>
        )
      }
      </Router>
    )
  }

export default App;
