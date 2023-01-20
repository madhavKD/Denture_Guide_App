'use client';

import React from 'react';
import {
  upperJawRightTeeth,
  upperJawLeftTeeth,
  lowerJawLeftTeeth,
  lowerJawRightTeeth,
} from '@dechea/hes.constants.tooth-position';
import { View } from 'reshaped';
import { Teeth } from './components/Teeth';
import { TeethDiagramProps } from './types/types';
import './styles.css';

export const TeethDiagram = ({ toggleToothSelection }: TeethDiagramProps) => {
  return (
    <View direction="column" gap={5} align="center" divided className="teeth-diagram-container" width="100%">
      {/* upper jaw */}
      <View.Item columns={12}>
        <View direction="row" gap={8} wrap={false}>
          {/* Upper left */}
          <View.Item columns={6}>
            <View direction="row" gap={8} align="end" justify="end">
              <Teeth
                jawType="upper"
                teeth={upperJawLeftTeeth}
                toggleToothSelection={toggleToothSelection}
              />
            </View>
          </View.Item>

          {/* Upper right */}
          <View.Item columns={6}>
            <View direction="row" gap={8} align="end" justify="start">
              <Teeth
                jawType="upper"
                teeth={upperJawRightTeeth}
                toggleToothSelection={toggleToothSelection}
              />
            </View>
          </View.Item>
        </View>
      </View.Item>

      {/* lower jaw */}
      <View.Item columns={12}>
        <View direction="row" gap={8} wrap={false}>
          {/* Lower left */}
          <View.Item columns={6}>
            <View direction="row" gap={8} align="start" justify="end">
              <Teeth
                jawType="lower"
                teeth={lowerJawLeftTeeth}
                toggleToothSelection={toggleToothSelection}
              />
            </View>
          </View.Item>

          {/* Lower right */}
          <View.Item columns={6}>
            <View direction="row" gap={8} align="start" justify="start">
              <Teeth
                jawType="lower"
                teeth={lowerJawRightTeeth}
                toggleToothSelection={toggleToothSelection}
              />
            </View>
          </View.Item>
        </View>
      </View.Item>
    </View>
  );
};
