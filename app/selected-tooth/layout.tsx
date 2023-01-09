
import React from 'react';
import { View, Text, Divider } from '../../components/Reshaped/Reshaped'
import { SelectedTooth } from '../../components/UI/SelectedTooth';
import { Cart } from '../../components/UI/Cart';
import { SelectTeeth } from '../../components/UI/ProstheticSelectionGuide/components/SelectTeeth';

export default function SelectedToothLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SelectTeeth />
      <View paddingBottom={4} paddingTop={4}>
      <Text variant='body-medium-2' color='neutral-faded'>Found 29 matches</Text>
      </View>
      <Divider />
      <View direction="row" gap={5} >
        <View width="300px">
          <SelectedTooth />
          <Cart />
        </View>
        <View width="calc(100% - 320px)">
          {children}
        </View>
      </View>
    </>
  );
}
