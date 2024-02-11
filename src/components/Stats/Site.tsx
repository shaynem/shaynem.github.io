import React, { useState, useCallback, useEffect } from 'react'

import Table from './Table'
import initialData from '../../data/stats/site'

interface FieldData {
  key?: string | undefined
  value: string | number | null | undefined | Promise<any>
  format?: (x: string) => string | undefined
}

const getData = (resData: FieldData, field: FieldData) => {
  if (field.key && Object.keys(resData).includes(field.key)) {
    return resData[field.key]
  }
  return field.value
}

const Stats = () => {

  const [data, setResponseData] = useState(initialData)
  useEffect(() => {
    // eslint-disable-next-line
    import(`../data/${aboutMd}.md`).then((res: any) => {
      fetch(res.default)
        .then((r: Response) => r.text())
        .then(setMarkdown)
    })
  }, [])
  // TODO think about persisting this somewhere
  const fetchData = useCallback(async () => {
    // request must be authenticated if private
    // https://github.com/shaynem/shaynem.github.io
    const res = await fetch('https://api.github.com/repos/shaynem/shaynem.github.io')
    const resData = await res.json()
    setResponseData(
      initialData.map(field => ({
        ...field,
        // update value if value was returned by call to github
        value: getData(resData, field),
      }))
    )
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div>
      <h3>Some stats about this site</h3>
      <Table data={data} />
    </div>
  )
}

export default Stats
