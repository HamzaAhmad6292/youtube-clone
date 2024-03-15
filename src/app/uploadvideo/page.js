

import ProtectedRoute from '@/components/protectedRoute'
import UploadVideo from '@/components/uploadVideo'
import React from 'react'

export default function page() {
  return (

    <ProtectedRoute>
    <UploadVideo></UploadVideo>
    </ProtectedRoute>
  )
}
