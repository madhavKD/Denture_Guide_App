
'use client';

import { useState } from 'react';
import { Tabs, Text, View } from '../../Reshaped/Reshaped';
import { Treatments } from './components/Treatments';
import { Products } from './components/Products';
import selectedToothData from "./data.json";
import { useRouter } from 'next/navigation';

export default function SelectedTooth({ type }: { type: string }) {
  const [itemsActiveTab, setItemsActiveTab] = useState<string>('0');

  const onChangeItemTab = ({ value }: { value: string }) => {
    setItemsActiveTab(value);
  }


  return (
    <View gap={2} align='stretch' paddingTop={2}>
      {selectedToothData.map((tooth, index) => (
        tooth.type === type && (
          <Tabs value={itemsActiveTab} onChange={onChangeItemTab} itemWidth="equal" variant='pills-elevated' key={index}>
            <Tabs.List>
              {tooth.availableOptions.map((availableOption, index) => (
                <Tabs.Item value={`${index}`} key={index}>
                  <View gap={3} direction='row'>
                    <Text variant='body-medium-2' color='neutral-faded'>{availableOption.name}</Text>
                  </View>
                </Tabs.Item>
              ))}
            </Tabs.List>
            <View paddingTop={2}>
              {tooth.availableOptions.map((availableOption, index) => (
                <Tabs.Panel value={`${index}`} key={index}>
                  {
                    tooth.type === 'treatment' && 'question' in availableOption && (
                      <Treatments question={availableOption.question} title={availableOption.title} options={availableOption.options} />
                    )
                  }
                  {
                    tooth.type === 'product' && (
                      <Products data={availableOption} />
                    )}
                </Tabs.Panel>
              ))}
            </View>
          </Tabs>)
      ))}
    </View>
  );
}