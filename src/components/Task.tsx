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
<<<<<<< HEAD
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
=======
    <div className={styles.contentTask}>
        <div className={styles.round}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox"></label>
        </div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus 
      </p>
      <button title="Delete task">
        <Trash size={24}/>
      </button>

>>>>>>> 15e817f3ccb02fdf35116cf39d3db09f2a771215
    </div>
  );
}