import React from 'react'
import dayjs from 'dayjs'
import type { CellProps } from 'types/Cell'

const Cell: React.FC<CellProps> = ({ data }) => (
  <div className='cell-container'>
    <article className='mini-post'>
      <header>
        <h3>
          <a href={data.link}>{data.title}</a>
        </h3>
        <time className='published'>{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <a href={data.link} className='image'>
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <div className='description'>
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
)

export default Cell
