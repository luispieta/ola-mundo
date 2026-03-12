import styles from "./NaoEncontrada.module.css"
import erro404 from "../../../public/assets/fotos/erro_404.png"

export default function NaoEncontrada() {
    return(
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>

                <p className={styles.paragrafo}>
                    texto
                </p>

                <p className={styles.paragrafo}>
                    tecto
                </p>

                <div className={styles.botaoContainer}>
                    <button>Voltar</button>
                </div>

                <img 
                    className={styles.imagemCachorro}
                    src={erro404} 
                    alt="Cachorro de óculos e vestido de humano" 
                />
            </div>

            <div className={styles.espacoEmBranco}></div>
        </>
    )
}