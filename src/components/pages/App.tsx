import React, { useState } from 'react';
import { Itask } from '../../types/task';

import Form from '../form';

import List from '../list';
import Stopwatch from '../stopwatch';
import style from './App.module.scss';


function App() {
  const [task, setTask] = useState<Itask[]>([])
  const [select, setSelect] = useState<Itask>();

  function selectTask(taskSelectioned: Itask){
    setSelect(taskSelectioned)
    setTask(taskOld => taskOld.map(task => ({
      ...task,
      select: task.id === taskSelectioned.id ? true : false
    })))
  }
  return (
    <div className={style.AppStyle}>
        <Form setTask={setTask}/>
        <List task={task} selectTask={selectTask}/>
        <Stopwatch select={select}/>
    </div>
  );
}

export default App;
