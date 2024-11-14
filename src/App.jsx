import { MessageHistory } from './Components/Terminal/MessageHistory'
import { Console } from './Components/Terminal/Console'
import './main.css'
import React, { useState } from 'react'

export default App

export function App () {
  return (
  <main className='w-screen h-screen flex justify-center p-4'>

    <Console />

  </main>
  )
}
