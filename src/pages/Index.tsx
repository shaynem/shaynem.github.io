import React from 'react'
import { Link } from 'react-router-dom'

import Main from '../layouts/Main'

const Index = () => (
  <Main
    description={
      "Shayne McCulloch personal website. Brisbane, Australia, " +
      'Head of Digital Technology at Disrupt Digital, Current co-founder of OHMSense, AIAUST, Original co-founder of Clic technology and Elegro. Sole Founder of VPNSecure - ( Sold in 2020 )'
    }
  >
    <article className='post' id='index'>
      <header>
        <div className='title'>
          <h2>
            <Link to='/'>About this site</Link>
          </h2>
          <p>
            A beautiful, responsive, statically-generated, react application written with modern
            Javascript.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more <Link to='/about'>about me</Link>, or
        you can check out my <Link to='/resume'>resume</Link>, <Link to='/projects'>projects</Link>,{' '}
        view <Link to='/stats'>site statistics</Link>, or <Link to='/contact'>contact</Link> me.
      </p>
      <p>
        {' '}
        Source available <a href='https://github.com/shaynem/shaynem.github.io/'>here</a>.
      </p>
    </article>
  </Main>
)

export default Index
