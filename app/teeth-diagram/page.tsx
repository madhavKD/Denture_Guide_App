'use-client';

import dynamic from 'next/dynamic';
import { View, Text } from '../../components/Reshaped/Reshaped'

const ProstheticSelectionGuide = dynamic(() => import('../../components/UI/ProstheticSelectionGuide').then((comp) => comp.ProstheticSelectionGuide))

export default function TeethDiagram() {
  return (
    <>
      <View paddingBottom={20}>
        <Text variant="body-strong-1" color="neutral-faded">
          Prosthetic selection guide
        </Text>
        <Text color="disabled" variant="caption-2">
          by Dechea
        </Text>
      </View>
      <ProstheticSelectionGuide />
    </>
  );
}
