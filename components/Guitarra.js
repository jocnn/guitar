import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Guitarra.module.css"

const Guitarra = ({ resultado }) => {
  
  const { titulo_guitarra, descripcion_guitarra, precio_guitarra, imagen_guitarra, url_guitarra } = resultado
  
  return (
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
        <p className={styles.descripcion}>{descripcion_guitarra}</p>
        <p className={styles.precio}>${precio_guitarra}</p>
        <Link href={`/guitarras/${url_guitarra}`}>
          <a className={styles.enlace}>
            Ver Producto
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Guitarra