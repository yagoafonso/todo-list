import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from './NewTask.module.css'

export function NewTask(){
    return(
        <form className={styles.taskForm}>
            <textarea placeholder="Adicione uma nova tarefa">
            </textarea>
            <div>                
                <button type='submit'>
                    Criar
                    <AiOutlinePlusCircle />                    
                </button>
            </div>
        </form>
    );
}