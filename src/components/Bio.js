import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <img
          src={profilePic}
          alt={'Yuya Oiwa'}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '30px',
          }}
        />
        <p>
          Written by <strong>Yuya Oiwa</strong> who lives and works in Japan
          building useful things. I write in both English and Japanese!
        </p>
      </div>
    )
  }
}

export default Bio
