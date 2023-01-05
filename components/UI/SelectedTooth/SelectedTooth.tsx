
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Tabs, Text, View } from '../../Reshaped/Reshaped';
import { Treatments } from './components/Treatments';
import selectedToothData from "./data.json";
import { mapToothVisualization } from './mapToothVisualization';

export default function SelectedTooth() {
  const [activeTab, setActiveTab] = useState<string>('0');
  const [itemsActiveTab, setItemsActiveTab] = useState<string>('0');


  const onChangeTab = ({ value }: { value: string }) => {
    setActiveTab(value);
  }


  const onChangeItemTab = ({ value }: { value: string }) => {
    setItemsActiveTab(value);
  }


  return (
    <Tabs value={activeTab} onChange={onChangeTab} itemWidth="equal" variant='pills-elevated'>
      <Tabs.List>
        {selectedToothData.map((tooth, index) => {
          const Icon = mapToothVisualization[tooth.icon as keyof typeof mapToothVisualization]
          return (
            <Tabs.Item value={`${index}`} key={index}>
              <View gap={3} direction='row' align='center'>
                {
                  tooth.type === 'treatment' ? (
                    <View height='24px' width="24px">
                      <Icon />
                    </View>
                  )
                    : (
                      <Image src={`/${tooth.icon}`} height={24} width={24} alt={tooth.title} />
                    )
                }
                <Text variant='body-strong-2' color='neutral-faded'>{tooth.title}</Text>
              </View>
            </Tabs.Item>
          )
        })}
      </Tabs.List>



      <View gap={2} align='stretch' paddingTop={2}>
        {selectedToothData.map((tooth, index) => (
          <Tabs.Panel value={`${index}`} key={index}>
            <Tabs value={itemsActiveTab} onChange={onChangeItemTab} itemWidth="equal" variant='pills-elevated' >
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
                      tooth.type === 'treatment' ? (
                        <Treatments question={availableOption.question} title={availableOption.title} options={availableOption.options} />
                      ) : ('Prosthetics UI')
                    }
                  </Tabs.Panel>
                ))}
              </View>
            </Tabs>
          </Tabs.Panel>))}
      </View>
    </Tabs>
  );
}