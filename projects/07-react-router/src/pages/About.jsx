import { navigate } from '../utils/navigate'

export function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <p>Esta es la pagina de About</p>
      <button onClick={() => navigate('/')}>Ir a inicio</button>
    </>
  )
}
