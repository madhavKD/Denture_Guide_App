import './globals.css';
import 'reshaped/themes/reshaped/theme.css';

import { Reshaped, View } from '../components/Reshaped/Reshaped';
import RootStyleRegistry from './registry';
import { MuiThemeProvider } from '../components/Mui';
import { SideNavigationBar } from '../components/UI/SideNavigationBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
              </Reshaped>
            </MuiThemeProvider>
          </RootStyleRegistry>
        </body>
      </html>
  );
}
