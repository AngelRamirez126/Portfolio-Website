import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'


function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/angel-ramirez-54b8851b0/" target ="_blank"><BsLinkedin/></a>
        <a href="https://github.com/AngelRamirez126" target ="_blank"> <BsGithub/></a>
        <a href="https://dribbble.com/Angel_Ramirez?onboarding=true" target ="_blank"> <BsDribbble/></a>
    </div>
  )
}

export default HeaderSocials