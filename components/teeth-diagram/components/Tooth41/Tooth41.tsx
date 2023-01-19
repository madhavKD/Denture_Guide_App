// @ts-nocheck
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth41), { ssr: false });
const Root41 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root41), { ssr: false });
const CrownSideView41 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView41), { ssr: false });
const ImplantLowerJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantLowerJaw), { ssr: false });
const MissingRoot41 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot41), { ssr: false });
const ArtificialCrown41 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown41), { ssr: false });
const Prosthesis41 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis41), { ssr: false });
const MissingCrown41 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown41), { ssr: false });

import { Container } from '../Container';

export const Tooth41 = () => {
  return (
    <Container>
      <Tooth>
        <Root41 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot41 enable={false} />
        <CrownSideView41 enable={true} />
        <ArtificialCrown41 enable={false} />
        <Prosthesis41 enable={false} />
        <MissingCrown41 enable={false} />
      </Tooth>
    </Container>
  );
};
