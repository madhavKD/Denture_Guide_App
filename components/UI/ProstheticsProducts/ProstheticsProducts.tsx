
'use client';

import { Tabs, Text, View } from '../../Reshaped/Reshaped';
import { selectedToothData, ImplantIcon } from '../__mock__/data';

export const ProstheticsProducts = () => {

  return (
    <Tabs itemWidth="equal" variant='pills-elevated'>
      <Tabs.List>
        {selectedToothData.map((tooth, index) => (
          <Tabs.Item value={`${index}`} key={index}>
            <View gap={3} direction='row' align='center'>
              <ImplantIcon />
              <Text variant='body-strong-2' color='neutral-faded'>{tooth.name}</Text>
            </View>
          </Tabs.Item>
        ))}
      </Tabs.List>

      <View gap={2} align='stretch' paddingTop={2}>
        {selectedToothData.map((data, index) => (
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
      </View>
    </Tabs>
  );
}