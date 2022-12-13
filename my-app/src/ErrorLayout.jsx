import React from 'react'
import './errorLayout.css'
import potato from '../src/images/potato.gif'
import { useNavigate } from 'react-router-dom'

export default function ErrorLayout() {
    const navigate= useNavigate();
    function handleNavigate(){
        navigate('/');

    }

  return (
  <>
  <div className='error-msg-box'>
     <h1>Error 404: Page Not Found</h1>
    <img alt='potato-fire'className='potato-fire' src={potato}>
    </img>
    <button className='button-return' onClick={handleNavigate}>Return</button>
    </div>
    
    </>
  )
}
