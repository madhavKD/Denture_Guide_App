/** @jsxImportSource @emotion/react */
"use client";

import SelectProduct from '../components/SelectProduct';
import FetchUsers from '../components/FetchUsers';
import { View } from '../components/Reshaped/Reshaped';
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
        <View.Item columns={1}>
          <SideNavigationBar />
        </View.Item>
        <View.Item columns={11}>
          <TeethDiagram />
          <View gap={10} direction='row' align='center' padding={5} justify='center'>
            {data?.map((item: any) => {
              return (
                <TreatmentCard icon={item.icon} text={item.text} number={item.number} />
              )
            })}
          </View>
        </View.Item>
      </View>
    </>
  );
}
