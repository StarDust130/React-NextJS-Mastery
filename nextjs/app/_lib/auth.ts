/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }: any) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }: any) {
      try {
        const existingGuest = await getGuest(user.email);

        // If guest does not exist, create a new guest
        if (!existingGuest) {
          await createGuest({
            email: user.email,
            fullName: user.name || "Unknown", // Handle case where name is undefined
          });
        }

        return true; // Return true to continue the login process
      } catch (error) {
        console.error("SignIn error:", error);
        return false; // Return false to prevent login if there's an error
      }
    },

    async session({ session, user }: any) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
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
