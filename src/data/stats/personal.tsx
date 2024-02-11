import React, { useState, useEffect } from 'react'
import { personal } from '../config'

const Age = () => {
  const [age, setAge] = useState<number | undefined>(0)

  useEffect(() => {
    // Calculate age based on birth year
    const calculateAge = () => {
      const currentYear = new Date().getFullYear()
      const birthYear = 1984
      const currentAge = currentYear - birthYear
      setAge(currentAge)
    }

    calculateAge()
  }, [])

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897 // ms in an average year
    const birthTime = new Date('1984-09-19T09:24:00')
    const calculatedAge = ((Date.now() - birthTime.getTime()) / divisor).toFixed(11)
    setAge(parseFloat(calculatedAge))
  }

  useEffect(() => {
    const timer = setInterval(() => tick(), 25)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return age
}

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
    link: undefined,
  },
  ...personal,
]

export default data
