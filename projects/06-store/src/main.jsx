import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { FiltersProviders } from './context/filters'

createRoot(document.getElementById('root')).render(
  <FiltersProviders>
    <App />
  </FiltersProviders>
)
