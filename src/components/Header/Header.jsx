import React from 'react'
import "./header.css"

const Header = () => {
    return (
        <>
            <header className='header'>
                <h2 className='header__title'>Bryan</h2>
                <ul className='header__list'>
                    <li className='header__listItem'><a href="#">Inicio</a></li>
                    <li className='header__listItem'><a href="#">Sobre mi</a></li>
                    <li className='header__listItem'><a href="#">Habilidades</a></li>
                    <li className='header__listItem'><a href="#">Contacto</a></li>
                </ul>
            </header>
        </>
    )
}

export default Header