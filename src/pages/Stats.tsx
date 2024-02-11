import React from 'react'
import { Link } from 'react-router-dom'

import Main from '../layouts/Main'

import Personal from '../components/Stats/Personal'
import Site from '../components/Stats/Site'
import PersonalStatsProps from '../data/stats/personal'

useEffect(() => {
  // eslint-disable-next-line
  import(`../data/${aboutMd}.md`).then((res: any) => {
    fetch(res.default)
      .then((r: Response) => r.text())
      .then(setMarkdown)
  })
}, [])

const Stats: React.FC = () => (
  <Main title='Stats' description="Some statistics about Shayne McCulloch and shayne.au">
    <article className='post' id='stats'>
      <header>
        <div className='title'>
          <h2>
            <Link to='/stats'>Stats</Link>
          </h2>
        </div>
      </header>
      <Personal data={PersonalStatsProps} />
      <Site />
    </article>
  </Main>
)

export default Stats
