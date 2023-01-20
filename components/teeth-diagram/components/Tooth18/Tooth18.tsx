
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth18), { ssr: false });
const Root18 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root18), { ssr: false });
const Root18Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root18Left), { ssr: false });
const Root18Middle = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root18Middle), { ssr: false });
const Root18Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root18Right), { ssr: false });
const CrownSideView18 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView18), { ssr: false });
const ImplantUpperJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantUpperJaw), { ssr: false });
const MissingRoot18 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot18), { ssr: false });
const MissingRoot18Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot18Left), { ssr: false });
const MissingRoot18Middle = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot18Middle), { ssr: false });
const MissingRoot18Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot18Right), { ssr: false });
const ArtificialCrown18 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown18), { ssr: false });
const Prosthesis18 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis18), { ssr: false });
const MissingCrown18 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown18), { ssr: false });

import { Container } from '../Container';
// import {
//   AnchorLeft,
//   AnchorRight,
// } from '@dechea/hes.ui.foundations.teeth.visualizations.anchor';
// import { ApicalOstitisUpperJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.apical-ostitis';
// import { ArtificialCrown18 } from '@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown';
// import { Calculus18 } from '@dechea/hes.ui.foundations.teeth.visualizations.calculus';
// import { ImplantUpperJaw } from '@dechea/hes.ui.foundations.teeth.visualizations.implant';
// import { MissingCrown18 } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-crown';
// import {
//   MissingRoot18,
//   MissingRoot18Left,
//   MissingRoot18Middle,
//   MissingRoot18Right,
// } from '@dechea/hes.ui.foundations.teeth.visualizations.missing-root';
// import { Prosthesis18 } from '@dechea/hes.ui.foundations.teeth.visualizations.prosthesis';
// import {
//   RootFilling18Left,
//   RootFilling18Middle,
//   RootFilling18Right,
// } from '@dechea/hes.ui.foundations.teeth.visualizations.root-filling';

export const Tooth18 = () => {
  return (
    <Container>
      <Tooth>
        <Root18 enable={true}>
          <Root18Middle enable={true} />
          <Root18Left enable={true} />
          <Root18Right enable={true} />
        </Root18>

        <ImplantUpperJaw enable={false} />

        <MissingRoot18 enable={false}>
          <MissingRoot18Middle enable={false} />
          <MissingRoot18Left enable={false} />
          <MissingRoot18Right enable={false} />
        </MissingRoot18>

        <CrownSideView18 enable={true} />
        <ArtificialCrown18 enable={false} />
        <Prosthesis18 enable={false} />
        <MissingCrown18 enable={false} />

        {/* Implant visualization */}
        {/* <ImplantUpperJaw />
        <CrownSideView18 /> */}

        {/* Apical Ostitis visualization */}
        {/* <Root18>
          <Root18Middle>
            <ApicalOstitisUpperJaw />
          </Root18Middle>
          <Root18Left>
            <ApicalOstitisUpperJaw />
          </Root18Left>
          <Root18Right>
            <ApicalOstitisUpperJaw />
          </Root18Right>
        </Root18> 
        <CrownSideView18 />
        */}

        {/* Artificial Crown visualization */}
        {/* 
         <Root18>
          <Root18Middle />
          <Root18Left />
          <Root18Right />
        </Root18>
        <ArtificialCrown18 /> */}

        {/* Anchor visualization */}
        {/* 
         <Root18>
          <Root18Middle />
          <Root18Left />
          <Root18Right />
        </Root18>
        <ArtificialCrown18>
          <AnchorLeft />
          <AnchorRight />
        </ArtificialCrown18> */}

        {/* Calculus visualization */}
        {/*
         <Root18>
          <Root18Middle />
          <Root18Left />
          <Root18Right />
        </Root18>
        <CrownSideView18>
          <Calculus18 />
        </CrownSideView18> */}

        {/* Missing Crown visualization */}
        {/* <Root18>
          <Root18Middle />
          <Root18Left />
          <Root18Right />
        </Root18>
        <MissingCrown18 /> */}

        {/* Missing root visualization */}
        {/* <MissingRoot18>
          <MissingRoot18Middle />
          <MissingRoot18Left />
          <MissingRoot18Right />
        </MissingRoot18>
        <CrownSideView18 /> */}

        {/* Prosthesis visualization */}
        {/* <Root18>
          <Root18Middle />
          <Root18Left />
          <Root18Right />
        </Root18>
        <Prosthesis18 /> */}

        {/* Root filling visualization */}
        {/* <Root18>
          <Root18Middle>
            <RootFilling18Middle />
          </Root18Middle>
          <Root18Left>
            <RootFilling18Left />
          </Root18Left>
          <Root18Right>
            <RootFilling18Right />
          </Root18Right>
        </Root18>
        <CrownSideView18 /> */}
      </Tooth>
    </Container>
  );
};
