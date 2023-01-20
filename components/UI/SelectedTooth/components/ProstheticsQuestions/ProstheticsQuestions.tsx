'use client';

// import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { MenuItem, Text } from "reshaped";
import { EmployeeDropdown } from "../EmployeeDropdown";

type ProstheticsQuestionsProps = {
  questionNumber: number; optionNumber: number; optionIndex: number; availableOptionIndex: number; questionUrl: string; option: { url: string; startIcon: string; name: string }; disabled: boolean;
}

export const ProstheticsQuestions = ({ questionNumber, optionNumber, optionIndex, availableOptionIndex, questionUrl, option, disabled }: ProstheticsQuestionsProps) => {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, url: string) => {
    const target = e.target as HTMLInputElement;

    if (target.matches('#prostheticsInviteEmployeeAvatar, #prostheticsInviteEmployeeAvatar *')) {
      e.preventDefault()
      e.stopPropagation()
      return;
    }

    router.push(url)
  }

  return (
    <MenuItem
      disabled={disabled}
      size="small"
      roundedCorners
      selected={(optionIndex <= questionNumber && availableOptionIndex <= optionNumber) || optionIndex < questionNumber}
      className={!disabled && "menuItemLink"}
      // startIcon={
      //   <Image
      //     src={option.startIcon}
      //     height={16}
      //     width={16}
      //     alt={option.name}
      //   />
      // }
      onClick={(e) => handleClick(e, `/selected-tooth/${questionUrl}/${option.url}?step=${optionIndex}-${availableOptionIndex}`)}
      endSlot={<EmployeeDropdown disabled={disabled} />}
    >
      <Text variant="body-medium-2">{option.name}</Text>
    </MenuItem>
  )
}