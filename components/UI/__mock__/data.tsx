'use client';

import { Tooth11 } from '../../teeth-diagram/components/Tooth11';
import { View } from '../../Reshaped/Reshaped';

const ImplantIcon = () => (
  <View height="32px" width="32px" justify="center" align="center">
    <Tooth11 implant artificial root={false} />
  </View>
);

export const data = [
  { text: 'Implant Crown', number: 1, icon: ImplantIcon },
  { text: 'Implant Bridge Anchor', number: 2, icon: ImplantIcon },
  { text: 'Bridge-Link', number: 3, icon: ImplantIcon },
  { text: 'Implant Prosthesis Anchor', number: 4, icon: ImplantIcon },
  { text: 'Prosthesis Link', number: 5, icon: ImplantIcon },
];
