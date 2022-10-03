import { useState } from 'react'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'

import './global.css'


export function App() {


  return (
    <div className='containerTodo'>
      <Header />
      <NewTask />
    </div>
  )
}

