import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  constructor() {
    super()
    this.state = {
      hiddenMsg: false,
    }
  }
  render() {
    return (
      <React.Fragment>
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
            onClick={() => this.setState({ hiddenMsg: !this.state.hiddenMsg })}
          />
          <p>
            Written by <strong>Yuya Oiwa</strong> who lives and works in Japan
            building useful things. I write in both English and Japanese!
          </p>
        </div>
        {this.state.hiddenMsg && <p style={{ color: 'red' }}>Fuck you kyots</p>}
      </React.Fragment>
    )
  }
}

export default Bio
