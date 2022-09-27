import ImgListEmpty from '../assets/list-empty.svg';
import styles from './ListTask.module.css';
import { Task } from './Task';


export function ListTask(){
  return(
    <section className={styles.contentTask}>
      {/* Div lista vazia */}
      {/* <div className={styles.contentEmpty}>
        <img src={ImgListEmpty} alt="" />
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong><br />
          Crie tarefas e organize seus itens a fazer
        </p>
      </div> */}
      <Task />      
    </section>
  );

}