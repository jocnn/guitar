import Layout from "../../components/Layout"
import Image from "next/image"

import { formatoFecha } from "../../helpers"

import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({ resultado }) => {

  console.log(resultado)
  const { titulo_blog, imagen_blog, fecha_blog, contenido_blog } = resultado

  return (
    <Layout>
      <main className="contenedor">
        <h1 className="heading">{titulo_blog}</h1>
        <article className={styles.entrada}>
          <Image
            layout="responsive"
            width={800}
            height={600}
            src={imagen_blog.url}
            alt={`imagen articulo ${titulo_blog}`}
          />
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatoFecha(fecha_blog)}</p>
            <p className={styles.texto}>{contenido_blog}</p>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs`
  const respuesta = await fetch(url)
  const resultados = await respuesta.json()

  const paths = resultados.map( resultado => ({
    params: { id: resultado.id }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { id } }) {
  const url = `${process.env.API_URL}/blogs/${id}`
  const respuesta = await fetch(url)
  const resultado = await respuesta.json()

  return {
    props: {
      resultado
    }
  }
}

// export async function getServerSideProps({ query: { id } }) {
//   const url = `${process.env.API_URL}/blogs/${id}`
//   const respuesta = await fetch(url)
//   const resultado = await respuesta.json()

//   return {
//     props: {
//       resultado
//     }
//   }
// }

export default EntradaBlog