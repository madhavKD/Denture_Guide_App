// @ts-nocheck
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth28), { ssr: false });
const Root28 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root28), { ssr: false });
const Root28Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root28Left), { ssr: false });
const Root28Middle = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root28Middle), { ssr: false });
const Root28Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root28Right), { ssr: false });
const CrownSideView28 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView28), { ssr: false });
const ImplantUpperJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantUpperJaw), { ssr: false });
const MissingRoot28 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot28), { ssr: false });
const MissingRoot28Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot28Left), { ssr: false });
const MissingRoot28Middle = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot28Middle), { ssr: false });
const MissingRoot28Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot28Right), { ssr: false });
const ArtificialCrown28 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown28), { ssr: false });
const Prosthesis28 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis28), { ssr: false });
const MissingCrown28 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown28), { ssr: false });

import { Container } from '../Container';

export const Tooth28 = () => {
  return (
    <Container>
      <Tooth>
        <Root28 enable={true}>
          <Root28Middle enable={true} />
          <Root28Left enable={true} />
          <Root28Right enable={true} />
        </Root28>

        <ImplantUpperJaw enable={false} />

        <MissingRoot28 enable={false}>
          <MissingRoot28Middle enable={false} />
          <MissingRoot28Left enable={false} />
          <MissingRoot28Right enable={false} />
        </MissingRoot28>

        <CrownSideView28 enable={true} />
        <ArtificialCrown28 enable={false} />
        <Prosthesis28 enable={false} />
        <MissingCrown28 enable={false} />
      </Tooth>
    </Container>
  );
};
