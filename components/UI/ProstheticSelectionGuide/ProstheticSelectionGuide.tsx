'use client';

import React, { useState } from 'react';
import { View, Text, Container } from 'reshaped';
import { TeethDiagram } from '../../teeth-diagram';
import { TreatmentCard } from '../TreatmentCard';
import { data } from '../__mock__/data';
import { SelectProstheticsButton } from './components/SelectProtheticsButton';

export default function ProstheticSelectionGuide() {
  const [selectedTooth, setSelectedTooth] = useState<number[]>([]);
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([]);

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

  const handleSelectTreatment = (treatment: string) => {
    const treatmentIndex = selectedTreatments.indexOf(treatment);

    if (treatmentIndex === -1) {
      setSelectedTreatments([...selectedTreatments, treatment]);
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
      <Container width="85%">
        <View
          gap={10}
          direction="row"
          align="center"
          paddingTop={25}
          paddingBottom={20}
          justify="start"
        >
          {Boolean(selectedTooth.length) &&
            !Boolean(selectedTreatments.length) &&
            data?.map((item: any, index: number) => {
              return (
                <TreatmentCard
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  number={item.number}
                  onSelectTreatment={handleSelectTreatment}
                />
              );
            })}

          {Boolean(selectedTreatments.length) && <SelectProstheticsButton />}
        </View>
       
      </Container>
    </>
  );
}
