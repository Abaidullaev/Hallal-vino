import React from 'react'
import css from './header.css'
import basket from './../../images/shopping.png'
import {Link} from "react-router-dom";

const Header = () => {
    return <div className={`${css.wrapper} wrapper`}>
        <Link to={'/'}> LOGO </Link>
        <div className={css.menu}>
            <div className={css.items}>Главная</div>
            <div className={css.items}>Категории</div>
            <div className={css.items}>Популярные</div>
            <div className={css.items}>Новинки</div>
        </div>
        <div>
            <Link to={'/basket'} className={css.img}>
                <img src={basket} alt="Basket"/>
            </Link>
        </div>
    </div>
}

export default Header