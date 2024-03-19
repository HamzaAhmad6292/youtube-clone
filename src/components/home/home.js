"use client"
import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './navbar/navbar';
import HomeVideos from './videos/homeVideos';

function Home() {
    const currentUser = useSelector((state) => state.user.currentUser);
    const [searchName,setSearchName]=useState("")

  return (

    <div className='  h-dvh bg-gradient-to-r  from-zinc-950 via-zinc-800 to-zinc-950'>
        <Navbar setSearchName={setSearchName} ></Navbar>
        <HomeVideos searchName={searchName}></HomeVideos>

     </div>
  )
}

export default Home