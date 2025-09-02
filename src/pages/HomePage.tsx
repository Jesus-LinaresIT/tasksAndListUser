import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
   return (
      <div className='container'>
         <div className='sectionButton'>
            <Link to="/tasks">
               <button className='textButton'>Tasks</button>
            </Link>

            <Link to="/listed">
               <button className='textButton' style={{ paddingRight: '6.9rem' }}>Lists</button>
            </Link>
         </div>

      </div>
   )
}

export default HomePage