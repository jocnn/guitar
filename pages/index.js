
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
	return (
    <Layout 
      pagina='inicio'
    >
      <h1>Desde inicio</h1>
      <Link href="/nosotros">Ir a Nosotros</Link>
    </Layout>
	);
}
