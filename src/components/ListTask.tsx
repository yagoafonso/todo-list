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
<<<<<<< HEAD
=======
      {/* Div lista vazia */}
>>>>>>> 15e817f3ccb02fdf35116cf39d3db09f2a771215
      {/* <div className={styles.contentEmpty}>
        <img src={ImgListEmpty} alt="" />
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong><br />
          Crie tarefas e organize seus itens a fazer
        </p>
      </div> */}
<<<<<<< HEAD
      {tasks.map(content => { return <Task task={content.task}/> })}

=======
      <Task />
      <Task />    
>>>>>>> 15e817f3ccb02fdf35116cf39d3db09f2a771215
    </section>
  );

}