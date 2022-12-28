'use client';

import React from 'react';
import { View } from 'reshaped';
import { teethMapping } from '../../teethMapping';
import { TeethProps, ToothProps } from '../../types/types';

const Tooth = ({ tooth, ...props }: ToothProps) => {
  const Tooth: React.FC = teethMapping[tooth as keyof typeof teethMapping];

  return (
    <View.Item>
      <Tooth {...props} />
    </View.Item>
  );
};

const ToothNumber = ({ tooth }: ToothProps) => {
  return <View.Item>{tooth}</View.Item>;
};

export const Teeth = ({
  jawType,
  teeth,
  ...props
}: TeethProps): JSX.Element => {
  return (
    <>
      {teeth.map((tooth: number | string) => (
        <View.Item key={tooth} columns={1} grow={true}>
          <View direction="column" gap={2} textAlign="center">
            {jawType === 'upper' ? (
              <>
                <Tooth tooth={tooth} {...props} />
                <ToothNumber tooth={tooth} />
              </>
            ) : (
              <>
                <ToothNumber tooth={tooth} />
                <Tooth tooth={tooth} {...props} />
              </>
            )}
          </View>
        </View.Item>
      ))}
    </>
  );
};
