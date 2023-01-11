'use client';

import Image from "next/image";
import { MenuItem, Text } from "reshaped";

type ProstheticsQuestionsProps = {
  pathname: string | null; questionNumber: number; optionNumber: number; optionIndex: number; availableOptionIndex: number; questionUrl: string; option: { url: string; startIcon: string; name: string }; disabled: boolean;
}

export const ProstheticsQuestions = ({ pathname, questionNumber, optionNumber, optionIndex, availableOptionIndex, questionUrl, option,disabled }: ProstheticsQuestionsProps) => {
  return (
    <MenuItem
      disabled={disabled}
      size="small"
      roundedCorners
      selected={pathname?.includes(`/selected-tooth/${questionUrl}/${option.url}`)}
      href={`/selected-tooth/${questionUrl}/${option.url}`}
      className={!disabled && "menuItemLink"}
      startIcon={
        <Image
          src={option.startIcon}
          height={16}
          width={16}
          alt={option.name}
        />
      }
    >
      <Text variant="body-medium-2">{option.name}</Text>
    </MenuItem>
  )
}