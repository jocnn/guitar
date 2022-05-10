import Layout from "../components/Layout"
import Entrada from "../components/Entrada"

import styles from '../styles/Blog.module.css'

const Blog = ({ resultados }) => {

  const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs`
  console.log(url)

  return (
    <Layout
      pagina="Blog de Tienda"
    >
      <main className="contenedor">
        <h2 className="heading">Blog</h2>

        <div className={styles.blog}>
          {
            resultados.map( resultado => (
              <Entrada 
                key={resultado.id}
                resultado={resultado}
              />
            ))
          }
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs`
  const respuesta = await fetch(url)
  const resultados = await respuesta.json()
  
  return {
    props: {
      resultados
    }
  }
}

export default Blog