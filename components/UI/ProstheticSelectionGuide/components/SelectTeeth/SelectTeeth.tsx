'use client';

import React from 'react';
import { View } from 'reshaped';
import { teethMapping } from '../../../../teeth-diagram/teethMapping';

const selectedTeethData = ['11', '12'];

const Tooth = ({ tooth, ...props }: any) => {
  const ToothValue: React.FC = teethMapping[tooth as keyof typeof teethMapping];

  return (
    <View align="center">
      <View height="80px" width="23px">
        <ToothValue {...props} />
      </View>
      <View height="12px" paddingTop={2}>
        {tooth}
      </View>
    </View>
  );
};

export default function SelectTeeth() {
  return (
    <View
      direction="row"
      justify="center"
      align="end"
      gap={5}
    >
      {selectedTeethData.map((tooth: number | string) => (
        <Tooth tooth={tooth} key={tooth} />
      ))}
    </View>
  );
}
