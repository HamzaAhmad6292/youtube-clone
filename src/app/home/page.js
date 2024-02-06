"use client"

import React from 'react'
import Home from "@/components/home/home";
import ProtectedRoute from '@/components/protectedRoute';
function page() {
  return (
    <ProtectedRoute>
        
        <Home></Home>

    </ProtectedRoute>
  )
}

export default page