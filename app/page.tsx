import { options } from './api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession(options)

  return (
    <main>
      Hello World!
    </main>
  )
}
