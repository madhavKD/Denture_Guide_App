// @ts-nocheck
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth26), { ssr: false });
const Root26 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root26), { ssr: false });
const Root26Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root26Left), { ssr: false });
const Root26Middle = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root26Middle), { ssr: false });
const Root26Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root26Right), { ssr: false });
const CrownSideView26 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView26), { ssr: false });
const ImplantUpperJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantUpperJaw), { ssr: false });
const MissingRoot26 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot26), { ssr: false });
const MissingRoot26Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot26Left), { ssr: false });
const MissingRoot26Middle = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot26Middle), { ssr: false });
const MissingRoot26Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot26Right), { ssr: false });
const ArtificialCrown26 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown26), { ssr: false });
const Prosthesis26 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis26), { ssr: false });
const MissingCrown26 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown26), { ssr: false });

import { Container } from '../Container';

export const Tooth26 = () => {
  return (
    <Container>
      <Tooth>
        <Root26 enable={true}>
          <Root26Middle enable={true} />
          <Root26Left enable={true} />
          <Root26Right enable={true} />
        </Root26>

        <ImplantUpperJaw enable={false} />

        <MissingRoot26 enable={false}>
          <MissingRoot26Middle enable={false} />
          <MissingRoot26Left enable={false} />
          <MissingRoot26Right enable={false} />
        </MissingRoot26>

        <CrownSideView26 enable={true} />
        <ArtificialCrown26 enable={false} />
        <Prosthesis26 enable={false} />
        <MissingCrown26 enable={false} />
      </Tooth>
    </Container>
  );
};
