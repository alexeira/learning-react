import './App.css'
import TwitterUser from './components/TwitterUser'

export default function App () {
  return (
    <main>
      <article className='tw-follow-card'>
        <h4 className='tw-u-might'>Tal vez te guste</h4>
        <TwitterUser userName='goncy' name='Goncy.tsx' />
        <TwitterUser userName='midudev' name={'Miguel Ángel Durán'.split(' ', 2).join(' ') + '...'} />
        <TwitterUser userName='alexeira' name='Alex Pincheira' />
        <a>Mostrar más</a>
      </article>
    </main>
  )
}
