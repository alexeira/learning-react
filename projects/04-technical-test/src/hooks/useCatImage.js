import { useEffect, useState } from 'react'

import { getRandomCatImage } from '../services/facts'
import { CAT_PREFIX_IMAGE_URL } from '../constants'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    getRandomCatImage(fact).then(newImageUrl => setImageUrl(newImageUrl))
  }, [fact])

  return {
    imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}`,
    imageAlt: `Image extracted using first three words of ${fact}`
  }
}
