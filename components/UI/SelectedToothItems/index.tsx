
'use client';

import { View } from '../../Reshaped/Reshaped';
import { Treatments } from './components/Treatments';
import { Products } from './components/Products';
import selectedToothData from "../SelectedTooth/data.json";
import { useRouter } from 'next/navigation';

export function SelectedToothItems({ params }: { params: any }) {
  const router = useRouter()
  const item = params.item;

  const handleSelectItem = (questionIndex: number, optionIndex: number) => {
    if (selectedToothData[questionIndex].availableOptions.length - 1 <= optionIndex) {
      router.push(`/selected-tooth/${selectedToothData[questionIndex + 1].url}/${selectedToothData[questionIndex + 1].availableOptions[0].url}?step=${questionIndex + 1}-0`)
    } else {
      router.push(`/selected-tooth/${selectedToothData[questionIndex].url}/${selectedToothData[questionIndex].availableOptions[optionIndex + 1].url}?step=${questionIndex}-${optionIndex + 1}`, { forceOptimisticNavigation: true })
    }
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