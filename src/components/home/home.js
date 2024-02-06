"use client"
import React from 'react'
import { useSelector } from 'react-redux';

function Home() {
    const currentUser = useSelector((state) => state.user.currentUser);
    console.log(currentUser)
  return (
    <div>hamza</div>
  )
}

export default Home