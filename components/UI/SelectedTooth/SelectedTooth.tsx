
'use client';

import Image from 'next/image';
import { Tabs, Text, View } from '../../Reshaped/Reshaped';
import selectedToothData from "./data.json";
import { mapToothVisualization } from './mapToothVisualization';

export default function SelectedTooth() {

  return (
    <Tabs itemWidth="equal" variant='pills-elevated'>
      <Tabs.List>
        {selectedToothData.map((tooth, index) => {
          const Icon = mapToothVisualization[tooth.icon as keyof typeof mapToothVisualization]
          return (
            <Tabs.Item value={`${index}`} key={index}>
              <View gap={3} direction='row' align='center'>
                {
                  tooth.type === 'treatment' ?

                    <View height='24px' width="24px">
                      <Icon />
                    </View>
                    : <Image src={`/${tooth.icon}`} height={24} width={24} alt={tooth.title} />
                }
                <Text variant='body-strong-2' color='neutral-faded'>{tooth.title}</Text>
              </View>
            </Tabs.Item>
          )
        })}
      </Tabs.List>

      {/* <View gap={2} align='stretch' paddingTop={2}>
        {data.map((data, index) => (
          <Tabs.Panel value={`${index}`} key={index}>
            <Tabs itemWidth="equal" variant='pills-elevated' >
              <Tabs.List>
                {data.attr.map((item, index) => (
                  <Tabs.Item value={`${index}`} key={index}>
                    <View gap={3} direction='row'>
                      <Text variant='body-medium-2' color='neutral-faded'>{item}</Text>
                    </View>
                  </Tabs.Item>
                ))}
              </Tabs.List>

              <View paddingTop={2}>
                {data.attr.map((item, index) => (
                  <Tabs.Panel value={`${index}`} key={index}>
                    {item}
                  </Tabs.Panel>
                ))}
              </View>
            </Tabs>
          </Tabs.Panel>))}
      </View> */}
    </Tabs>
  );
}