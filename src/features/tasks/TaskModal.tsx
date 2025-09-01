import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from './tasksSlice';

interface Props {
   onClose: () => void;
}

export const TaskModal = ({ onClose }: Props) => {
   const [ newTask, setNewTask ] = useState({
      name: '',
      description: ''
   })

   const dispatch = useDispatch();

   const handleSave = () => {
      const { name, description } = newTask;
      if (!description.trim() && !name.trim()) return alert('El campo no puede estar vacío');
      dispatch(addTask(newTask));
      onClose();
   }

   return (
      <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop:'1rem' }}>
         <h3>New Task</h3>
         <input
            type='text'
            placeholder='Task Name'
            value={newTask.name}
            onChange={(e) => setNewTask( prev => ({ ...prev, name: e.target.value }) )}
         />

         <input
            type='text'
            placeholder='Description'
            value={newTask.description}
            onChange={(e) => setNewTask( prev => ({ ...prev, description: e.target.value }) )}
         />

         <button onClick={handleSave}>Guardar</button>
         <button onClick={onClose}>Cancelar</button>
      </div>
     
   )
}
