import { Link } from '../components/Link'

export function Page404 () {
  return (
    <section>
      <h1>Error :(</h1>
      <p>La página que estas buscando no existe.</p>
      <Link to='/'> ← Volver al inicio</Link>
    </section>
  )
}
