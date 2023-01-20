
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth32), { ssr: false });
const Root32 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root32), { ssr: false });
const CrownSideView32 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView32), { ssr: false });
const ImplantLowerJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantLowerJaw), { ssr: false });
const MissingRoot32 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot32), { ssr: false });
const ArtificialCrown32 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown32), { ssr: false });
const Prosthesis32 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis32), { ssr: false });
const MissingCrown32 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown32), { ssr: false });

import { Container } from '../Container';

export const Tooth32 = () => {
  return (
    <Container>
      <Tooth>
        <Root32 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot32 enable={false} />
        <CrownSideView32 enable={true} />
        <ArtificialCrown32 enable={false} />
        <Prosthesis32 enable={false} />
        <MissingCrown32 enable={false} />
      </Tooth>
    </Container>
  );
};
