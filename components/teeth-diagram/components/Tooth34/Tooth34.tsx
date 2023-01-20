
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth34), { ssr: false });
const Root34 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root34), { ssr: false });
const CrownSideView34 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView34), { ssr: false });
const ImplantLowerJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantLowerJaw), { ssr: false });
const MissingRoot34 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot34), { ssr: false });
const ArtificialCrown34 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown34), { ssr: false });
const Prosthesis34 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis34), { ssr: false });
const MissingCrown34 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown34), { ssr: false });

import { Container } from '../Container';

export const Tooth34 = () => {
  return (
    <Container>
      <Tooth>
        <Root34 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot34 enable={false} />
        <CrownSideView34 enable={true} />
        <ArtificialCrown34 enable={false} />
        <Prosthesis34 enable={false} />
        <MissingCrown34 enable={false} />
      </Tooth>
    </Container>
  );
};
