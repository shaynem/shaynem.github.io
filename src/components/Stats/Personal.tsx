import React from 'react'
import { ReactElementLike } from 'prop-types'
import Table from './Table'

export interface DataProps {
  format?: (arg: string) => string | undefined
  key: string
  label: string
  link: string | undefined
  value: string | number | ReactElementLike | null | undefined | Promise<any>
}

export interface PersonalStatsProps {
  data: DataProps[]
}

const PersonalStats: React.FC<PersonalStatsProps> = ({ data }) => (
  <>
    <h3>Some stats about me</h3>
    <Table data={data} />
  </>
)

export default PersonalStats
