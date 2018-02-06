import React from 'react';
import Modal from "react-modal"

import './modal.css'

export default ({ isOpen, onRequestClose }) =>
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Modal"
    className={{
      base: 'modal-base',
      afterOpen: 'modal-base_after-open',
      beforeClose: 'modal-base_before-close'
    }}
    overlayClassName={{
      base: 'overlay-base',
      afterOpen: 'overlay-base_after-open',
      beforeClose: 'overlay-base_before-close'
    }}
    shouldCloseOnOverlayClick={true}
    closeTimeoutMS={2000}
  >
    <h1> Store Brownie-Ups </h1>
    <div>
      {"  "}
      <img src="http://i63.tinypic.com/t0lpcj.gif"  width="250px" height="100px" /> 
      <br />
      <img src="http://i68.tinypic.com/34ozfba.jpg" width="250px" height="100px" /> 
      <br />
      <img src="http://i68.tinypic.com/s4w1kz.png" width="250px" height="100px" /> 
      <br />
    </div>
    <br></br>

    <button onClick={onRequestClose}>Close</button>
  </Modal>
