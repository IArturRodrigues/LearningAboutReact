import { ITask } from '../../../interfaces/ITask';
import style from './Item.module.scss';

interface IProps extends ITask {
    selectedTask: (selectTask: ITask) => void;
}

export default function Item({ 
    name, 
    time, 
    selected, 
    completed, 
    id, 
    selectedTask 
}: IProps): JSX.Element {
    return (
        <li 
            className={`${style.item} ${selected ? style.selectedItem : ''} ${completed ? style.completedItem : ''}`} 
            onClick={() => !completed && selectedTask(
                {
                    name,
                    time,
                    selected,
                    completed,
                    id
                }
            )}
        >
            <h3>{name}</h3>
            <span>{time}</span>
            {completed && <span className={style.done} arial-label='testandooo' ></span>}
        </li>
    );
}