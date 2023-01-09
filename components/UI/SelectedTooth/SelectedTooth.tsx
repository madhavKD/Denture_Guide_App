
'use client';

import { MenuItem, Text, View } from '../../Reshaped/Reshaped';
import selectedToothData from "./data.json";
import { usePathname } from 'next/navigation';




export default function SelectedTooth() {
  const pathname = usePathname()

  return (

    <View gap={2} paddingTop={5} direction='column' divided>
      {selectedToothData.map((tooth, index) => (
        <>
          <View key={index} gap={1}>
            <MenuItem roundedCorners selected={pathname?.includes(`/selected-tooth/${tooth.url}`)} href={`/selected-tooth/${tooth.url}`}>
              <Text variant='body-medium-2'>
                {tooth.title}
              </Text>
            </MenuItem>

            <View direction="column" gap={1} paddingStart={3} paddingEnd={3} >
              {tooth.availableOptions.map((availableOption, index) => (
                <MenuItem key={index} roundedCorners selected={pathname?.includes(`/selected-tooth/${tooth.url}/${availableOption.url}`)} href={`/selected-tooth/${tooth.url}/${availableOption.url}`} >
                  <Text variant='body-medium-2' color='neutral-faded'>{availableOption.name}</Text>
                </MenuItem>
              ))}
            </View>
          </View>
        </>
      ))}
    </View>
  );
}
