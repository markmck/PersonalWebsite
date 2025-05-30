import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CyberpunkResume from './resume/resume.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CyberpunkResume />
  </StrictMode>,
)
