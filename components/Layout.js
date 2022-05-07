import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children, pagina}) => {
  return (
    <>
      <Head>
				<title>Guitar La - {pagina}</title>
				<meta
					name="description"
					content="Sitio Web de Compras de Guitarras"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
      
      <Header />

      {children}

      <Footer />
    </>
  )
}

export default Layout