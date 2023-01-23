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

interface TeethDiagramComponentsProps {
  children?: React.ReactNode;
  enable?: boolean;
}

export interface ITooth extends Exclude<TeethDiagramComponentsProps, ['enable']> {}

export interface IRoot extends TeethDiagramComponentsProps {}

export interface IImplant extends TeethDiagramComponentsProps {}

export interface IMissingRoot extends TeethDiagramComponentsProps {}

export interface ICrownSideView extends TeethDiagramComponentsProps {}

export interface IArtificialCrown extends TeethDiagramComponentsProps {}

export interface IProsthesis extends TeethDiagramComponentsProps {}

export interface IMissingCrownSideView extends TeethDiagramComponentsProps {}
