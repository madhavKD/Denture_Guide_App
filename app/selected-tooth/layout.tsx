
import dynamic from 'next/dynamic';
import { View, Text, Divider } from '../../components/Reshaped/Reshaped'

const SelectedTooth = dynamic(() => import('../../components/UI/SelectedTooth').then((comp) => comp.SelectedTooth))
const Cart = dynamic(() => import('../../components/UI/Cart').then((comp) => comp.Cart))
const SelectTeeth = dynamic(() => import('../../components/UI/ProstheticSelectionGuide/components/SelectTeeth').then((comp) => comp.SelectTeeth))

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
