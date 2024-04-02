import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { authConfig } from "./authconfig"
import { connectDB } from "@/app/lib/utils";
import { User } from "@/app/lib/models";
import bcrypt from 'bcryptjs' 

const login = async (credentials) => {
 try {
    connectDB()
    const user = await User.findOne({ username:credentials.username })

    if(!user){
      throw new Error("Wrong Credentials!")  
    }

    const isPasswordCorrect = await bcrypt.compare(
        credentials.password, 
        user.password
    )
    if(!isPasswordCorrect){
        throw new Error("Password is Incorrect")
    }

    return user;
    
 } catch (error) {
    console.log(error)
    throw new Error("Failed to Login!")
 }
}

export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials){
                try {
                    const user = await login(credentials)
                    return user;
                } catch (error) {
                    return null
                }
            },
        }),
    ],

    // ADD ADDITIONAL INFORMATION TO SESSION
    callbacks: {
        jwt({ token, user }) {
        if (user) {
            token.username = user.username;
            token.firstname = user.firstname;
            token.lastname = user.lastname;
            token.role = user.role;
            token.img = user.img;
        }
        return token;
        },
        session({ session, token }) {
        if (token) {
            session.user.username = token.username;
            session.user.firstname = token.firstname;
            session.user.lastname = token.lastname;
            session.user.role = token.role
            session.user.img = token.img
        }
        return session;
        },
    },
})


