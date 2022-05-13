import { useState, useEffect } from 'react'

import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  const [ carrito, setCarrito ] = useState([])

  useEffect(() => {
    const carritoSL = JSON.parse(localStorage.getItem("carrito")) ?? []

    if (carritoSL.length !== 0) setCarrito(carritoSL)
  }, [])
  
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])

  const agregarCarrito = (producto) => {
    if ( carrito.some( articulo => articulo.id === producto.id)) {
      const carritoActualizado = carrito.map( articulo => { 
        if (articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad
        }
        return articulo
      })
      setCarrito(carritoActualizado)
    } else {
      setCarrito([...carrito, producto])
    }
  }

  return <Component 
    {...pageProps} 
    agregarCarrito={agregarCarrito}
    carrito={carrito}
  />
}

export default MyApp
