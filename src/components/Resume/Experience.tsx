import React from 'react'
import PropTypes from 'prop-types'

import Job from './Experience/Job'

const Experience = ({ data }) => (
  <div className='experience'>
    <div className='link-to' id='experience' />
    <div className='title'>
      <h3>Experience</h3>
    </div>
    {data.map(job => (
      <Job data={job} key={`${job.name}-${job.position}`} />
    ))}
  </div>
)
export interface ExperienceProps {
  data: Array<{
    name: string
    position: string
    url: string
    startDate: string
    endDate: string
    highlights: string[]
    summary: string
    publications: Array<{
      name: string
      publisher: string
      releaseDate: string
      url: string
    }>
  }>
}
Experience.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      position: PropTypes.string,
      url: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      highlights: PropTypes.arrayOf(PropTypes.string),
      summary: PropTypes.string,
      publications: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          publisher: PropTypes.string,
          releaseDate: PropTypes.string,
          url: PropTypes.string,
        })
      ),
    })
  ),
}

Experience.defaultProps = {
  data: [],
}

export default Experience
