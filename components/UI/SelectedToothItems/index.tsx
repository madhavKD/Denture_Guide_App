
'use client';

import { View } from '../../Reshaped/Reshaped';
import { Treatments } from './components/Treatments';
import { Products } from './components/Products';
import selectedToothData from "../SelectedTooth/data.json";
import { useRouter } from 'next/navigation';

export function SelectedToothItems({ params }: { params: any }) {
  const router = useRouter()
  const section = params.section;
  const item = params.item;

   const handleSelectItem = (questionIndex: number, optionIndex: number) => {
   
  }

 
  return (
    <View gap={2} align='stretch' paddingTop={2}>
      {selectedToothData.map((tooth, toothIndex) => (
        <View key={toothIndex} paddingTop={2}>
          {tooth.availableOptions.map((availableOption, optionIndex) => (
            <View key={optionIndex}>
              {availableOption.url === item && (
                <>
                  {
                    tooth.type === 'treatment' && 'question' in availableOption && (
                      <Treatments onSelectItem={() => handleSelectItem(toothIndex, optionIndex)} question={availableOption.question} title={availableOption.title} options={availableOption.options} />
                    )
                  }
                  {
                    tooth.type === 'product' && (
                      <Products data={availableOption} />
                    )}
                </>
              )}
            </View>
          ))}
        </View>
        // )
      ))}
    </View>
  );
}