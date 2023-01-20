'use client';

import React, { useState } from 'react';
import { View } from 'reshaped';
import { TeethDiagram } from '../../teeth-diagram';
import { TreatmentCard } from '../TreatmentCard';
import { data } from '../__mock__/data';
import { SelectProstheticsButton } from './components/SelectProtheticsButton';
import './styles.css'

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
      <View direction={'row'} justify={'center'} className="responsive-container">
        <View width="100%" direction={'column'} align="center">
          <View align="center" width="100%">
            <TeethDiagram toggleToothSelection={toggleToothSelection} />
          </View>
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
        </View>
      </View>
    </>
  );
}
