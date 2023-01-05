/** @jsxImportSource @emotion/react */
'use client';

import { View } from '../components/Reshaped/Reshaped';
import { SideNavigationBar } from '../components/UI/SideNavigationBar';
import { ProstheticSelectionGuide } from '../components/UI/ProstheticSelectionGuide';

export default function Home() {
  return (
    <View direction="row" height="100%" width="100%">
      <View width="64px">
        <SideNavigationBar />
      </View>
      <View width="calc(100% - 64px)" padding={4}>
        <ProstheticSelectionGuide />
      </View>
    </View>
  );
}
