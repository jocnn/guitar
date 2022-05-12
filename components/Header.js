import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Header.module.css"

const Header = ({ guitarra }) => {
  
  console.log(guitarra)
  
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/">
            <a>
              <Image src="/img/logo.svg" width={400} height={100} alt="logo" />
            </a>
          </Link>
          <nav className={styles.navegacion}>
            <Link href="/" >Inicio</Link>
            <Link href="/nosotros" >Nosotros</Link>
            <Link href="/blog" >Blog</Link>
            <Link href="/tienda" >Tienda</Link>
          </nav>
        </div>

        {
          guitarra && (
            <div>
              <h1>Modelo {guitarra.titulo_guitarra}</h1>
              <p>{guitarra.descripcion_guitarra}</p>
              <p>${guitarra.precio_guitarra}</p>
              <Link href={`/guitarras/${guitarra.url_guitarra}`}>
                <a>
                  Ver Producto
                </a>
              </Link>
            </div>
          )
        }

      </div>
    </header>
  )
}

export default Header