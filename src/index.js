import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContextProvider } from './AppContext'
import * as serviceWorker from './serviceWorker'

import SimpleNotification from './components/Notification/Notification'

import 'antd/dist/antd.css'

ReactDOM.render(
  <AppContextProvider>
    <App />
    {/* <SimpleNotification /> */}
  </AppContextProvider>,
  document.getElementById('root')
)
// serviceWorker.register()
