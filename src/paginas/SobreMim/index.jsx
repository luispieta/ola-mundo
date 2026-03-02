import styles from "./SobreMim.module.css"
import PostModelo from "../../componentes/PostModelo";
import fotoSobreMim from "../../../public/assets/fotos/minha_foto.JPG"

export default function SobreMim() {
    return (
        <PostModelo
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Luis Felipe!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Luis Felipe"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Sou um profissional em constante evolução, com uma trajetória marcada por aprendizado prático, adaptação e crescimento na área de tecnologia.
            </p>

            <p className={styles.paragrafo}>
                Iniciei minha vida profissional trabalhando com serviços gerais ao lado do meu pai, atuando como auxiliar/ajudante. Essa experiência foi fundamental para desenvolver responsabilidade, disciplina e comprometimento. Após esse período, ingressei na empresa Bianchi Distribuidora, onde atuei como separador de peças por 7 meses, aprimorando organização, agilidade e atenção aos detalhes.
            </p>

            <p className={styles.paragrafo}>
                Posteriormente, direcionei minha carreira para a área de Tecnologia da Informação, iniciando como Analista de Requisitos. Após três meses, migrei para a área de Testes, onde atualmente atuo como Analista de Testes, trabalhando com validação de funcionalidades, identificação de falhas, garantia de qualidade e melhoria contínua de sistemas.
            </p>

            <p className={styles.paragrafo}>
                Atualmente, curso Análise e Desenvolvimento de Sistemas (ADS) na UNIDEP, buscando fortalecer minha base técnica e ampliar meus conhecimentos em desenvolvimento, banco de dados, arquitetura de sistemas e boas práticas de engenharia de software.
            </p>

            <p className={styles.paragrafo}>
                Também mantenho projetos próprios no meu GitHub (github.com/luispieta), onde desenvolvo aplicações para aprimorar minhas habilidades técnicas e explorar novas tecnologias. Entre os principais projetos, destacam-se:
            </p>

            <p className={styles.paragrafo}>
                sleep_colchoes: um site desenvolvido com foco comercial, demonstrando aplicação de conceitos de layout, responsividade e organização estrutural para apresentação de produtos.
            </p>

            <p className={styles.paragrafo}>
                rpg_app_flutter: aplicativo desenvolvido em Flutter, com foco em gerenciamento de informações para jogos de RPG, explorando construção de interfaces, organização de estados e lógica de aplicação mobile.
            </p>

        </PostModelo>
    );
}