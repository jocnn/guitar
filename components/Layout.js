import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children, pagina, guitarra}) => {
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
      
      <Header 
        guitarra={guitarra}
      />

      {children}

      <Footer />
    </>
  )
}

Layout.defaultProps = {
  guitarra: null
}

export default Layout