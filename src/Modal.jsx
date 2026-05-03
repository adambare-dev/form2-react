import React from 'react'
import './index.css'

function Modal({ onclose }) {
  return (
    <div className='modal-overly'>
      <div className='modal'>
        <h3>succsful✅!</h3>
        <p>your form has been submitted successfully!!</p>
        <button onClick={onclose} className='closemodal'
        title='close'>&times;</button>
      </div>
    </div>
  )
}

export default Modal