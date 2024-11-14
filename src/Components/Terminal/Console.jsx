import { useState, useRef, useEffect } from 'react'
import { MessageHistory } from './MessageHistory'

export function Console () {
  const [HistoryConsole, setHistoryConsole] = useState([{ sended: 'ju', content: 'h' }])

  const sectionRef = useRef(null)

  const scrollToBottom = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollTop = sectionRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [HistoryConsole])

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const newMessage = { sended: 'You', content: event.target.value }

      const newHistory = [...HistoryConsole, newMessage]
      setHistoryConsole(newHistory)
      event.target.value = ''
    }
  }

  return (
    <section className='flex flex-col justify-between h-100% w-4/5 p-4 rounded-xl border-2 border-[#1e2b40] bg-[#0f172a]'>

      <section ref={sectionRef} className='flex flex-col flex-1 overflow-y-scroll scroll-smooth scrollbar scrollbar-thumb-[#424242] scrollbar-track-[#686868] mb-4'>
        <div className='flex flex-col gap-2 px-2 pr-4'>
          {HistoryConsole.map((message, index) => {
            return (
              <MessageHistory key={index} message={message} />
            )
          })}
        </div>
      </section>
      <div className='flex text-lg border-2 border-[#1f2d42] rounded-md gap-2 pl-2 p-1 items-center'>
        <label htmlFor='input-promt'>{'->>'}</label>
        <input onKeyDown={handleKeyDown} className='flex-1 bg-transparent outline-none' type='text' id='input-promt' />
      </div>

    </section>
  )
}

/*
scrollbar-thin
scrollbar-thumb-[#424242] hover:scrollbar-thumb-[#f34d00da] active:scrollbar-thumb-sky-300 scrollbar-track-[#686868]
*/
