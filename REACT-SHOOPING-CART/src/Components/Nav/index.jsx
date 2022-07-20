import React from "react";
import {Link } from 'react-router-dom';
import "./styles.css";

const Nav = () => {
    return (
        <ul className="Nav-wrapper">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Cart">Cart</Link>
            </li>
        </ul>
    );
};
export default Nav;