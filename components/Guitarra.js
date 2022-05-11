import Link from "next/link"
import Image from "next/image"

const Guitarra = ({ resultado }) => {
  
  const { titulo_guitarra, descripcion_guitarra, precio_guitarra, imagen_guitarra, url } = resultado
  
  return (
    <div>
      <Image 
        layout="responsive"
        width={500}
        height={350}
        src={imagen_guitarra.url}
        alt={`imagen guitarra ${titulo_guitarra}`}
      />
      <div>
        <h3>{titulo_guitarra}</h3>
        <p>{descripcion_guitarra}</p>
        <p>{precio_guitarra}</p>
        <Link href={`/guitarras/${url}`}>Ver Producto</Link>
      </div>
    </div>
  )
}

export default Guitarra