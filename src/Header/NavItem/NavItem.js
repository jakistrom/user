import React from 'react';
import "./NavItem.scss";

const NavItem = (props) => {
    return (
        <li className="nav-item active center">
            <a className="nav-link" href={props.link}>{props.name}<span className="sr-only">(current)</span></a>
        </li>
    )
}

export default NavItem;