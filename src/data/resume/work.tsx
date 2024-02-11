/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 * @property {Publication[]} publications - publications associated with the position
 */
const work = [
  {
    name: 'TNSI',
    position: 'Third Level Support Engineer',
    url: 'https://tnsi.com',
    startDate: '2022-01-01',
    endDate: null,
    summary: `Mastercard Migs platform, Jetstar.`,
    highlights: [
      'Third level technical support to Airline Industry.',
    ].map(highlight => highlight),
    publications: [
      {
        name: 'Publication',
        publisher: 'Company',
        releaseDate: '2014-10-01',
        url: 'https://publication.com',
        summary: 'Description..',
      },
    ],
  },
  {
    name: 'Intabill',
    position: 'IT Support Engineer',
    url: 'http://intabill.com',
    startDate: '2017-04-01',
    endDate: null,
    summary: `...`,
    highlights: [
      '....',
      '.....',
    ],
  },
]

export default work
