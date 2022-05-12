import styles from '../styles/Curso.module.css'

const Curso = ({ curso }) => {
  
  const { titulo_curso, contenido_curso, imagen_curso } = curso
  
  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className='heading'>{titulo_curso}</h2>
          <p className={styles.texto}>{contenido_curso}</p>
          <a className={styles.enlace} href="">Más Información</a>
        </div>
      </div>

      <style jsx>{`
        section {
          padding: 10rem 0;
          margin-top: 10rem;
          background-image: linear-gradient(to right, rgb(0 0 0 / .65), 
            rgb(0 0 0 / .7)), url(${imagen_curso.url});
          background-size: cover;
          background-position: 50%;
        }
      `}</style>

    </section>
  )
}

export default Curso