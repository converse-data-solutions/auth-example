import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log(credentials);
        console.log(`${process.env.BACKEND_URL}/user/signin`);
        const authResponse = await fetch(`${process.env.BACKEND_URL}/user/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email: credentials?.username, password: credentials?.password}),
        })

        if (!authResponse.ok) {
          return null
        }

        const user = await authResponse.json()

        return user
      },
    }),
  ],
}