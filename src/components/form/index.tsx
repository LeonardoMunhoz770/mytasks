import React from "react";
import { Itask } from "../../types/task";
import Button from "../button";
import style from './Formulario.module.scss'
import {v4 as uuidv4} from "uuid"

class Form extends React.Component <{

    setTask: React.Dispatch<React.SetStateAction<Itask[]>>
}> {
    state ={
        task: "",
        time: "00:00"
    }

    saveTask(event: React.FormEvent){
        event.preventDefault();
        this.props.setTask(taskOld => [...taskOld, {...this.state, select: false, loading: false, id: uuidv4()}]  )
        this.setState({
            task: "",
            time: "00:00"
        })
    }

    render(){
        return(
            <form className={style.novaTarefa} onSubmit={this.saveTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Adicione um novo estudo
                    </label>
                    <input type="text" name="task" id="task" placeholder="O que você quer estudar"value={this.state.task} onChange={event => this.setState({...this.state, task: event.target.value})} required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Tempo
                    </label>
                    <input type="time" step="1" name="time" id="time" min="00:00:00" max="01:30:00" value={this.state.time} onChange={event => this.setState({...this.state, time: event.target.value})}  required />
                </div>
                <Button 
                 text="Adicionar"
                 type="submit"
                />
            </form>
        )
    }
}


export default Form;    