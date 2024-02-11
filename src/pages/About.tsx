import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Markdown from 'markdown-to-jsx'

import Main from '../layouts/Main'
// eslint-disable-next-line
const aboutMd = 'about'

const About: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('')

  useEffect(() => {
    // eslint-disable-next-line
    import(`../data/${aboutMd}.md`).then((res: any) => {
      fetch(res.default)
        .then((r: Response) => r.text())
        .then(setMarkdown)
    })
  }, [])

  const count: number = markdown
    .split(/\s+/)
    .map((s: string) => s.replace(/\W/g, ''))
    .filter((s: string) => s.length).length

  return (
    <Main title='About' description="Learn about Shayne McCulloch">
      <article className='post markdown' id='about'>
        <header>
          <div className='title'>
            <h2>
              <Link to='/about'>About Me</Link>
            </h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <Markdown>{markdown}</Markdown>
      </article>
    </Main>
  )
}

export default About
