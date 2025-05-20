import React, {useContext} from 'react'
import './Header.css'
import bg_cover from '../assets/cover.png'

const Header = ({toggle}) => {

  return (
    <div className='Heading'>
      <div className='line'></div>
      <p>A heart that craves for creativity,<br/>A mind that chases the dream to live a life full of creativity. </p>
      <h1>ART <br/>DIARY</h1>
      <button className='photo' onClick={toggle}>View</button>
    </div>
  )
}

export default Header
