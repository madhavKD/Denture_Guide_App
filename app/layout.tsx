import './globals.css'
import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs/app-beta";
import { Button, Reshaped, View } from '../components/Reshaped/Reshaped';
import SignInButton from '../components/SignInButton';
import Basket from '../components/Basket';
import "reshaped/themes/reshaped/theme.css";


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
          <Reshaped theme="reshaped" defaultColorMode='dark'>
              {children}
          </Reshaped >
        </body>
      </html>
    </ClerkProvider>
  )
}
