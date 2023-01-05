'use client';

import React, { useState } from 'react';
import { View, Text, Container } from 'reshaped';
import { TeethDiagram } from '../../teeth-diagram';
import { TreatmentCard } from '../TreatmentCard';
import { data } from '../__mock__/data';

export default function ProstheticSelectionGuide() {
  const [selectedTooth, setSelectedTooth] = useState<number[]>([]);

  const toggleToothSelection = (tooth: number) => {
    const toothIndex = selectedTooth.indexOf(tooth);

    if (toothIndex === -1) {
      setSelectedTooth([...selectedTooth, tooth]);
    } else {
      const selectedToothClone = [...selectedTooth];
      selectedToothClone.splice(toothIndex, 1);
      setSelectedTooth(selectedToothClone);
    }
  };
  return (
    <>
      <View paddingBottom={20}>
        <Text variant="body-strong-1" color="neutral-faded">
          Prosthetic selection guide
        </Text>
        <Text color="disabled" variant="caption-2">
          by Dechea
        </Text>
      </View>
      <TeethDiagram toggleToothSelection={toggleToothSelection} />
      {Boolean(selectedTooth.length) && (
        <Container width="85%">
          <View
            gap={10}
            direction="row"
            align="center"
            paddingTop={25}
            paddingBottom={20}
            justify="start"
          >
            {data?.map((item: any, index: number) => {
              return (
                <TreatmentCard
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  number={item.number}
                />
              );
            })}
          </View>
        </Container>
      )}
    </>
  );
}
