import React, { useState } from "react";
import Button from "../Button";
import style from './Form.module.scss';

import { v4 as uuidv4 } from 'uuid';

import { ITask } from "../../interfaces/ITask";

interface IProps {
    setTask: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export default function Form({ setTask }: IProps) {
    const [name, setName] = useState('');
    const [time, setTime] = useState('00:00');

    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTask(oldTasks => 
            [
                ...oldTasks, 
                { 
                    name,
                    time,
                    selected: false, 
                    completed: false, 
                    id: uuidv4()
                }
            ]
        );
        setName('');
        setTime('00:00');
    }

    return(
        <form className={style.newTask} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    placeholder="O que você quer estudar"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="time"
                    id="time"
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Button type="submit">
                Adicionar
            </Button>
        </form>
    )
}