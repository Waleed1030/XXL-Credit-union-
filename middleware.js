import NextAuth from "next-auth";
import { authConfig } from '@/app/api/auth/[...nextauth]/authconfig';



export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next).*)'],
}




export default NextAuth(authConfig).auth;
