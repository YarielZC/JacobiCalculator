import { useState, useRef, useEffect } from 'react'
import { MessageHistory } from './MessageHistory'

export function Console () {
  const [HistoryConsole, setHistoryConsole] = useState(['h'])

  const sectionRef = useRef(null)

  const scrollToBottom = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollTop = sectionRef.current.scrollHeight
      console.log(sectionRef.current.scrollHeight)
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [HistoryConsole])

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const newHistory = [...HistoryConsole, event.target.value]
      setHistoryConsole(newHistory)
      event.target.value = ''
    }
  }

  return (
    <section className='flex flex-col justify-between h-[100vh] '>

      <section ref={sectionRef} className='flex flex-col flex-1 overflow-y-scroll'>
        {HistoryConsole.map((message, index) => {
          return (
            <MessageHistory key={index} text={message} />
          )
        })}
      </section>
      <div className='flex border-2 rounded-md gap-2'>
        <label htmlFor='input-promt'>{'->>'}</label>
        <input onKeyDown={handleKeyDown} className='flex-1 bg-transparent outline-none' type='text' id='input-promt' />
      </div>

    </section>
  )
}
