import Layout from "../components/Layout";
import Listado from "../components/Listado";
import Curso from "../components/Curso";
import ListadoBlog from "../components/ListadoBlog";

export default function Home({guitarras, curso, blog}) {

  //console.log(guitarras)
  //console.log(curso)

	return (
    <Layout 
      pagina='inicio'
      guitarra={guitarras[3]}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <Listado 
          resultados={guitarras}
        />
      </main>
      <Curso 
        curso={curso}
      />
      <section className="contenedor">
        <ListadoBlog 
          resultados={blog}
        />
      </section>
    </Layout>
	);
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlCurso = `${process.env.API_URL}/curso`
  // usando filtros para mostrar 3 entradas de blog, en orden descendente
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [ resGuitarras, resCurso, resBlog ] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCurso),
    fetch(urlBlog)
  ])

  const [ guitarras, curso, blog ] = await Promise.all([
    resGuitarras.json(),
    resCurso.json(),
    resBlog.json()
  ])

  return {
    props: {
      guitarras,
      curso,
      blog
    }
  }
}