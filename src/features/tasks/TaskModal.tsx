import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from './tasksSlice';

interface Props {
   onClose: () => void;
}

export const TaskModal = ({ onClose }: Props) => {
   const [ description, setDescription ] = useState('')

   const dispatch = useDispatch();

   const handleSave = () => {
      if (!description.trim()) return alert('El campo no puede estar vacío');
      dispatch(addTask(description));
      onClose();
   }

   return (
      <div className='modal-overlay'>
         <div className='modal-content'>
            <input
               type='text'
               placeholder='New Task Name'
               value={description}
               onChange={(e) => setDescription( e.target.value )}
            />

            <button className='addButton' onClick={handleSave}>Add</button>
         </div>
      </div>
   )
}
