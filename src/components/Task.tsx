import { Trash } from "phosphor-react";
import { useState } from "react";


export interface TaskProps {
  task: string;
}
import styles from './Task.module.css';

export function Task({task} : TaskProps){

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
            <p><s>{task}</s></p>
          ) : ( 
            <p>{task}</p>
          )
        }
      </div>
      <button title="Deletar tarefa">
        <Trash size={24}/>
      </button>
    </div>
  );
}