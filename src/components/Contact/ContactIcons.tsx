import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import data from 'data/contact'
import { Contact } from 'types/Contact'

const ContactIcons: React.FC = () => (
  <ul className='icons'>
    {data.map((s: Contact) => (
      <li key={s.label}>
        <a href={s.link} aria-label={s.label}>
          <FontAwesomeIcon icon={s.icon} />
        </a>
      </li>
    ))}
  </ul>
)

export default ContactIcons
