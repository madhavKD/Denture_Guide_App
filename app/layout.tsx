import './globals.css'
import { ClerkProvider, SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs/app-beta";
import { Button, Reshaped, View } from '../components/Reshaped/Reshaped';
import SignInButton from '../components/SignInButton';
import Basket from '../components/Basket';


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
          <Reshaped theme="reshaped">
            <SignedIn>
              {/* TODO: Create a new Organization or join an existing one */}
              <UserButton />
              {children}
            </SignedIn>
            <SignedOut>
              <View direction={'row'} justify="end" padding={2} gap={2} align={'stretch'}>
                <Basket />
                <SignInButton mode='modal'>
                  <Button>
                    Sign in
                  </Button>
                </SignInButton>
              </View>
              {children}
            </SignedOut>
          </Reshaped >
        </body>
      </html>
    </ClerkProvider>
  )
}
