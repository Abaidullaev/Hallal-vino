import React from 'react'
import css from './../mainPage'

const Page = () => {
    return <div className={' ${css.first_block}  first_block'}>
        <div className="home_block">
            <h1>Some Header text</h1>
            <span>Some text</span>
            <br/>
            <span>|</span>
            <span>Some text</span>
            <span>|</span>
            <span>Some text</span>
        </div>
    </div>
}