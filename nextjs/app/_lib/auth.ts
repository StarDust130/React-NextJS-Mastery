/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { pages } from "next/dist/build/templates/app-page";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECERT,
    }),
  ],
  callbacks: {
    authorized({ auth }: any) {
      return !!auth?.user;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
