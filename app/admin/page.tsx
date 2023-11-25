'use client'

// import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import React from 'react'
import { useSession } from "next-auth/react"

function AdminDashboard() {
  const { data: session } = useSession()

  return (
    <>
    { session ? <h1> Welcome to Admin Dashboard </h1> : redirect('/') }
    </>
  )
}

export default AdminDashboard