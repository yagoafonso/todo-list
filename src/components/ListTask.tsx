import ImgListEmpty from '../assets/list-empty.svg';
import styles from './ListTask.module.css';
import { Task } from './Task';

const tasks = [
  {
    id: 1,
    task: 'Terminar o todo list'
  },
  {
    id: 1,
    task: 'Terminar o todo list'
  },
  {
    id: 1,
    task: 'Terminar o todo list'
  },
]

export function ListTask(){
  console.log(tasks);
  return(
    <section className={styles.contentTask}>
      {/* <div className={styles.contentEmpty}>
        <img src={ImgListEmpty} alt="" />
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong><br />
          Crie tarefas e organize seus itens a fazer
        </p>
      </div> */}
      {tasks.map(content => { return <Task task={content.task}/> })}

    </section>
  );

}