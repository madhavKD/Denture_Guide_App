'use client';

import Image from "next/image";
import React from "react";
import { View } from "reshaped";

export default function SideNavigationBar() {
  return (
    <View>
      <View>
        <Image src="./logo.svg" alt="Dechea" height={23} width={24} />
      </View>
      <View></View>
    </View>
  )
}