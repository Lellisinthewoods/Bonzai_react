//import { useState } from 'react'
import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './view/Home/Home'
import Rooms from './view/Rooms/Rooms'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/Rooms',
      element: <Rooms />
    }
  ])

  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
