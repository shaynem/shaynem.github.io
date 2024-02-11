import dayjs from 'dayjs'

// webpack magic comment to import a file as a string
// https://webpack.js.org/api/module-methods/#magic-comments
const lines = 'lines'


const linesOfCode = () => {
  const line = import(`../${lines}.txt`)
  return line
}

const data = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://github.com/shaynem/shaynem.github.io/stargazers',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: 'https://github.com/shaynem/shaynem.github.io/stargazers',
  },
  {
    label: 'Number of forks',
    key: 'forks',
    link: 'https://github.com/shaynem/shaynem.github.io/network',
  },
  {
    label: 'Number of spoons',
    value: '0',
  },
  {
    label: 'Number of linter warnings',
    value: '0', // enforced via github workflow
  },
  {
    label: 'Open github issues',
    key: 'open_issues_count',
    link: 'https://github.com/shaynem/shaynem.github.io/issues',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/shaynem/shaynem.github.io/commits',
    format: x => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Javascript powering this website',
    value: linesOfCode(),
    link: 'https://github.com/shaynem/shaynem.github.io/graphs/contributors',
  },
]

export default data
