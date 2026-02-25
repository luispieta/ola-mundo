import styles from "./Rodape.module.css";
import marcaRegistrada from "../../../public/assets/fotos/marca_registrada.svg";

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <img src={marcaRegistrada} alt="Marca registrada" />
        </footer>
    );
}