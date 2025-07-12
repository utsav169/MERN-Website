import { useState, useEffect } from 'react'
import { getPosts, getPost, createPost, updatePost, deletePost } from './api'
import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Landing } from './pages/Landing'
import { Home } from './pages/Home'
import { ReadBlog } from './pages/ReadBlog'
import { CreateBlog } from './pages/CreateBlog'
import { Profile } from './pages/Profile'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Navbar } from './components/Navbar'
import { Layout } from './components/Layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route element={<Layout/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/readblog/:id" element={<ReadBlog/>}/>
          <Route path="/createblog" element={<CreateBlog/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
