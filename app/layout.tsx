import './globals.css'
import { ClerkProvider, SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs/app-beta";
import Reshaped from '../components/Reshaped';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/*
            <head /> will contain the components returned by the nearest parent
            head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
          */}
        <head />
        <body>
          <SignedIn>
            <UserButton />
            <Reshaped theme="reshaped">
              {children}
            </Reshaped >
          </SignedIn>
          <SignedOut>
            <SignIn />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  )
}
