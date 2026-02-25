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
                    e explorar novas tecnologias. Entre os principais projetos, destacam-se: sleep_colchoes: um site desenvolvido com foco comercial, demonstrando 
                    aplicação de conceitos de layout, responsividade e organização estrutural para apresentação de produtos. rpg_app_flutter: aplicativo desenvolvido
                    em Flutter, com foco em gerenciamento de informações para jogos de RPG, explorando construção de interfaces, organização de estados e lógica de 
                    aplicação mobile.
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