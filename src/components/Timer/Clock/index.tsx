import style from './Clock.module.scss';

interface IProps {
    time: number | undefined;
}

export default function Clock({ time = 0 }: IProps): JSX.Element {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minutesDozens, minutesUnits] = String(minutes).padStart(2, '0');
    const [secondsDozens, secondsUnits] = String(seconds).padStart(2, '0');
    return(
        <>
            <span className={style["clock-number"]}>{minutesDozens}</span>
            <span className={style["clock-number"]}>{minutesUnits}</span>
            <span className={style["clock-division"]}>:</span>
            <span className={style["clock-number"]}>{secondsDozens}</span>
            <span className={style["clock-number"]}>{secondsUnits}</span>
        </>
    );
}