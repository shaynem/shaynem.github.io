import { name } from './config'

const routes = [
  {
    index: 'true',
    label: name,
    path: '/',
  },
  {
    index: undefined,
    label: 'About',
    path: '/about',
  },
  {
    index: undefined,
    label: 'Resume',
    path: '/resume',
  },
  {
    index: undefined,
    label: 'Projects',
    path: '/projects',
  },
  {
    index: undefined,
    label: 'Stats',
    path: '/stats',
  },
  {
    index: undefined,
    label: 'Contact',
    path: '/contact',
  },
]

export default routes
