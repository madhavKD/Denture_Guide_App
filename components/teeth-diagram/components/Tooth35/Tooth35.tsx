// @ts-nocheck
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth35), { ssr: false });
const Root35 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root35), { ssr: false });
const CrownSideView35 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView35), { ssr: false });
const ImplantLowerJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantLowerJaw), { ssr: false });
const MissingRoot35 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot35), { ssr: false });
const ArtificialCrown35 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown35), { ssr: false });
const Prosthesis35 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis35), { ssr: false });
const MissingCrown35 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown35), { ssr: false });

import { Container } from '../Container';

export const Tooth35 = () => {
  return (
    <Container>
      <Tooth>
        <Root35 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot35 enable={false} />
        <CrownSideView35 enable={true} />
        <ArtificialCrown35 enable={false} />
        <Prosthesis35 enable={false} />
        <MissingCrown35 enable={false} />
      </Tooth>
    </Container>
  );
};
