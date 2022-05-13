import { useRouter } from 'next/router'

import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Header.module.css"

const Header = ({ guitarra }) => {
  
  const router = useRouter()
  //console.log(router)
  
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
            <Link href="/carrito" >
              <a href="">
                <Image 
                  layout="fixed" width={20} height={15} src="/img/carrito.png"
                  alt="imagen carrito"
                />
              </a>
            </Link>
          </nav>
        </div>

        {
          guitarra && (
            <div className={styles.modelo}>
              <h2>Modelo {guitarra.titulo_guitarra}</h2>
              <p className={styles.contenido}>{guitarra.descripcion_guitarra}</p>
              <p className={styles.precio}>${guitarra.precio_guitarra}</p>
              <Link href={`/guitarras/${guitarra.url_guitarra}`}>
                <a className={styles.enlace}>
                  Ver Producto
                </a>
              </Link>
            </div>
          )
        }

      </div>

      {
        router.pathname === '/' && (
          <div className={styles.guitarra}>
            <Image
              width={500}
              height={1200}
              src="/img/header_guitarra.png" 
              alt="imagen guitarra en cabecera" />
          </div>
        ) 
      }

    </header>
  )
}

export default Header