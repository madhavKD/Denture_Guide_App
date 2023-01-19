// @ts-nocheck
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth13), { ssr: false });
const Root13 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root13), { ssr: false });
const CrownSideView13 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView13), { ssr: false });
const ImplantUpperJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantUpperJaw), { ssr: false });
const MissingRoot13 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot13), { ssr: false });
const ArtificialCrown13 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown13), { ssr: false });
const Prosthesis13 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis13), { ssr: false });
const MissingCrown13 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown13), { ssr: false });



import { Container } from '../Container';

export const Tooth13 = () => {
  return (
    <Container>
      <Tooth>
        <Root13 enable={true} />
        <ImplantUpperJaw enable={false} />
        <MissingRoot13 enable={false} />
        <CrownSideView13 enable={true} />
        <ArtificialCrown13 enable={false} />
        <Prosthesis13 enable={false} />
        <MissingCrown13 enable={false} />
      </Tooth>
    </Container>
  );
};
