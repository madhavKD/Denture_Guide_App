'use client';

import { MenuItem, Text } from "reshaped";

type TreatmentQuestionsProps = {
  pathname: string | null; questionNumber: number; optionNumber: number; optionIndex: number; availableOptionIndex: number; questionUrl: string; option: { url: string; name: string }; disabled: boolean;
}

export const TreatmentQuestions = ({ questionNumber, optionNumber, optionIndex, availableOptionIndex, questionUrl, option, pathname, disabled }: TreatmentQuestionsProps) => {
  return (
    <MenuItem
      disabled={disabled}
      size="small"
      roundedCorners
      href={`/selected-tooth/${questionUrl}/${option.url}`}
      selected={pathname?.includes(`/selected-tooth/${questionUrl}/${option.url}`)}
      className={!disabled && "menuItemLink"}
    >
      <Text variant="body-medium-2">{option.name}</Text>
    </MenuItem>
  )
}