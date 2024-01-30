import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ isAuthorized, children }) {

  return (
    <div>
        {isAuthorized? children: (alert("Please login first..."),<Navigate to="/login" />)}
    </div>
  )
}

export default ProtectedRoute