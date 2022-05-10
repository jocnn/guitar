import Link from 'next/link'
import Image from 'next/image'

import { formatoFecha } from '../helpers'
import styles from '../styles/Entrada.module.css'

const Entrada = ({resultado}) => {

  const { titulo_blog, resumen_blog, fecha_blog, imagen_blog, id } = resultado

  return (
    <article>
      <Image 
        priority='true'
        src={imagen_blog.url}
        alt={`imagen blog ${titulo_blog}`}
        width={200}
        height={100}
        layout='responsive'
      />
      <div className={styles.contenido}>
        <h3>{titulo_blog}</h3>
        <p className={styles.fecha}>{ formatoFecha(fecha_blog) }</p>
        <p className={styles.resumen}>{resumen_blog}</p>
        <Link href={`/blog/${id}`}>
          <a className={styles.enlace}>
            Leer entrada
          </a>
        </Link>
      </div>
    </article>
  )
}

export default Entrada