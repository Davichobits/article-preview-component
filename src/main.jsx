import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ShowContextProvider } from './contexts/ShowContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShowContextProvider>
      <App />
    </ShowContextProvider>
  </StrictMode>,
)
