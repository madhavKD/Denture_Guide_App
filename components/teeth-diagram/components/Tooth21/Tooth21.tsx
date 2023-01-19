// @ts-nocheck
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth21), { ssr: false });
const Root21 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root21), { ssr: false });
const CrownSideView21 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView21), { ssr: false });
const ImplantUpperJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantUpperJaw), { ssr: false });
const MissingRoot21 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot21), { ssr: false });
const ArtificialCrown21 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown21), { ssr: false });
const Prosthesis21 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis21), { ssr: false });
const MissingCrown21 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown21), { ssr: false });



import { Container } from '../Container';

export const Tooth21 = () => {
  return (
    <Container>
      <Tooth>
        <Root21 enable={true} />
        <ImplantUpperJaw enable={false} />
        <MissingRoot21 enable={false} />
        <CrownSideView21 enable={true} />
        <ArtificialCrown21 enable={false} />
        <Prosthesis21 enable={false} />
        <MissingCrown21 enable={false} />
      </Tooth>
    </Container>
  );
};
