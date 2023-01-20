'use client';

import dynamic from 'next/dynamic';
import { Container } from '../Container';

const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth11), { ssr: false });
const Root11 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root11), { ssr: false });
const CrownSideView11 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView11), { ssr: false });
const ImplantUpperJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantUpperJaw), { ssr: false });
const MissingRoot11 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot11), { ssr: false });
const ArtificialCrown11 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown11), { ssr: false });
const Prosthesis11 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis11), { ssr: false });
const MissingCrown11 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown11), { ssr: false });



export const Tooth11 = ({ implant = false, artificial = false, root = true }: { implant: boolean, artificial: boolean, root: boolean }) => {

  return (
    <Container>
      <Tooth>
        <Root11 enable={root} />
        <ImplantUpperJaw enable={implant} />
        <MissingRoot11 enable={false} />
        <CrownSideView11 enable={true} />
        <ArtificialCrown11 enable={artificial} />
        <Prosthesis11 enable={false} />
        <MissingCrown11 enable={false} />
      </Tooth>
    </Container>
  );
};
