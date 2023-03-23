import React from 'react'
import './About.css'
import ME from '../../assets/redbubble_dr-phil-mm-redbubble_1609736633.large.png'
import {FaAward} from 'react-icons/fa'
import {FaSchool} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know </h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="me" />
          </div>
        </div>
        
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working in tech</small>
            </article>

            <article className='about__card'>
              <FaSchool className='about__icon'/>
              <h5>Harvard University</h5>
              <small>Computer Web Development</small>
            </article>

            <article className='about__card'>
              <FaSchool className='about__icon'/>
              <h5>IBM</h5>
              <small>DevOps & software engineering</small>
            </article>
          </div>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod dolore veniam quasi aliquam sapiente esse consequatur commodi fuga. Sed molestias cum, hic quisquam architecto sequi dignissimos doloribus odio facilis.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About