import Layout from "../components/Layout";
import Listado from "../components/Listado";

export default function Home({resultados}) {

	return (
    <Layout 
      pagina='inicio'
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <Listado 
          resultados={resultados}
        />
      </main>
    </Layout>
	);
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras`
  const resp = await fetch(url)
  const resultados = await resp.json()

  return {
    props: {
      resultados
    }
  }
}