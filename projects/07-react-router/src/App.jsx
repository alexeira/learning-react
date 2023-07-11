import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import { Router } from './components/Router'
import { Page404 } from './pages/404.jsx'

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  }
]

export default function App () {
  return (
    <main>
      <h1>React Router<code className='practice'>for practice</code></h1>
      <Router routes={routes} defaultComponent={Page404} />
    </main>
  )
}
