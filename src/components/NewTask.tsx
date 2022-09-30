import React, { FormEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ImgListEmpty from '../assets/list-empty.svg';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Task } from "./Task";
import { ITask } from "../Interfaces";


import styles from './NewTask.module.css'


export function NewTask(){
    const [task, setTask] = useState("")

    const [todoList, setTodoList] = useState<ITask[]>([])

    function handleCreateNewTask(event: FormEvent):void{
        event?.preventDefault();

        const newTask = { 
            idTask: uuidv4(),
            nameTask: task,
            isComplete: false,
        }

        setTodoList([...todoList, newTask]);

        setTask('');
    }

    function handleAlterTask(taskToUpdateById: string){
        const editedTask = todoList.map(task => {
            if (task.idTask === taskToUpdateById){
                return {
                    ...task,
                    isComplete: !task.isComplete
                }
            }
            return task
        })
        setTodoList(editedTask)
    }
    function deleteTask(taskToDeleteById: string){
        setTodoList(todoList.filter((taskName) => taskName.idTask !== taskToDeleteById ))
    }

    const isTaskEmpty = todoList.length === 0;

    console.log(`O campo está vazio ? ${isTaskEmpty}`)
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
                <div className={isTaskEmpty ? styles.contentEmpty : styles.isContentEmpty} >
                    <img src={ImgListEmpty} alt="" />
                    <p>
                        <strong>Você ainda não tem tarefas cadastradas</strong><br />
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </div>
                {todoList.map((task, key) => (
                    <Task key={key} task={task} deleteTask={deleteTask} updateTask={handleAlterTask}/>
                ))}

            </section>
        </div>
    );
}