import React from 'react';
// import ReactDOM  from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './Error.module.css';
import { createPortal } from 'react-dom';

const Backdrop = props=>{
  return <div className={classes.backdrop} onClick={props.onConfirm} />
};

const ModalOverlay = props =>{
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
   </Card>
  )
}

const Error = (props) => {
  return (
    <div>
      {createPortal(<Backdrop onConfirm={props.onConfirm} /> , document.getElementById('backdrop-root'))}
      {createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,document.getElementById('overlay-root'))}
      
    </div>
  );
};

export default Error;