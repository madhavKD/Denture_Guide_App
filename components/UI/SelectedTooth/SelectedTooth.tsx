'use client';

import { MenuItem, Text, View } from '../../Reshaped/Reshaped';
import options from './data.json';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ProstheticsQuestions } from './components/ProstheticsQuestions';
import { TreatmentQuestions } from './components/TreatmentQuestions';
import { EmployeeDropdown } from './components/EmployeeDropdown';


export default function SelectedTooth() {
  const pathname = usePathname();
  const params = useSearchParams();
  const step = params.get('step')?.split('-')
  const questionNum = Number(step?.[0]);
  const optionNum = Number(step?.[1])

  return (
    <View gap={2} paddingTop={5} direction="column" divided>
      {options.map((option, optionIndex) => (
        <>
          <View key={optionIndex} gap={1}>
            <MenuItem
              roundedCorners
              selected={pathname?.includes(`/selected-tooth/${option.url}`)}
              href={`/selected-tooth/${option.url}`}
            >
              <Text variant="body-medium-2">{option.title}</Text>
            </MenuItem>

            <View direction="column" gap={1} paddingStart={3} paddingTop={2}>
              {option.availableOptions.map((availableOption, availableOptionIndex) => (
                <View direction="row" key={availableOptionIndex}>
                  <View.Item grow>
                    {(option.type === 'product' && 'startIcon' in availableOption) ? (
                      <ProstheticsQuestions
                        key={availableOptionIndex}
                        availableOptionIndex={availableOptionIndex}
                        option={availableOption}
                        optionIndex={optionIndex}
                        optionNumber={optionNum}
                        questionNumber={questionNum}
                        questionUrl={option.url}
                        pathname={pathname}
                      />
                    ) : (
                      <TreatmentQuestions
                        key={availableOptionIndex}
                        availableOptionIndex={availableOptionIndex}
                        option={availableOption}
                        optionIndex={optionIndex}
                        optionNumber={optionNum}
                        questionNumber={questionNum}
                        questionUrl={option.url}
                        pathname={pathname}
                      />
                    )}
                  </View.Item>
                  {option.type !== 'treatment' && (
                    <EmployeeDropdown />
                  )}
                </View>
              ))}
            </View>
          </View>
        </>
      ))}
    </View>
  );
}

