// @ts-nocheck
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth16), { ssr: false });
const Root16 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root16), { ssr: false });
const Root16Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root16Left), { ssr: false });
const Root16Middle = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root16Middle), { ssr: false });
const Root16Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root16Right), { ssr: false });
const CrownSideView16 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView16), { ssr: false });
const ImplantUpperJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantUpperJaw), { ssr: false });
const MissingRoot16 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot16), { ssr: false });
const MissingRoot16Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot16Left), { ssr: false });
const MissingRoot16Middle = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot16Middle), { ssr: false });
const MissingRoot16Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot16Right), { ssr: false });
const ArtificialCrown16 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown16), { ssr: false });
const Prosthesis16 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis16), { ssr: false });
const MissingCrown16 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown16), { ssr: false });

import { Container } from '../Container';

export const Tooth16 = () => {
  return (
    <Container>
      <Tooth>
        <Root16 enable={true}>
          <Root16Middle enable={true} />
          <Root16Left enable={true} />
          <Root16Right enable={true} />
        </Root16>

        <ImplantUpperJaw enable={false} />

        <MissingRoot16 enable={false}>
          <MissingRoot16Middle enable={false} />
          <MissingRoot16Left enable={false} />
          <MissingRoot16Right enable={false} />
        </MissingRoot16>

        <CrownSideView16 enable={true} />
        <ArtificialCrown16 enable={false} />
        <Prosthesis16 enable={false} />
        <MissingCrown16 enable={false} />
      </Tooth>
    </Container>
  );
};
