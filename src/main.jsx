import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Services from "./components/Service/Service.jsx";


import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />} >
      <Route path='' element = {<Home />} />
      <Route path='About' element = {<About />} />
      <Route path='Contact' element = {<Contact />} />
      <Route path='User/:userid' element = {<User /> }/>
    <Route path="/services" element={<Services />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* pehle hum  <RouterProvider router={router}/>   ke jagah <App/> render kr rahe the kyuki home ko header aur footerse connect krna chahte hai */}

    <RouterProvider router={router}/>    {/* RouterProvider ko hume ek function dena hoga jo humne router naam se uopar define kiya hai */}

  </StrictMode>,
)
