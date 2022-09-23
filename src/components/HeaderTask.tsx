import styles from './HeaderTask.module.css'
export function HeaderTask(){
  return (
    <div className={styles.taskInformation}>
      <strong className={styles.titleTask}>Tarefas criadas <span className={styles.countTask}>0</span></strong>
      <strong className={styles.titleTask}>Concluídas <span className={styles.countTask}>0</span></strong>
    </div>
  );
}