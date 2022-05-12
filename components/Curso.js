const Curso = ({ curso }) => {
  
  const { titulo_curso, contenido_curso, imagen_curso } = curso
  
  return (
    <section>
      <div className="contenedor">
        <div>
          <h2>{titulo_curso}</h2>
          <p>{contenido_curso}</p>

          <a href="">Más Información</a>
        </div>
      </div>
    </section>
  )
}

export default Curso