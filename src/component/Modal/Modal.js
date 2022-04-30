import React, { useState } from 'react'
import './Modal.css';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core'

function Modal(price) {
  const history = useHistory();

  const Confirm = () =>{
      history.push('/')
  }

  const Cancel = () => {
    history.push('/update')
  }
  return (
    <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>Thank you for you booking</h2>
            <h2>Your total cost is { price.price } </h2>
            <Button className="btn_modal" onClick = {Confirm}>
              Book New
            </Button>
            <span>
            <Button className="right_btn" onClick = {Cancel}>
              Cancel
            </Button>
            </span>
          </div>
        </div>
  )
}

export default Modal
