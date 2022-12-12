import React, { useState } from 'react';

import { timeToSecond } from "../../common/utils/time";
import { Itask } from "../../types/task";
import Button from "../button";
import Clock from "./clock";
import style from "./Stopwatch.module.scss"

interface Props{
    select: Itask | undefined
}


export default function Stopwatch({select} : Props){
    const [time, setTime] = useState<Number>()
    if(select?.time){
        setTime(timeToSecond(select.time))
    }
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock/>
            </div>
            <Button text="Começar!"/>
        </div>
    )
}