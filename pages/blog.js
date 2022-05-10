import Layout from "../components/Layout"
import Entrada from "../components/Entrada"

const Blog = ({ resultados }) => {

  console.log(resultados)
  

  return (
    <Layout
      pagina="Blog de Tienda"
    >
      <main className="contenedor">
        <h2 className="heading">Blog</h2>

        <div>
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

export async function getServerSideProps() {
  const url = `http://localhost:1337/blogs`
  const respuesta = await fetch(url)
  const resultados = await respuesta.json()

  return {
    props: {
      resultados
    }
  }
}

export default Blog