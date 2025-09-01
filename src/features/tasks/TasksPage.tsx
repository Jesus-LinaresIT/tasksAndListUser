import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { TaskModal } from './TaskModal';

export const TasksPage = () => {
   const tasks = useSelector(( state: RootState )  => state.tasks.list);
   const [ modalOpen, setModalOpen ] = useState(false);


   return (
      <div style={{ padding: '1rem' }}>
         <h2>List tasks</h2>
         <ul>
            {tasks.map((task) => (
               <li key={task.id}> {task.description} </li>
            ))}
         </ul>

         <button onClick={()=>{
            setModalOpen(!modalOpen)
         }}>Add Task</button>

         {modalOpen && <TaskModal onClose={()=>setModalOpen(!modalOpen)} />}
      </div>
   )
}
