import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import style from './App.module.scss';

import { useState } from 'react';

import { ITask } from '../interfaces/ITask';

function App() {
  const [task, setTask] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask): void {
    setSelected(selectedTask);
    setTask(oldTask => oldTask.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  }

  function endTask() {
    if(selected) {
      setTask(oldTask => oldTask.map(task => {
          if(task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true
            }
          }
          return task;
        }
      ))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTask={setTask} />
      <List 
        tasks={task}
        selectTask={selectTask}
      />
      <Timer 
        selected={selected}
        endTask={endTask}
        />
    </div>
  );
}

export default App;
