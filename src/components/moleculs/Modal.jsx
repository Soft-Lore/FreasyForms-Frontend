import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'

export default function Modal({show, toggle, children}) {
  return (
    <div className={show ? "blur" : "no-blur"}>
        <div className="modal-login">
            <AiOutlineClose className="closed-btn" onClick={e => toggle(e)} />
            {children}
        </div>
    </div>
  )
}
