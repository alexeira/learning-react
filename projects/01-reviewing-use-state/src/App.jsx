import './App.css'
import TwitterUser from './components/TwitterUser'

const users = [
  {
    userName: 'goncy',
    name: 'Goncy.tsx',
    isVerified: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isVerified: true
  },
  {
    userName: 'alexeira',
    name: 'Alex Pincheira'
  }
]

export default function App () {
  return (
    <main>
      <article className='tw-follow-card'>
        <h4 className='tw-u-might'>Tal vez te guste</h4>
        {
          users.map(user => {
            const { userName, name, isVerified } = user
            return (
              <TwitterUser
                key={userName}
                userName={userName}
                name={name}
                isVerified={isVerified}
              />
            )
          })
        }
        <a>Mostrar más</a>
      </article>
    </main>
  )
}
