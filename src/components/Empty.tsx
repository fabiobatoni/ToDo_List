import styles from "./Empty.module.css";

import clipboard from "../assets/clipboard.svg";

export function Empty() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="Clipboard" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus items a fazer</span>
    </div>
  );
}