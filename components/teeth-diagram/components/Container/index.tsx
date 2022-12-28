'use client';

import React from 'react';
import { View } from 'reshaped';
import { ToothContainerProps } from '../../types/types';

export const Container = ({ children }: ToothContainerProps): JSX.Element => {
  return (
    <View width={'100%'} height={'100%'}>
      {children}
    </View>
  );
};
