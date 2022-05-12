import Entrada from "../components/Entrada"

import styles from '../styles/Blog.module.css'

const ListadoBlog = ({resultados}) => {
  
  return (
    <>
      <h2 className="heading">Blog</h2>

      <div className={styles.blog}>
        {
          resultados.map( resultado => (
            <Entrada 
              key={resultado.id}
              resultado={resultado}
            />
          ))
        }
      </div>
    </>
  )
}

export default ListadoBlog