'use client';

import { useRouter } from "next/navigation";
import { Radio, Text, View } from "reshaped";

type TreatmentQuestionsProps = {
  questionNumber: number; optionNumber: number; optionIndex: number; availableOptionIndex: number; questionUrl: string; option: { url: string; name: string }; disabled: boolean;
}

export const TreatmentQuestions = ({ questionNumber, optionNumber, optionIndex, availableOptionIndex, questionUrl, option,  disabled }: TreatmentQuestionsProps) => {
  const router = useRouter()

  return (
    <View key={optionIndex} paddingTop={2} paddingBottom={2} paddingStart={3}>
      <Radio
        value={`${option.name}-${optionIndex}-${availableOptionIndex}`}
        name={`${option.name}-${optionIndex}-${availableOptionIndex}`}
        checked={(optionIndex <= questionNumber && availableOptionIndex <= optionNumber) || optionIndex < questionNumber}
        onChange={() => router.push(`/selected-tooth/${questionUrl}/${option.url}?step=${optionIndex}-${availableOptionIndex}`)}
      >
        <Text variant="body-medium-2">{option.name}</Text>
      </Radio>
    </View>
  )
}