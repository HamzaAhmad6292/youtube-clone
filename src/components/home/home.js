"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../navbar';
import HomeVideos from './videos/homeVideos';

function Home() {
    const currentUser = useSelector((state) => state.user.currentUser);
  return (

    <div>
        <Navbar></Navbar>
        <HomeVideos></HomeVideos>

     </div>
  )
}

export default Home