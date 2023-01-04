/** @jsxImportSource @emotion/react */
"use client";

import SelectProduct from '../components/SelectProduct';
import FetchUsers from '../components/FetchUsers';
import { View, Text } from '../components/Reshaped/Reshaped';
import { TeethDiagram } from '../components/teeth-diagram';
import { SideNavigationBar } from '../components/UI/SideNavigationBar';
import { TreatmentCard } from '../components/UI/TreatmentCard';
import { data } from '../components/UI/__mock__/data';

export default function Home() {
  return (
    <>
      {/* <FetchUsers />
      <SelectProduct /> */}
      <View direction='row' height='100%' width='100%' >
        <View width='64px'>
          <SideNavigationBar />
        </View>
        <View width="calc(100% - 64px)" padding={4}>
          <View paddingBottom={20}>
            <Text variant="body-strong-1" color="neutral-faded">Prosthetic selection guide</Text>
            <Text color="disabled" variant="caption-2">by Dechea</Text>
          </View>
          <TeethDiagram />
          <View gap={10} direction='row' align='center' padding={5} justify='center'>
            {data?.map((item: any, index: number) => {
              return (
                <TreatmentCard key={index} icon={item.icon} text={item.text} number={item.number} />
              )
            })}
          </View>
        </View>
      </View>
    </>
  );
}
