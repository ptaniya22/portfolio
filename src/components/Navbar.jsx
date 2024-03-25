import { useState } from 'react';
import { Link, Element } from 'react-scroll';

const list = [
      { title: 'About me', anchor: 'about' },
      { title: 'Projects', anchor: 'projects' },
      { title: 'Skills', anchor: 'skills' },
    
    // { title: 'aaa', anchor: '111' },
    { title: 'contacts', anchor: 'contacts' },
    { title: 'other', anchor: 'other' }

    

]




const Navbar = () => {

    // const [click, setclick] = useState(false)
    // const handleClick = () => setclick(!click)



  return (
      <header className='header'>
          <h1 className='header_title'>Musiyachenko <br />Tatyana</h1>
          <h2>Junior Frontend Engineer</h2>
          <nav className="header_nav">
        
                {/* <div className="header_nav__box"> */}
                    
                    <ul className="header_nav__list">
                        { list.map(item => (
                            <li  key={item.title}>
                                <Link to={item.anchor} activeClass="active" offset={-96} spy={true} smooth={true}
                                    // onClick={handleClick}
                                    // onClick={handleClick} className={click ? "header_nav__link active" : "header_nav__link"}
                                    className="header_nav__link">
                                    <span className="header_nav__link_indicator" ></span>
                                    <span className="header_nav__link_text">{item.title}</span>
                                    
                                </Link>
                            </li>
                        )) }
                    </ul>
            
                {/* </div> */}
             </nav>

        </header>
      
  )
}

export default Navbar
