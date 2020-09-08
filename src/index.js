import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContextProvider } from './AppContext'
import SimpleNotification from './components/Notification/Notification'

import 'antd/dist/antd.css'

ReactDOM.render(
  <AppContextProvider>
    <App />
    {/* <SimpleNotification /> */}
  </AppContextProvider>,
  document.getElementById('root')
)
