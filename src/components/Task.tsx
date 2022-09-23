import { Trash } from "phosphor-react";

import styles from './Task.module.css';

export function Task(){
  return (
    <div className={styles.contentTask}>
      <input type="checkbox" className={styles.checkmark}/>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus 
        laudantium harum assumenda tenetur officiis nesciunt beatae optio illum 
        debitis autem.
      </p>
      <Trash size={48}/>
    </div>
  );
}