import React from 'react';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Mail from './components/Mail.js'
import EmailList from './components/EmailList.js'
import './App.css';
import SendMail from './components/SendMail'
import { useSelector } from 'react-redux' 
import { selectSendMessageIsOpen } from './features/mailSlice'

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

  return (
    <Router>
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
    </Router>
  );
}

export default App;
