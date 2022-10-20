import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './ModalStyle.scss'

const Modal = ({ children }) => {



   return (

      <div>
         <div className={`modal`}>{children}</div>
      </div>


   )
}

export default Modal