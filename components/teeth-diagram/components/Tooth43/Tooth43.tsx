
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth43), { ssr: false });
const Root43 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root43), { ssr: false });
const CrownSideView43 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView43), { ssr: false });
const ImplantLowerJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantLowerJaw), { ssr: false });
const MissingRoot43 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot43), { ssr: false });
const ArtificialCrown43 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown43), { ssr: false });
const Prosthesis43 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis43), { ssr: false });
const MissingCrown43 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown43), { ssr: false });

import { Container } from '../Container';

export const Tooth43 = () => {
  return (
    <Container>
      <Tooth>
        <Root43 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot43 enable={false} />
        <CrownSideView43 enable={true} />
        <ArtificialCrown43 enable={false} />
        <Prosthesis43 enable={false} />
        <MissingCrown43 enable={false} />
      </Tooth>
    </Container>
  );
};
