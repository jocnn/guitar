import Layout from "../components/Layout";
import Listado from "../components/Listado";

export default function Home({guitarras, curso}) {

  console.log(guitarras)
  console.log(curso)

	return (
    <Layout 
      pagina='inicio'
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <Listado 
          resultados={guitarras}
        />
      </main>
    </Layout>
	);
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlCurso = `${process.env.API_URL}/curso`

  const [ resGuitarras, resCurso ] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCurso)
  ])

  const [ guitarras, curso ] = await Promise.all([
    resGuitarras.json(),
    resCurso.json()
  ])

  return {
    props: {
      guitarras,
      curso
    }
  }
}