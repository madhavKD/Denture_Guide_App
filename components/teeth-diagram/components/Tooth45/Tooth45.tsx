// @ts-nocheck
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth45), { ssr: false });
const Root45 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root45), { ssr: false });
const CrownSideView45 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView45), { ssr: false });
const ImplantLowerJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantLowerJaw), { ssr: false });
const MissingRoot45 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot45), { ssr: false });
const ArtificialCrown45 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown45), { ssr: false });
const Prosthesis45 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis45), { ssr: false });
const MissingCrown45 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown45), { ssr: false });

import { Container } from '../Container';

export const Tooth45 = () => {
  return (
    <Container>
      <Tooth>
        <Root45 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot45 enable={false} />
        <CrownSideView45 enable={true} />
        <ArtificialCrown45 enable={false} />
        <Prosthesis45 enable={false} />
        <MissingCrown45 enable={false} />
      </Tooth>
    </Container>
  );
};
