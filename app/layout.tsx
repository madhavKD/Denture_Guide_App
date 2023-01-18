import './globals.css'
import { Button, Reshaped, View } from '../components/Reshaped/Reshaped';
import Basket from '../components/Basket';
import "reshaped/themes/reshaped/theme.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
            <head /> will contain the components returned by the nearest parent
            head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
          */}
      <head />
      <body>
        <Reshaped theme="reshaped">
          {children}
        </Reshaped >
      </body>
    </html>
  )
}
