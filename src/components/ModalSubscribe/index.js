import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Rodal from 'rodal';
// include styles
import 'rodal/lib/rodal.css';

const modalRoot = document.getElementById('modal-root');
const customStyles = {
  overflowY: 'auto',
};

const ModalSubscribe = ({ visible, onClose, movie }) => {
  return ReactDOM.createPortal(
    <Rodal
      visible={visible}
      onClose={onClose}
      animation="zoom"
      customStyles={customStyles}
      className="modal-rodal-container"
      closeOnEsc
    >
      {movie && (
        <div>{movie.title} • {movie.id}</div>
      )}
    </Rodal>,
    modalRoot
  )
}

ModalSubscribe.propTypes = {

}

export default ModalSubscribe;
