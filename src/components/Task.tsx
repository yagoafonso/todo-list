import { Trash } from "phosphor-react";
import styles from './Task.module.css';
import { ITask } from "../Interfaces";
import * as Checkbox from '@radix-ui/react-checkbox';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

interface TaskProps {
  task: ITask,
  deleteTask(deleteTask: string):void,
  updateTask(updateTask: string):void,
}

export function Task({ task, deleteTask,updateTask  } : TaskProps){


  return (
    <div className={styles.task}>
        <label className={styles.contentCheckbox}>
          <input
            id="checkboxId"
            type="checkbox" 
            className={styles.checkmark} 
            onClick={() => updateTask(task.idTask)}
          />
          <span className={styles.checkmark}></span>
        </label>

      <div className={styles.contentTask}>
            <p>{task.nameTask}</p>
      </div>

      <button onClick={() => deleteTask(task.idTask)} title="Deletar tarefa">
        <Trash size={24}/>
      </button>
    </div>
  );
}