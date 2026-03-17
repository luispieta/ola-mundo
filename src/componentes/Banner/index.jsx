import styles from "./Banner.module.css"
import circuloColorido from "../../../public/assets/fotos/circulo_colorido.png";
import minhaFoto from "../../../public/assets/fotos/minha_foto.JPG"

export default function Banner () {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, mundo</h1>
                <p className={styles.paragrafo}>
                    Sou um profissional em constante evolução, com uma trajetória marcada por aprendizado prático, adaptação e crescimento na área de tecnologia.
                    Mantenho projetos próprios no meu GitHub <a href="https://github.com/luispieta" target="_blank">(github.com/luispieta)</a>, onde desenvolvo aplicações para aprimorar minhas habilidades técnicas 
                    e explorar novas tecnologias.
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