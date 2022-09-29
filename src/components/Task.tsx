import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from './Task.module.css';

interface TaskProps {
  task: ITask,
  deleteTask(deleteTask: number):void,
}

export function Task({ task, deleteTask  } : TaskProps){

  const [isChecked, setIsChecked] = useState(false);

  function handleChangeChecked(){
      setIsChecked(!isChecked);
  }

  return (
    <div className={styles.task}>
      <input 
        type="checkbox" 
        className={styles.checkmark} 
        checked={isChecked}
        onChange={handleChangeChecked}
      />
      <label htmlFor="checkbox"></label>
      <div className={styles.contentTask}>
        {          
          isChecked ? (
            <p><s>{task.nameTask}</s></p>
          ) : ( 
            <p>{task.nameTask}</p>
          )
        }
      </div>
      <button onClick={() => deleteTask(task.id)} title="Deletar tarefa">
        <Trash size={24}/>
      </button>
    </div>
  );
}