'use client';

import Image from "next/image";
import React from "react";
import { Avatar, Divider, View, MenuItem, Button, Icon } from "../../Reshaped/Reshaped";

export default function SideNavigationBar() {
  return (
    <View height="100vh" direction='row' attributes={{ style: { position: 'fixed', left: 0, top: 0 } }}>
      <View direction="column" align="center" height="100%" maxWidth="64px"  >
        <View width='64px' height='64px' align="center" justify="center">
          <MenuItem href="/">
            <Image src="/logo.svg" alt="Dechea" height={23} width={24} />
          </MenuItem>
        </View>

        <View paddingTop={16} paddingBottom={16} gap={2} maxHeight="391px">
          <MenuItem href="/" selected >
            <Image src="/prostheticGuide.svg" alt="Prosthetic selection guide" height={24} width={24} />
          </MenuItem>
          <MenuItem >
            <Image src="/checkout.svg" alt="Ordered Prosthetic" height={24} width={24} />
          </MenuItem>
        </View>

        <View height="100%" direction="column" justify="end" align="center" paddingTop={2} paddingBottom={2}>
          <View width='64px' height='64px' align="center" justify="center">
            <Button variant='ghost'>
              <Avatar src="/User.svg" alt="Dechea" size={8} />
            </Button>
            {/* <SignedOut>
              <SignInButton mode="modal">
                <Button variant='ghost'>
                  <Avatar src="/User.svg" alt="Dechea" size={8} />
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn> */}
          </View>
        </View>
      </View>
      <Divider vertical blank />
    </View>
  )
}