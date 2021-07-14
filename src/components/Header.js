import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="content-container">
            <Link className="header__title" to="/">
                <img className="header__logo" src="/images/logo.png" />
                <h1>Absence Manager</h1>
            </Link>
        </div>
    </header>
);

export default Header;