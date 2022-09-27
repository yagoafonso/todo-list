import { Trash } from "phosphor-react";

import styles from './Task.module.css';

export function Task(){
  return (
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

    </div>
  );
}