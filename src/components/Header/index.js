import React, { useState, useEffect, useCallback } from 'react';
import { withRouter, Link } from 'react-router-dom';
/* Style Components */
import { Container } from './styled';
/* Assets */
import assets from '../../assets';
/* Hooks */
import { useLogin } from '../../infraestructure/hooks';

const Header = () => {
  const [ inputSearch, setInputSearch ] = useState('');
  const { username } = useLogin();

  return (
    <Container>
      <div className="header__left">
        <Link to="/"><i className="material-icons">menu</i></Link>
        <img
          className="header__logo"
          src={assets.logo}
          alt="Movie Show Time Finder"
        />
      </div>
      <div className="header__input">
        <input onChange={(e) => setInputSearch(e.target.value)} placeholder="Search" type="text" value={inputSearch} name="search" />
        <i className="material-icons header__inputButton">search</i>
      </div>
      <div className="header__icons">
        <i className="material-icons header__icon">apps</i>
        <i className="material-icons header__icon">notifications</i>
        {username && (<span className="header__text">{username}</span>)}
        <img
          className="header__avatar"
          src={assets.defaultAvatar}
          alt="Default Avatar"
        />
      </div>
    </Container>
  )
};

export default withRouter(Header);
