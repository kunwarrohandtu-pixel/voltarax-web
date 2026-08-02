import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/db/mongodb"
import bcrypt from "bcryptjs"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        // For admin, check against environment variables
        const adminEmail = process.env.ADMIN_EMAIL
        const adminPassword = process.env.ADMIN_PASSWORD

        // If matching admin credentials
        if (credentials.email === adminEmail && credentials.password === adminPassword) {
          return {
            id: "admin",
            name: "Admin",
            email: adminEmail,
            role: "admin"
          }
        }

        // Optionally, also check database for other users (if you have User model)
        // const user = await prisma.user.findUnique({ where: { email: credentials.email } })
        // if (user && await bcrypt.compare(credentials.password, user.password)) {
        //   return { id: user.id, name: user.name, email: user.email, role: user.role }
        // }

        return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string
      }
      return session
    }
  },
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }