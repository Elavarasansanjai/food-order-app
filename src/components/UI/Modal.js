import clases from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react";
const Backdrop = (props) => {
  return <div className={clases.backdrop} onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={clases.modal}>
      <div className={clases.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop onClose={props.onClose}/>
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;
