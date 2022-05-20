import { useEffect, useState } from 'react';
import { timeToSeconds } from '../../common/utils/timer';
import { ITask } from '../../interfaces/ITask';
import Button from '../Button';
import Clock from './Clock';
import style from './Timer.module.scss';

interface IProps {
    selected: ITask | undefined;
    endTask: () => void;
}

export default function Timer({ selected, endTask }: IProps): JSX.Element {
    const [time, setTime] = useState<number>();
    useEffect(() => {
        if(selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected]);

    function regressive(count: number = 0): void {
        setTimeout(() => {
            if(count > 0) {
                setTime(count -1);
                return regressive(count -1);
            }
            return endTask();
        }, 1000)
    }

    return(
        <div className={style.timer}>
            <p className={style.title}>Escolha uma tarefa e inicie o cronometro</p>
            <div className={style.clockWrapper}>
                <Clock time={time} />
            </div>
            <Button onClick={() => regressive(time)}>
                Começar
            </Button>
        </div>
    );
}