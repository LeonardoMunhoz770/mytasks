import { Itask } from "../../../types/task";
import style from "./Item.module.scss";


interface Props extends Itask{
    selectTask: (taskSelectioned: Itask) => void;
}

export default function Item({task, time, select, loading, id, selectTask}: Props){
     return(
        <li className={`${style.item} ${select ? style.itemSelecionado : ''}`} onClick={() => selectTask({
            task,
            time,
            select,
            loading,
            id
        })}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}