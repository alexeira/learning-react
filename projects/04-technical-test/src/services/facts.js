import { CAT_ENDPOINT_RANDOM_FACT } from '../constants'

export async function getRandomFact () {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

export async function getRandomCatImage (newFact) {
  if (!newFact) return
  const threeFirstWords = newFact.split(' ', 3).join(' ')

  const res = await fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
  const data = await res.json()
  const { url } = data
  return url
}
