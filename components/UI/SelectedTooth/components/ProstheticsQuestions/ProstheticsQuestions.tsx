'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { MenuItem, Text } from "reshaped";
import { EmployeeDropdown } from "../EmployeeDropdown";

type ProstheticsQuestionsProps = {
  pathname: string | null; questionNumber: number; optionNumber: number; optionIndex: number; availableOptionIndex: number; questionUrl: string; option: { url: string; startIcon: string; name: string }; disabled: boolean;
}

export const ProstheticsQuestions = ({ pathname, questionNumber, optionNumber, optionIndex, availableOptionIndex, questionUrl, option, ,disabled  }: ProstheticsQuestionsProps) => {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, url: string) => {
    const target = e.target;

    if(target instanceof SVGCircleElement || target instanceof SVGPathElement) {
      e.preventDefault()
      e.stopPropagation()
      return ;
    }

    router.push(url)
  }

  return (
    <MenuItem
      disabled={disabled}
      size="small"
      roundedCorners
      selected={pathname?.includes(`/selected-tooth/${questionUrl}/${option.url}`)}
      className={!disabled && "menuItemLink"}
      startIcon={
        <Image
          src={option.startIcon}
          height={16}
          width={16}
          alt={option.name}
        />
      }
      onClick={(e) => handleClick(e, `/selected-tooth/${questionUrl}/${option.url}`)}
      endSlot={<EmployeeDropdown />}
    >
      <Text variant="body-medium-2">{option.name}</Text>
    </MenuItem>
  )
}