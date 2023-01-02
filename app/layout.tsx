import './globals.css'
import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs/app-beta";
import { Button, Reshaped, View } from '../components/Reshaped/Reshaped';
import SignInButton from '../components/SignInButton';
import Basket from '../components/Basket';
import RootStyleRegistry from "./registry";
import { MuiThemeProvider } from '../components/Mui';

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
          <RootStyleRegistry>
            <MuiThemeProvider>
              <Reshaped theme="reshaped">
                <SignedIn>
                  {/* TODO: Create a new Organization or join an existing one */}
                  <View direction={'row'} align={'center'} justify={'end'} padding={2} gap={2}>
                    <Basket />
                    <UserButton />
                  </View>
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
            </MuiThemeProvider>
          </RootStyleRegistry>
        </body>
      </html>
    </ClerkProvider>
  )
}
