"use client";

import { Tooth11 } from '../../teeth-diagram/components/Tooth11';
import { View } from '../../Reshaped/Reshaped';

const ImplantIcon = () => (
	<View height='32px' width='32px'>
		<Tooth11 implant artificial />
	</View>
)

export const data = [{ text: 'Implant', number: 1, icon: ImplantIcon }, { text: 'Filling', number: 2, icon: ImplantIcon }, { text: 'Caries', number: 3, icon: ImplantIcon }];
