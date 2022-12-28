import React from 'react';

export type ToothContainerProps = {
  children: React.ReactNode;
};

export interface TeethProps {
  jawType: 'upper' | 'lower';
  teeth: string[] | number[];
}

export type ToothProps = {
  tooth: string | number;
};
