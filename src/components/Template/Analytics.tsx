import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga'

const { NODE_ENV, REACT_APP_GA_TRACKING_ID } = process.env

if (NODE_ENV === 'production') {
  ReactGA.initialize(REACT_APP_GA_TRACKING_ID as string)
}

const Analytics: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    if (NODE_ENV === 'production') {
      ReactGA.set({
        page: pathname,
      })
      ReactGA.pageview(pathname)
    }
  }, [pathname])

  return null
}

export default Analytics
