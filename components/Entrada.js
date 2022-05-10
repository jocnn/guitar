import Link from 'next/link'
import Image from 'next/image'

import { formatoFecha } from '../helpers'

const Entrada = ({resultado}) => {

  const { titulo_blog, resumen_blog, fecha_blog, imagen_blog, contenido_blog, id } = resultado

  return (
    <article>
      <Image 
        src={imagen_blog.url}
        alt={`imagen blog ${titulo_blog}`}
        width={200}
        height={100}
        layout='responsive'
      />
      <div>
        <h1>{titulo_blog}</h1>
        <p>{ formatoFecha(fecha_blog) }</p>
        <p>{resumen_blog}</p>
        <Link href={`/blog/${id}`}>
          Leer entrada
        </Link>
      </div>
    </article>
  )
}

export default Entrada