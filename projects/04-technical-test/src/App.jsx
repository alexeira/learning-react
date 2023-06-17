import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export default function App () {
  const [fact, setFact] = useState()
  const [factError, setFactError] = useState()
  const [imageUrl, setImageUrl] = useState()

  function getRandomFact () {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        if (!res.ok) {
          setFactError('No se ha podido recuperar el fact')
        }
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }

  // recuperar el fact al renderizar la App
  useEffect(getRandomFact, [])

  // para recuperar cada vez que tenemos un fact nuevo
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(res => {
        const { url } = res
        setImageUrl(url)
      })
  }, [fact])

  function handleClick () {
    getRandomFact()
  }

  return (
    <main>
      <h1>Gatcs</h1>

      <button onClick={handleClick}>get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using first three words of ${fact}`} />}
    </main>
  )
}
