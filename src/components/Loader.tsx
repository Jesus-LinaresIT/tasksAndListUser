import React from 'react'

export const Loader = () => {
   return (
      <div role='status' aria-label='loading' className='loading'>
         <div className='spinner' style={{
            width: 40, height: 40, borderRadius: '50%', border: '4px solid rgba(0,0,0,0.2)', borderTopColor: '#3498db',
            animation: 'spin 1s linear infinite'
         }}/>

         <style>{`
            @keyframes spin { to { transform: rotate(360deg); }}
         `}
         </style>
      </div>
   );
}
