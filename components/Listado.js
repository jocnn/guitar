import Guitarra from "./Guitarra"

const Listado = ({ resultados }) => {

  return (
    <div>
      {
        resultados.map( resultado => (
          <Guitarra 
            key={resultado.id}
            resultado={resultado}
          />
        ))
      }
    </div>
  )
}

export default Listado