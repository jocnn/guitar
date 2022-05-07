import Link from "next/link"
import Layout from "../components/Layout";

const Nosotros = () => {
  return (
    <Layout
      pagina='nosotros'
    >
      <h1>Desde Nosotros</h1>
      <Link href="/" >Ir a Inicio</Link>
    </Layout>
  )
}

export default Nosotros