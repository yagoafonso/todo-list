import React, { FormEvent, useState } from "react";
import ImgListEmpty from '../assets/list-empty.svg';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Task } from "./Task";

import styles from './NewTask.module.css'


export interface TaskProps {
    idTask: number,
    nameTask: string,
  }

export function NewTask(){
    const [task, setTask] = useState("")

    const [todoList, setTodoList] = useState([])

    function handleCreateNewTask(event: FormEvent){
        event?.preventDefault();
        const idRandom = (num : number) => Math.floor(Math.random() * num)

        const newTask = { id: idRandom(999), nameTask: task}
        
        setTodoList([...todoList, newTask]);

        setTask('');
    }

    function deleteTask(taskToDelete: string){
    }

    return(
        <div>
            {/* FORMULÁRIO */}
            <form onSubmit={handleCreateNewTask}  className={styles.taskForm}>
                <input
                    type="text"
                    autoComplete="off"
                    placeholder="Adicione uma nova tarefa"
                    name="task"
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                    required
                    
                />
                <div>                
                    <button type='submit'>
                        Criar
                        <AiOutlinePlusCircle />                    
                    </button>
                </div>
            </form>
            {/* INFORMAÇÕES DE TAREFAS CRIADAS E CONCLUÍDAS */}
            <div className={styles.taskInformation}>
                <strong className={styles.titleTask}>Tarefas criadas <span className={styles.countTask}>0</span></strong>
                <strong className={styles.titleTask}>Concluídas <span className={styles.countTask}>0</span></strong>
            </div>
            {/* SESSÃO LISTAGEM DAS TAREFAS */}
            <section className={styles.contentTask}>
                {/* <div className={styles.contentEmpty}>
                    <img src={ImgListEmpty} alt="" />
                    <p>
                        <strong>Você ainda não tem tarefas cadastradas</strong><br />
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </div> */}
                {todoList.map(content => (
                    <Task task={content.nameTask} />
                ))}

            </section>
        </div>
    );
}