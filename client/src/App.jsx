import { useState, useContext} from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from "./Components/Home"
import Checklist from './Components/Checklist'
import Journal from './Components/Journal'
import JournalEntries from "./Components/JournalEntries"
import Meditation from './Components/Meditation'
import {Routes, Route} from "react-router-dom"
// import { JournalContextProvider, JournalContext } from './Components/JournalContext'


function App() {

  // const {JournalEntries} = useContext(JournalContext)

  return (
    <div>
      <Header />

      <Routes>

<Route path = "/" element = {<Home />} />
<Route path = "checklist" element = {<Checklist />} />
<Route path = "journal" element = {<Journal />} />
<Route path = "journal/entries" element = {<JournalEntries />} />
<Route path = "meditation" element = {<Meditation />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App
