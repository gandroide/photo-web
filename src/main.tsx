import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css'; // "black" theme is just an example

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
