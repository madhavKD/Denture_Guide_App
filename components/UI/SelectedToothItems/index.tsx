
'use client';

import { View } from '../../Reshaped/Reshaped';
import { Treatments } from './components/Treatments';
import { Products } from './components/Products';
import selectedToothData from "../SelectedTooth/data.json";

export function SelectedToothItems({ params }: { params: any }) {
  const section = params.section;
  const item = params.item; 

  return (
    <View gap={2} align='stretch' paddingTop={2}>
      {selectedToothData.map((tooth, index) => (
        <View key={index} paddingTop={2}>
          {tooth.availableOptions.map((availableOption, index) => (
            <View key={index}>
              {availableOption.url === item && (
                <>
                  {
                    tooth.type === 'treatment' && 'question' in availableOption && (
                      <Treatments question={availableOption.question} title={availableOption.title} options={availableOption.options} />
                    )
                  }
                  {
                    tooth.type === 'product' && (
                      <Products data={availableOption} urlPrefix={`/selected-tooth/${section}/${item}`} />
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