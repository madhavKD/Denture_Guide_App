/** @jsxImportSource @emotion/react */
"use client";

import SelectProduct from '../components/SelectProduct';
import FetchUsers from '../components/FetchUsers';
import { View } from '../components/Reshaped/Reshaped';
import { TeethDiagram } from '../components/teeth-diagram';
import { SideNavigationBar } from '../components/UI/SideNavigationBar';

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
        </View.Item>
      </View>
    </>
  );
}
