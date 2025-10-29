import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
const container = document.getElementById('app-fst');

if (container) {
  createRoot(container).render(

    <StrictMode>
      <App />
    </StrictMode>,
  )
}