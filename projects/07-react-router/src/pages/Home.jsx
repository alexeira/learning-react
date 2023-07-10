import { navigate } from '../utils/navigate'

export function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es la pagina de inicio</p>
      <button onClick={() => navigate('/about')}>About</button>
    </>
  )
}
