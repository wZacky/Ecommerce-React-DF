import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './context/AppContext'
import Paths from './routes'
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <Paths />
        {/* <App />
      </Paths> */}
    </AppProvider>
  </React.StrictMode>
)
