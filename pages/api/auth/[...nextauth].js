import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    
    GitHubProvider({
      clientId: "0743bcf71078a6669061",
      clientSecret: "68bd9e20242103443a0fa59bfb0be9d7f9c49d8b",
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
};

export default NextAuth(authOptions);

/* EmailProvider({
  server: process.env.EMAIL_SERVER,
  from: process.env.EMAIL_FROM,
  sendVerificationRequest({
    identifier: email,
    url,
    provider: { server, from },
  }) {
     your function 
  },
}), */