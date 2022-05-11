import Guitarra from "./Guitarra"
import styles from "../styles/Listado.module.css"

const Listado = ({ resultados }) => {

  console.log(resultados)
  
  return (
    <div className={styles.listado}>
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