'use client';

import React from 'react';
import { View } from 'reshaped';
import { teethMapping } from '../../../../teeth-diagram/teethMapping';

const selectedTeethData = ['11', '12'];

const Tooth = ({ tooth, ...props }: any) => {
  const ToothValue: React.FC = teethMapping[tooth as keyof typeof teethMapping];

  return (
    <View direction="column" textAlign='center' >
      <View width="50px">
        <ToothValue {...props} />
      </View>
      <View paddingTop={2}>
        {tooth}
      </View>
    </View>
  );
};

export default function SelectTeeth() {
  return (
    <View
      height='200px'
      maxHeight='200px'
      width="100%"
      direction="row"
      justify="center"
      align="end"
      gap={5}
      wrap={false}
    >
      {selectedTeethData.map((tooth: number | string) => (
        <Tooth tooth={tooth} key={tooth} />
      ))}
    </View>
  );
}
