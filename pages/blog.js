import Layout from "../components/Layout"
import ListadoBlog from "../components/ListadoBlog"

const Blog = ({ resultados }) => {

  return (
    <Layout
      pagina="Blog de Tienda"
    >
      <main className="contenedor">
        <ListadoBlog 
          resultados={resultados}
        />
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