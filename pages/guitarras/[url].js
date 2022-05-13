import { useState } from 'react'
import Layout from "../../components/Layout"
import Image from "next/image"
import styles from "../../styles/Guitarra.module.css"

const Producto = ({guitarra, agregarCarrito}) => {

  const [ cantidad, setCantidad ] = useState(0)

  const { 
    titulo_guitarra, 
    descripcion_guitarra, 
    precio_guitarra, 
    imagen_guitarra,
    id
  } = guitarra[0]
  
  //console.log(guitarra[0])

  const handleSubmit = e => {
    e.preventDefault()

    if (cantidad < 1) {
      alert('Cantidad no valida')
      return
    }

    const guitarraSeleccionada = {
      id,
      imagen: imagen_guitarra.url,
      titulo_guitarra,
      precio_guitarra,
      cantidad
    }

    agregarCarrito(guitarraSeleccionada)

  }

  return (
    <Layout
      pagina={ `Guitarra ${titulo_guitarra}` }
    >
      <div className={styles.guitarra}>
        <Image 
          priority='true'
          layout="responsive"
          width={200}
          height={350}
          src={imagen_guitarra.url}
          alt={`imagen guitarra ${titulo_guitarra}`}
        />
        <div className={styles.contenido}>
          <h3>{titulo_guitarra}</h3>
          <p className={styles.descripcionGuitarra}>{descripcion_guitarra}</p>
          <p className={styles.precio}>${precio_guitarra}</p>

          <form action="" className={styles.formulario} onSubmit={handleSubmit}>
            <label htmlFor="cantidad">Cantidad:</label>
            <select 
              name="cantidad" 
              id="cantidad" 
              value={cantidad}
              onChange={ e => setCantidad(parseInt(e.target.value)) }
            >
              <option value="0">-- Seleccione la cantidad --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: {url} }) {

  //console.log(url)
  const urlGuitarra = `${process.env.API_URL}/guitarras?url_guitarra=${url}`  
  //console.log(urlGuitarra)
  const resp = await fetch(urlGuitarra)
  const guitarra = await resp.json()

  return {
    props: {
      guitarra
    }
  }
}

export default Producto