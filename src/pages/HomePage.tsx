import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
   return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
         <Link to="/tasks">
         <button>Tasks</button>
         </Link>

         <Link to="/listed">
            <button>List</button>
         </Link>

      </div>
   )
}

export default HomePage