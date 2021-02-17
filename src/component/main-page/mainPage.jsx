import React from 'react';
import './mainPage.css';
import Slick from "react-slick";
import Slider from "react-slick";


const MainPage = ()=> {

    const arr = ['Маркетинговые агенства', 'SMM-менеджеры', 'SEO-специалисты', 'копирайтеры', 'Блогеры', 'онлайн магазины']
    const newArr = arr.map((item)=><div key={item} className='slider'><h3>{item}</h3></div>)

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (cur) => {
            console.log(cur);
        }
    };
    let slider = React.createRef()
    const test = 2000
    const next = () => {
      slider.slickNext();
    }
    const previous = () => {
      slider.slickPrev();
    }

return (
    <div className='div'>
        <div className='container'>
            <header>              
              <img className='logo' src={Logo} />
                <nav>
                    <ul className='menu'>
                        <li><a className='a1' href="#">Главная</a></li>
                        <li><a className='a1' href="#">О нас</a></li>
                        <li><a className='a1' href="#">Популярные</a></li>
                        <li><a className='a1' href="#">Новинки</a></li>
                    </ul>
                </nav>
            </header>
        </div>
        <main>
    <div className="hom">
    {/* <div className="photo">
        <img src={Sun} alt="" className="img"/>
        <img src={People} alt="" className="img2"/>
        <img src={Hand} alt="" className="img3"/>
    </div> */}
        <div className="hom-text">
        <h1>Some Header text</h1>
        <div>
            <span>Some text</span>
                <span>|</span>
            <span>Some text</span>
                <span>|</span>
            <span>Some text</span>
        </div>
<br/>
<button className="b">Купить сейчас</button>
    </div>
    </div>
    </main>
    </div>
    
    )
}

export default MainPage
{/* <Slider ref={c => slider = c} {...settings}>
{newArr}
</Slider>
<button className="button2" onClick={previous}>
<img src={Prev} alt="previous" className='img6'/>
</button>
<button className="button2" onClick={next}>
<img src={Next} alt="next" className='img7'/>
</button> */}