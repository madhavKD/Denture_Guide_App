/** @jsxImportSource @emotion/react */
"use client";

import SelectProduct from '../components/SelectProduct';
import FetchUsers from '../components/FetchUsers';
import { View, Container } from '../components/Reshaped/Reshaped';
import { TeethDiagram } from '../components/teeth-diagram';
import { HowItWorks } from '../components/UI/HowItWorks';

export default function Home() {
  return (
    <View>
      {/* <FetchUsers />
      <SelectProduct /> */}
      <View attributes={{ style: { marginTop: '32px', marginBottom: '70px' } }} >
        <Container width="100%" padding={5} >
          <TeethDiagram />
        </Container>
      </View>
      <HowItWorks />
    </View>
  );
}
