import React from 'react';

export type ToothContainerProps = {
  children: React.ReactNode;
};

export interface TeethProps {
  jawType: 'upper' | 'lower';
  teeth: string[] | number[];
  toggleToothSelection: Function;
}

export type ToothProps = {
  tooth: string | number;
};

export type TeethDiagramProps = {
  toggleToothSelection: Function;
};
