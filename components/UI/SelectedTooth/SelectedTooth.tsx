'use client';

import { MenuItem, Text, View, Radio } from '../../Reshaped/Reshaped';
import selectedToothData from './data.json';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function SelectedTooth() {
  const router = useRouter();
  const params = useSearchParams();
  const step = params.get('step')?.split('-')
  const questionNum = Number(step?.[0]);
  const optionNum = Number(step?.[1])

  return (
    <View gap={2} paddingTop={5} direction="column" divided>
      {selectedToothData.map((tooth, toothIndex) => (
        <>
          <View key={toothIndex} gap={1}>
            <MenuItem
              roundedCorners
              selected={toothIndex <= questionNum}
              href={`/selected-tooth/${tooth.url}`}
            >
              <Text variant="body-medium-2">{tooth.title}</Text>
            </MenuItem>

            <View direction="column" gap={1} paddingStart={3} paddingTop={2}>
              {tooth.availableOptions.map((availableOption, optionIndex) => (
                <MenuItem
                  key={optionIndex}
                  size="small"
                  roundedCorners
                  selected={(toothIndex <= questionNum && optionIndex <= optionNum) || toothIndex < questionNum}
                  href={`/selected-tooth/${tooth.url}/${availableOption.url}`}
                  className="menuItemLink"
                  startIcon={
                    'startIcon' in availableOption ? (
                      <Image
                        src={availableOption.startIcon}
                        height={16}
                        width={16}
                        alt="Img"
                      />
                    ) : (
                      <></>
                    )
                  }
                >
                  <Text variant="body-medium-2">{availableOption.name}</Text>
                </MenuItem>
              ))}
            </View>
          </View>
        </>
      ))}
    </View>
  );
}



{/* <View key={optionIndex}>
                  <Radio
                    value={`${availableOption.name}-${optionIndex}-${toothIndex}`}
                    name={`${availableOption.name}-${optionIndex}-${toothIndex}`}
                    checked={(toothIndex <= questionNum && optionIndex <= optionNum) || toothIndex < questionNum}
                    onChange={() => router.push(`/selected-tooth/${tooth.url}/${availableOption.url}?step=${toothIndex}-${optionIndex}`)}
                  >
                    {availableOption.name}
                  </Radio>
                </View> */}