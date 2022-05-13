import Layout from "../components/Layout"
import Image from "next/image"
import styles from '../styles/Carrito.module.css'

const Carrito = ({ carrito }) => {

  return (
    <Layout
      pagina={"Carrito de compras"}
    >
      <h1 className="heading">Carrito</h1>
      <main className={`${styles.contenido} contenedor`}>
        <div className={styles.carrito}>
          {
            carrito.length === 0 ? 'Carrito Vacio' : (
              carrito.map( producto => (
                <div key={producto.id} className={styles.producto}>
                  <div>
                    <Image 
                      layout="responsive" 
                      width={250} height={400} 
                      src={producto.imagen} 
                      alt={producto.titulo_guitarra} 
                    />
                  </div>
                  <div>
                    <p className={styles.titulo}>{producto.titulo_guitarra}</p>
                    <p className={styles.cantidad}>Cantidad: {producto.cantidad}</p>
                    <p className={styles.precio}>Precio: <span>${producto.precio_guitarra}</span></p>
                    <p className={styles.subtotal}>SubTotal: 
                      <span>${producto.precio_guitarra * producto.cantidad}</span>
                    </p>
                  </div>
                </div>
              ))
            )
          }
        </div>
        <div>2</div>
      </main>
    </Layout>
  )
}

export default Carrito