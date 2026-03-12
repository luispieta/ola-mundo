import styles from "./PostModelo.module.css";

export default function PostModelo({ titulo, children }) {
    return (
        <article className={styles.postModeloConteiner}>
            <div
                className={styles.fotoCapa}
            ></div>

            <h2 className={styles.titulo}>
                {titulo}
            </h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    );
}