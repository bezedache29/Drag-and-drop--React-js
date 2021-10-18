import React, { useState } from 'react'
import initialDatas from '../config/datas'
import Task from './Task'
import { Droppable } from 'react-beautiful-dnd'

const Column = ({ id, tasks, title }) => {

  const [datas, setDatas] = useState(initialDatas)
  const myTasks = []
  
  if (tasks.length > 0) {
    tasks.map(taskId => (
      datas.tasks.map(task => (
        taskId === task.id && myTasks.push(task)
      ))
    ))
  }

  console.log(myTasks)

  return (
    // <div>
    //   <p>{ title }</p>
    //   {
    //     myTasks && myTasks.map(task => (
    //       <p key={task.id}>{ task.content }</p>
    //     ))
    //   }
    // </div>
    <div className="tasks__column">
      <h2>{ title }</h2>
      <Droppable droppableId={title}>
        {provider => (
          <div
            {...provider.droppableProps}
            ref={provider.innerRef}
            className="tasks__list"
          >
            {
              myTasks && myTasks.map((task, index) => (
                <Task key={task.id} index={index} task={task} />
              ))
            }
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Column
