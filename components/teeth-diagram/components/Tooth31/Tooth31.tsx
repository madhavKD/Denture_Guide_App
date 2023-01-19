// @ts-nocheck
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth31), { ssr: false });
const Root31 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root31), { ssr: false });
const CrownSideView31 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView31), { ssr: false });
const ImplantLowerJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantLowerJaw), { ssr: false });
const MissingRoot31 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot31), { ssr: false });
const ArtificialCrown31 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown31), { ssr: false });
const Prosthesis31 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis31), { ssr: false });
const MissingCrown31 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown31), { ssr: false });

import { Container } from '../Container';

export const Tooth31 = () => {
  return (
    <Container>
      <Tooth>
        <Root31 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot31 enable={false} />
        <CrownSideView31 enable={true} />
        <ArtificialCrown31 enable={false} />
        <Prosthesis31 enable={false} />
        <MissingCrown31 enable={false} />
      </Tooth>
    </Container>
  );
};
