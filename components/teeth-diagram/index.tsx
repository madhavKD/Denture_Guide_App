'use client';

import { Tooth11, Tooth12, Tooth13, Tooth18, Tooth21, Tooth22, Tooth28 } from "@dechea/hes.ui.foundations.teeth.areas.tooth";
import { Root11, Root12, Root13, Root18, Root18Left, Root18Middle, Root18Right, Root21, Root22, Root28, Root28Left, Root28Middle, Root28Right } from "@dechea/hes.ui.foundations.teeth.areas.root";
import { CrownSideView11, CrownSideView12, CrownSideView13, CrownSideView18, CrownSideView21, CrownSideView22, CrownSideView28 } from "@dechea/hes.ui.foundations.teeth.areas.crown-side-view";
import { Card, View } from "../Reshaped/Reshaped";


export default function TeethDiagram() {
    return (
        <View direction={"row"} maxWidth="900px" maxHeight={"500px"}>
            {/* First quad */}
            <View.Item columns={6}>
                <View direction="row" align={"end"} gap={2}>
                    <View.Item columns={1}>
                        <Tooth18 >
                            <Root18 >
                                <Root18Middle></Root18Middle>
                                <Root18Left></Root18Left>
                                <Root18Right></Root18Right>
                            </Root18>
                            <CrownSideView18 />
                        </Tooth18>
                    </View.Item>
                    <View.Item columns={1}>
                        <Tooth13 >
                            <Root13 />
                            <CrownSideView13 />
                        </Tooth13>
                    </View.Item>
                    <View.Item columns={1}>
                        <Tooth12 >
                            <Root12 />
                            <CrownSideView12 />
                        </Tooth12>
                    </View.Item>
                    <View.Item columns={1}>
                        <Tooth11 >
                            <Root11 />
                            <CrownSideView11 />
                        </Tooth11>
                    </View.Item>
                </View>
            </View.Item>
            {/* Second Quad */}
            <View.Item columns={6}>
                <View height="100px" width="300px" direction="row" align={"end"} gap={2}>
                    <View.Item columns={1}>
                        <Tooth21 >
                            <Root21 />
                            <CrownSideView21 />
                        </Tooth21>
                    </View.Item>
                    <Tooth22 >
                        <Root22 />
                        <CrownSideView22 />
                    </Tooth22>
                    <Tooth28 >
                        <Root28 >
                            <Root28Middle></Root28Middle>
                            <Root28Left></Root28Left>
                            <Root28Right></Root28Right>
                        </Root28>
                        <CrownSideView28 />
                    </Tooth28>
                </View>
            </View.Item>
        </View>

    )
}