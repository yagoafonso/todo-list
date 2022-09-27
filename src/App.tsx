import { useState } from 'react'
import { Header } from './components/Header'
import { HeaderTask } from './components/HeaderTask'
import { ListTask } from './components/ListTask'
import { NewTask } from './components/NewTask'


import  './global.css'


export function App() {


  return (
    <div>
      <Header />
      <NewTask />
      <HeaderTask />
      <ListTask />
    </div>
  )
}

