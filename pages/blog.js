import Layout from "../components/Layout"

const Blog = ({ resultados }) => {

  console.log(resultados)
  

  return (
    <Layout
      pagina="Blog de Tienda"
    >
      <h1>Blog de Tienda</h1>
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