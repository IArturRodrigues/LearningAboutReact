import style from './List.module.scss';
import Item from './Item';
import { ITask } from '../../interfaces/ITask';

interface IProps {
    tasks: ITask[];
    selectTask: (selectTask: ITask) => void;
}

export default function List({ tasks, selectTask }: IProps): JSX.Element {
    return(
        <aside className={style.taskList}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task) => (
                    <Item
                        selectedTask={selectTask}
                        key={task.id}
                        {...task}
                    />
                ))}
            </ul>
        </aside>
    );
}