// @ts-nocheck
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth12), { ssr: false });
const Root12 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root12), { ssr: false });
const CrownSideView12 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView12), { ssr: false });
const ImplantUpperJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantUpperJaw), { ssr: false });
const MissingRoot12 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot12), { ssr: false });
const ArtificialCrown12 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown12), { ssr: false });
const Prosthesis12 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis12), { ssr: false });
const MissingCrown12 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown12), { ssr: false });


import { Container } from '../Container';

export const Tooth12 = () => {
  return (
    <Container>
      <Tooth>
        <Root12 enable={true} />
        <ImplantUpperJaw enable={false} />
        <MissingRoot12 enable={false} />
        <CrownSideView12 enable={true} />
        <ArtificialCrown12 enable={false} />
        <Prosthesis12 enable={false} />
        <MissingCrown12 enable={false} />
      </Tooth>
    </Container>
  );
};
