
import React from 'react';
import { View } from '../../components/Reshaped/Reshaped'
import { SelectedTooth } from '../../components/UI/SelectedTooth';

export default function SelectedToothLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <View direction="row" gap={5} >
        <View width="300px">
          <SelectedTooth />
        </View>
        <View width="calc(100% - 320px)">
          {children}
        </View>
      </View>
    </>
  );
}
