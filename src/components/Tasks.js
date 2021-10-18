import React, { useState } from 'react'
import initialDatas from '../config/datas'
import Column from './Column'
import { DragDropContext } from 'react-beautiful-dnd'

const Tasks = () => {

  const [datas, setDatas] = useState(initialDatas)

  const onDragEnd = (result) => {
    const { destination, source } = result

    // Si la task sort de la colonne
    if (!destination) {
      return
    }

    // Si une task est bouger et remis au meme endroit, le code s'arrete
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    // Si on bouge les éléments
    let myTasksId = []
    let myColumn = {}
    let myColumnIndex = null

    datas.columns.forEach((column, index) => {
      if (column.title === source.droppableId) {
        // On récupère les id des taches
        myTasksId = column.tasksId
        myColumn = column
        myColumnIndex = index
      }
    })

    // On remplace les places dans le tableau
    myTasksId.splice(source.index, 1)
    myTasksId.splice(destination.index, 0, source.index+1)
    
    // On crée une copie de la colonne de taches modifiées
    const newColumn = {...myColumn, 
      tasksId: myTasksId,
    }

    // On met à jour le state
    const newState = {
      ...datas,
      columns: [
        ...datas.columns,
        newColumn[myColumnIndex]
      ]
    }

    // setDatas(newState)

    // return
  }

  return (
    <div className="tasks">
      <DragDropContext onDragEnd={onDragEnd}>
        {
          datas.columnOrder.map(columnId => (
            datas.columns.map(column => (
              columnId === column.id 
              && 
              <Column key={ columnId } id={columnId} tasks={ column.tasksId } title={ column.title } />
            ))
          ))
        }
      </DragDropContext>
    </div>
  )
}

export default Tasks
