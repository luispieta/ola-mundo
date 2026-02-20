import styles from "./Banner.module.css"
import circuloColorido from "../../assets/fotos/circulo_colorido.png";
import minhaFoto from "../../assets/fotos/minha_foto.JPG"

export default function Banner () {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, mundo</h1>
                <p className={styles.paragrafo}>

                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido} 
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img 
                    className={styles.minhaFoto} 
                    src={minhaFoto} 
                    alt="Foto do Luis Felipe Pieta" 
                />
            </div>
        </div>
    )
}