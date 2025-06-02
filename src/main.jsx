import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

document.fonts.ready.then(() => {
  document.body.style.visibility = 'visible';
});
document.body.style.visibility = 'hidden';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
