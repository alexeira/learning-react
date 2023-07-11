import { Link } from '../components/Link'

export function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es la pagina de inicio</p>
      <Link to='/about'>About</Link>
    </>
  )
}
