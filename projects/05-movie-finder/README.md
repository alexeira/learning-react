# Movie finder

Prueba técnica en la que se debe crear una aplicación para buscar películas.

### API a usar

- https://www.omdbapi.com/

### Requerimientos

- [X] Necesita mostra un input para buscar la película y un botón para buscar.
- [X] Lista las películas encontradas y muestra el título, año y poster.
- [X] Que el formulario funcione
- [X] Hacer el fetching de datos a la API para mostrar las peliculas
- [X] Haz que las películas se muestren en un grid responsive.

### Primera iteración

- [X] Evitar que se haga la misma búsqueda dos veces seguidas.
- [X] Haz que la búsqueda se haga automáticamente al escribir.
- [X] Evita que se haga la búsqueda continuamente al escribir (debounce).

## ¿Qué aprendi?

- A utilizar el hook **`useRef`** para validar si aún no se ha hecho la primera búsqueda y no volver a hacer el **fetching** de datos de la misma búsqueda.
- A utilizar el hook **`useMemo`** para no retorarnar y guardar el valor la constante `sortedMovies` hasta que el estado `movies` y `sort` cambie.
- A utilizar el hook **`useCallback`** para no ejecutar y guardar la ejecución de la función `getMovies` cada vez que cambie el estado `search`.
- A hacer `debounce` sobre la función `getMovies` para permitirle al usuario ver los resultados mientras escribe.

## Una utilidad

Al estar desarrollando me encontre con un pequeño desafío, quería mostrar un `title` en los `h3` de las películas solo cuando estos tuvieran **ellipsis (...)**.
Para resolver esto decídi crear el siguiente custom hook:

``` jsx
import { useState } from 'react'

export default function useEllipsisTooltip () {
  const [tooltip, setTooltip] = useState(false)

  function checkEllipsis (event) {
    const element = event.target
    if (element && element.scrollWidth > element.clientWidth) {
      return setTooltip(true)
    }
    return setTooltip(false)
  }

  return { tooltip, checkEllipsis }
}

```
### Como utilizarlo

Para utilizarlo basta con importar el custom hook 

```jsx
const { tooltip, checkEllipsis } = useEllipsisTooltip()
```

Luego llamamos a la función `checkEllipsis` en la propiedad `onMouseOver` y hacemos una condición para establecer que cuando `tooltip` este activo se muestre el mismo titulo de la película en la propiedad `title`

```jsx
<h3
  onMouseOver={checkEllipsis}
  title={tooltip ? movie.title : undefined}
>
  {...}
</h3>
```
