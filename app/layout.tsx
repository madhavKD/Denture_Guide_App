import './globals.css';
import {
  ClerkProvider,
  SignedIn
} from '@clerk/nextjs/app-beta';
import { Reshaped, View } from '../components/Reshaped/Reshaped';
import RootStyleRegistry from './registry';
import { MuiThemeProvider } from '../components/Mui';

import 'reshaped/themes/reshaped/theme.css';
import { SideNavigationBar } from '../components/UI/SideNavigationBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
                <View direction="row" height="100%" width="100%">
                  <View width="64px">
                    <SideNavigationBar />
                  </View>
                  <View width="calc(100% - 64px)" padding={4}>
                    {children}
                  </View>
                </View>
                <SignedIn>
                  {/* TODO: Create a new Organization or join an existing one */}
                </SignedIn>
              </Reshaped>
            </MuiThemeProvider>
          </RootStyleRegistry>
        </body>
      </html>
    </ClerkProvider>
  );
}
