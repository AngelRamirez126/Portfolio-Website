import React from 'react'
import './Experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experiences</h2> 
      <div className='experiences'>
      <div className='container experience__container'>
        <div className='experiences_list'>
          
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className= "icons"/>
              <h4>HTML</h4>
              <small className='text-font'>Experienced</small>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className= "icons"/>
              <h4>CSS</h4>
              <small className='text-font'>Experienced</small>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className= "icons"/>
              <h4>Tailwind CSS</h4>
              <small className='text-font'>Experienced</small>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className= "icons"/>
              <h4>React</h4>
              <small className='text-font'>Experienced</small>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className= "icons"/>
              <h4>C</h4>
              <small className='text-font'>Experienced</small>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className= "icons"/>
              <h4>C++</h4>
              <small className='text-font'>Experienced</small>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className= "icons"/>
              <h4>Three.js</h4>
              <small className='text-font'>Experienced</small>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className= "icons"/>
              <h4>UX/UI Design</h4>
              <small className='text-font'>Experienced</small>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className= "icons"/>
              <h4>Graphic Design</h4>
              <small className='text-font'>Experienced</small>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className= "icons"/>
              <h4>Node.js</h4>
              <small className='text-font'>Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default experience