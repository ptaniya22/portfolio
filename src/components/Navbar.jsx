import React from 'react';
import { Link, Element } from 'react-scroll';

const list = [
      { title: 'Обо мне', anchor: 'about' },
      { title: 'Проекты', anchor: 'projects' },
      {title:'Навыки',  anchor:'skills'},

]




const Navbar = () => {
  return (
      <header className='header'>
          <h1>Musiyachenko <br />Tatyana</h1>
          <h2>Junior Frontend Engineer</h2>
          <nav className="nav">
        
                <div className="nav__box">
                    
                    <ul className="nav__list">
                        { list.map(item => (
                            <li key={item.title}>
                                <Link to={item.anchor} offset={-96} className="nav__link">{item.title}</Link>
                            </li>
                        )) }
                    </ul>
            
                </div>
             </nav>

        </header>
      
  )
}

export default Navbar
