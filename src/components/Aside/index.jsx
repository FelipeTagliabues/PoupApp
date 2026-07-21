import LogoPoupApp from "../../assets/LogoPoupApp.svg"
import styles from "./aside.module.css"

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <img src={LogoPoupApp} alt="" />
      <footer className={styles.footer}>
        Desenvolvido por Alura. Projeto fictício sem fins comerciais.
      </footer>
    </aside>
  );
};
