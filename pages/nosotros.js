import Image from "next/image";

import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
	return (
		<Layout pagina="nosotros">
			<main className="contenedor">
				<h2 className="heading">Nosotros</h2>
				<div className={styles.contenido}>
					<Image
            layout="responsive"
						width={600}
						height={450}
						src="/img/nosotros.jpg"
						alt="imagen sobre nosotros"
					/>
					<div>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Voluptas saepe obcaecati quos dolorum unde
							commodi quam, fuga aut velit inventore mollitia
							reprehenderit nulla cum sed qui, repellendus nemo at
							aspernatur, fuga aut velit inventore mollitia
							reprehenderit nulla cum sed qui, repellendus nemo at
							aspernatur.
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Nemo ipsam totam asperiores, neque eveniet
							autem eius aspernatur, perspiciatis ipsa voluptates
							blanditiis nulla reiciendis, veritatis sequi
							exercitationem. Facere minima temporibus tempore,
							fuga aut velit inventore mollitia reprehenderit
							nulla cum sed qui, repellendus nemo at aspernatur.
						</p>
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default Nosotros;
