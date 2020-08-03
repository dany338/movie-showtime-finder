import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Rodal from 'rodal';
import Swal from 'sweetalert2';
// include styles
import 'rodal/lib/rodal.css';
/* Style Components */
import { Container } from './styled';
/* Hooks */
import { useMovies, useLogin } from '../../infraestructure/hooks';
/* Constants */
import { isValidEmail } from '../../infraestructure/config/const';

const modalRoot = document.getElementById('modal-root');
const customStyles = {
  overflowY: 'auto',
};

const ModalSubscribe = ({ visible, onClose, movie }) => {
  const [ existing, setExisting ] = useState(false);
  const [ action, setAction ] = useState('Register');
  const { isLoggedIn } = useMovies();
  const { user, userFieldChangeRequest, userCreateRequest, loginRequest } = useLogin();

  const handleChangeRadio = e => {
    const { value } = e.currentTarget;
    if(value === 'existing'){
      setExisting(true);
      setAction('Login');
    }
    else {
      setExisting(false);
      setAction('Register');
    }
  };

  const handleAction = async e => {
    e.preventDefault();
    if(user.email !== '' && isValidEmail(user.email)) {
      if(action === 'Login') {
        const formData = {
          login: user.email
        };
        await loginRequest(formData);
      } else if(user.location !== '' && user.mobile !== '' && user.age !== '' && user.fullname !== '' ){
        const formData = {
          ...user,
          ...movie
        };
        await userCreateRequest(formData);
      } else {
        Swal.fire({
          title: 'OBLIGATORY FIELD!',
          icon: 'info',
          text: 'you must enter a valid values!',
          confirmButtonText: 'OK'
        })
      }
    } else {
      Swal.fire({
        title: 'OBLIGATORY FIELD!',
        icon: 'info',
        text: 'you must enter a valid value for the email!',
        confirmButtonText: 'OK'
      })
    }
    e.stopPropagation();
  };

  const handleChangeField = e => {
    const { name, value } = e.currentTarget;
    console.log(name, value);
    userFieldChangeRequest(name, value);
  };

  return ReactDOM.createPortal(
    <Rodal
      visible={visible}
      onClose={onClose}
      animation="zoom"
      customStyles={customStyles}
      className="modal-rodal-container"
      closeOnEsc
    >
      <Container>
        {movie && (
          <div className="modal__title">
            <h4>{movie.name} • {movie.moviedb_id}</h4>
          </div>
        )}
        <div className="modal__content">
        {!isLoggedIn ? (
          <>
            <div className="modal__row" style={{ flexDirection: 'row' }}>
              <input type="radio" name="existing" value="new" onChange={(e) => handleChangeRadio(e)} />{' '}<span>New User</span>{' '}
              <input type="radio" name="existing" value="existing" onChange={(e) => handleChangeRadio(e)} />{' '}<span>Existing User</span>{' '}
            </div>
            {!existing ? (
              <>
                <div className="modal__row">
                  <input type="text" name="email" value={user.email} onChange={(e) => handleChangeField(e)} placeholder="Enter your email" style={{ width: '100%'}} />
                  {user.email === '' && (
                    <p style={{color: 'red'}}>
                      Email is required!
                    </p>
                  )}
                </div>
                <div className="modal__row">
                  <input type="text" name="fullname" value={user.fullname} onChange={(e) => handleChangeField(e)} placeholder="Enter your Full Name" style={{ width: '100%'}} />
                  {user.fullname === '' && (
                    <p style={{color: 'red'}}>
                      Full name is required!
                    </p>
                  )}
                </div>
                <div className="modal__row">
                  <input type="text" name="mobile" value={user.mobile} onChange={(e) => handleChangeField(e)} placeholder="Enter your mobile" style={{ width: '100%'}} />
                  {user.mobile === '' && (
                    <p style={{color: 'red'}}>
                      Mobile is required!
                    </p>
                  )}
                </div>
                <div className="modal__row">
                  <input type="text" name="location" value={user.location} onChange={(e) => handleChangeField(e)} placeholder="Enter your location" style={{ width: '100%'}} />
                  {user.location === '' && (
                    <p style={{color: 'red'}}>
                      Location is required!
                    </p>
                  )}
                </div>
                <div className="modal__row">
                  <input type="text" name="age" value={user.age} onChange={(e) => handleChangeField(e)} placeholder="Enter your age" style={{ width: '100%'}} />
                  {user.age === '' && (
                    <p style={{color: 'red'}}>
                      Age is required!
                    </p>
                  )}
                </div>
              </>
            ) : (
              <div className="modal__row">
                <input type="text" name="email" value={user.email} onChange={(e) => handleChangeField(e)} placeholder="Enter your email" style={{ width: '100%'}} />
                {user.email === '' && (
                  <p style={{color: 'red'}}>
                    Email is required!
                  </p>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="modal__row">
            <input type="text" name="email" value={user.email} onChange={(e) => handleChangeField(e)} placeholder="Enter your email" style={{ width: '100%'}} />
            {user.email === '' && (
              <p style={{color: 'red'}}>
                Email is required!
              </p>
            )}
          </div>
        )}
        <div className="modal__action" onClick={(e) => handleAction(e)}>
          <h4>{action}</h4>
        </div>
        </div>
      </Container>
    </Rodal>,
    modalRoot
  )
}

ModalSubscribe.propTypes = {

}

export default ModalSubscribe;
