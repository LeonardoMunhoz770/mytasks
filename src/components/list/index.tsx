import { Itask } from "../../types/task";
import Item from "./item";
import style from './Lista.module.scss';


interface Props{
    task: Itask[],
    selectTask: (taskSelectioned: Itask) => void;
}

function List({task, selectTask}: Props) {

    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {task.map((item)=>(
                    <Item  
                        {...item} key={item.id}
                        selectTask={selectTask}    
                    />
                ))}
            </ul>
        </aside>
    )
}


export default List;