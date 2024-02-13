import React, { useState, useEffect, useRef } from 'react'

import type { EmailLinkProps } from 'types/Email'

const validateText = (text: string): boolean => {
  // eslint-disable-next-line
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/
  return re.test(text) ?? text.length === 0
}

const messages: string[] = [
  'hi',
  'hello',
  'hola',
  'you-can-email-me-at-literally-anything! Really',
  'well, not anything. But most things',
  'like-this',
  'or-this',
  'but not this :(  ',
  'you.can.also.email.me.with.specific.topics.like',
  'just-saying-hi',
  'please-work-for-us',
  'help',
  'admin',
  'or-I-really-like-your-website',
  'thanks',
]

const useInterval = (callback: () => void, delay: number | null): void => {
  const savedCallback = useRef<() => void>()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current?.()
      }, delay)
      return () => clearInterval(id)
    }
    return () => {
      // do nothing
    }
  }, [delay])
}

const EmailLink: React.FC<EmailLinkProps> = ({ loopMessage }) => {
  const hold = 50
  const delay = 50

  const [idx, updateIter] = useState<number>(0)
  const [message, updateMessage] = useState<string>(messages[idx])
  const [char, updateChar] = useState<number>(0)
  const [isActive, setIsActive] = useState<boolean>(true)

  useInterval(
    () => {
      let newIdx = idx
      let newChar = char
      if (char - hold >= messages[idx].length) {
        newIdx += 1
        newChar = 0
      }
      if (newIdx === messages.length) {
        if (loopMessage) {
          updateIter(0)
          updateChar(0)
        } else {
          setIsActive(false)
        }
      } else {
        updateMessage(messages[newIdx].slice(0, newChar))
        updateIter(newIdx)
        updateChar(newChar + 1)
      }
    },
    isActive ? delay : null
  )

  return (
    <div
      className='inline-container'
      style={validateText(message) ? {} : { color: 'red' }}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => idx < messages.length && setIsActive(true)}
    >
      <a href={validateText(message) ? `mailto:${message}@shayne.au` : ''}>
        <span>{message}</span>
        <span>@shayne.au</span>
      </a>
    </div>
  )
}

export default EmailLink
