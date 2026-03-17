import styles from "./NaoEncontrada.module.css"
import erro404 from "../../../public/assets/fotos/erro_404.png"
import BotaoPrincipal from "../../componentes/BotaoPrincipal"
import { useNavigate } from "react-router"

export default function NaoEncontrada() {

    const navegar = useNavigate()
    
    return(
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>

                <p className={styles.paragrafo}>
                    Aperte o botão de Voltar para retornar a página de início.
                </p>

                <div 
                    className={styles.botaoContainer} 
                    onClick={() => {
                        navegar(-1)
                    }}
                >
                    <BotaoPrincipal tamanho="lg">
                        Voltar
                    </BotaoPrincipal>
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