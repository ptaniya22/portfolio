import React from 'react'
import { Link, Element } from 'react-scroll';

const About = () => {
  return (
    <section className='main'>
      <Element name="about" >       
           <div className="main_item"><h2>About me</h2>
          <p>This is the content of section 2 ***********************************************************************************************************</p>
        </div> 
        {/* <section className='section' style={{ height: 600, backgroundColor: 'lightblue' }}>
          <h1>Обо мне</h1>
          <p>This is the content of section 1 ********************* **********************************************************************</p>
        </section> */}
      </Element>

      <Element name="projects" >       
         <div className="main_item"><h2>My projects</h2>
          <p>This is the content of section 2 *******************************************************************************************</p>
        </div> 
        
      </Element>

      <Element name="skills" >       
           <div className="main_item"><h2>Skills</h2>
          <p>This is the content of section 2 *******************************************************************************************</p>
        </div> 
      </Element>
    </section>
  )
}

export default About
