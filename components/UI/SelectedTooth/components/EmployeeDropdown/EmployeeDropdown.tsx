'use client';
import React, { ChangeEvent, useState } from 'react';
import {
  Text,
  DropdownMenu,
  TextField,
  View,
  Button
} from '../../../../Reshaped/Reshaped';

import { DefaultAvatar } from '../../../svg/DefaultAvatar/DefaultAvatar';

import { drData } from '../../../__mock__/data';

type EmployeeType = {
  name: string
}

export const EmployeeDropdown = ({ disabled }: { disabled: boolean }) => {
  const [employees, setEmployees] = useState<EmployeeType[]>(drData);

  const handleChange = (e: { event: ChangeEvent<HTMLInputElement>; name: string, value: string }) => {
    e.event.preventDefault();
    e.event.stopPropagation();

    let filteredEmployees;
    if (e.value) {
      filteredEmployees = drData.filter(
        (item: EmployeeType) => item.name.toLowerCase().includes(e.value.toLowerCase())
      );
      setEmployees(filteredEmployees);
    } else {
      setEmployees(drData);
    }
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
    console.log("event -> ", event)
    event.preventDefault()
    event.stopPropagation()
  };

  return (
    <DropdownMenu position="bottom-end" width='300px'>
      <DropdownMenu.Trigger>
        {(attributes) => (
          <Button disabled={disabled} color='primary' rounded variant='ghost' size="small" startIcon={<DefaultAvatar />} attributes={{...attributes, id: 'prostheticsInviteEmployeeAvatar'}} />
        )}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <View paddingBottom={2}>
          <TextField name="" placeholder="Search..." onChange={handleChange} />
        </View>

        {employees.map((employee: EmployeeType, index: number) => (
          <DropdownMenu.Item
            key={index}
            size="small"
            roundedCorners
            onClick={handleMenuItemClick}
          >
            <Text variant="body-medium-2" color="neutral-faded">
              {employee.name}
            </Text>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
