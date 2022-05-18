import React, { useState, useEffect } from 'react';
import { MenuList } from './MenuList';
import {CgMenuBoxed} from 'react-icons/cg';

import '../styles/Header.css';

function Header() {

    const [isMenuActive, setMenuActive] = useState(false);

    useEffect(() =>{
        const menu = document.getElementById("menu");
        const allLi = menu.querySelectorAll("li");

        function linkAction(){
            allLi.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");

            setMenuActive(!setMenuActive);
        }

        console.log(allLi);

        allLi.forEach( (n) => n.addEventListener('click', linkAction))
    }, []);

    const toggleActive = () => {
        setMenuActive(!isMenuActive);
    };

    return (
        <header>
            <nav className="nav">
                <a href="#" className="nav_logo">
                    Terminal
                </a>

                <ul id="menu" className={isMenuActive ? "show" : ""}>
                {
                    MenuList && MenuList.map((n) => (
                    <li key={n.id}>
                        <a href={n.hyper_link}>{n.link_name}</a>

                    </li>
                    ))
                }
                </ul>

                <i className="toggleMenu" onClick = {toggleActive}>
                    <CgMenuBoxed />
                </i>
            </nav>
        </header>
    )
}

export { Header };