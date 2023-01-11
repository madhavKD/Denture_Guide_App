'use client';

import { MenuItem, Text } from "reshaped";

type TreatmentQuestionsProps = {
  pathname: string | null; questionNumber: number; optionNumber: number; optionIndex: number; availableOptionIndex: number; questionUrl: string; option: { url: string; name: string }
}

export const TreatmentQuestions = ({ questionNumber, optionNumber, optionIndex, availableOptionIndex, questionUrl, option, pathname }: TreatmentQuestionsProps) => {
  return (
    <MenuItem
      size="small"
      roundedCorners
      href={`/selected-tooth/${questionUrl}/${option.url}`}
      selected={pathname?.includes(`/selected-tooth/${questionUrl}/${option.url}`)}
      className="menuItemLink"
    >
      <Text variant="body-medium-2">{option.name}</Text>
    </MenuItem>
  )
}