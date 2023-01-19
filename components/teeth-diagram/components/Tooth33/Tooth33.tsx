// @ts-nocheck
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth33), { ssr: false });
const Root33 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root33), { ssr: false });
const CrownSideView33 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView33), { ssr: false });
const ImplantLowerJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantLowerJaw), { ssr: false });
const MissingRoot33 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot33), { ssr: false });
const ArtificialCrown33 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown33), { ssr: false });
const Prosthesis33 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis33), { ssr: false });
const MissingCrown33 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown33), { ssr: false });

import { Container } from '../Container';

export const Tooth33 = () => {
  return (
    <Container>
      <Tooth>
        <Root33 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot33 enable={false} />
        <CrownSideView33 enable={true} />
        <ArtificialCrown33 enable={false} />
        <Prosthesis33 enable={false} />
        <MissingCrown33 enable={false} />
      </Tooth>
    </Container>
  );
};
