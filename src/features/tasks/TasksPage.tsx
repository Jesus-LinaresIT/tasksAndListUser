import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { TaskModal } from './TaskModal';

export const TasksPage = () => {
   const tasks = useSelector(( state: RootState )  => state.tasks.list);
   const [ modalOpen, setModalOpen ] = useState(false);


   return (
      <div className='containerList'>
         <div className='containerButtonTask'>
            <button  onClick={()=>{
               setModalOpen(!modalOpen)
            }}>New Task</button>
         </div>

         <ul>
            {tasks.map((task) => (
               <li key={task.id}> {task.description} </li>
            ))}
         </ul>

         {modalOpen && <TaskModal onClose={()=>setModalOpen(!modalOpen)} />}
      </div>
   )
}
