import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "./lib/models/userModel";
import { compare } from "bcryptjs";
import { connectToDb } from "./lib/mongoDb";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          return null;
        }

        try {
          await connectToDb();

          const user = await User.findOne({ email: credentials.email });

          if (!user) return null;

          const isPasswordValid = await compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) return { string: "Invalid Password" };

          return {
            id: user._id.toString,
            email: user.email,
            name: user.fullName,
          };
        } catch (err) {
          throw new Error(
            "there is something went wrong in auth config js file",
            err
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }

      return token;
    },
    async sessions({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
      }
      return session;
    },
  },
});
