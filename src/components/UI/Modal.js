import { Fragment } from 'react';
import classes from './Modal.module.css';
import reactDom from 'react-dom';

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>;
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal = props => {
    const portalElement = document.getElementById('overlay');

    return  <Fragment>
        {reactDom.createPortal( <BackDrop onClose={props.onClose} /> , portalElement )}
        {reactDom.createPortal( <ModalOverlay>{props.children}</ModalOverlay> , portalElement )}
    </Fragment>
}

export default Modal;
