import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '../component/Home'
import About from '../component/About'
import Work from '../component/Work.jsx'
import Services from '../component/Service'
import EventDetails from '../partial/EventDetails'
import { withPageTransition } from './pageTransition.jsx'

const Routing = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={withPageTransition(Home)()} />
        <Route path="/about" element={withPageTransition(About)()} />
        <Route path="/work" element={withPageTransition(Work)()} />
        <Route path="/services" element={withPageTransition(Services)()} />
        <Route path="/service/:type" element={withPageTransition(EventDetails)()} />
      </Routes>
    </AnimatePresence>
  );
}

export default Routing