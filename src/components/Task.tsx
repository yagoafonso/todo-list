import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from './Task.module.css';
import { ITask } from "../Interfaces";

interface TaskProps {
  task: ITask,
  deleteTask(deleteTask: string):void,
  updateTask(updateTask: string):void,
}

export function Task({ task, deleteTask,updateTask  } : TaskProps){


  return (
    <div className={styles.task}>
      <input 
        type="checkbox" 
        className={styles.checkmark} 
        onClick={() => updateTask(task.idTask)}
      />
      <label htmlFor="checkbox"></label>
      <div className={styles.contentTask}>
            <p>{task.nameTask}</p>
      </div>
      
      <button onClick={() => deleteTask(task.idTask)} title="Deletar tarefa">
        <Trash size={24}/>
      </button>
    </div>
  );
}