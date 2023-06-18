import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export default function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl, imageAlt } = useCatImage({ fact })

  async function handleClick () {
    refreshFact()
  }

  return (
    <main>
      <h1>Gatcs</h1>

      <button onClick={handleClick}>get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={imageAlt} />}
    </main>
  )
}
