'use client';

import Image from 'next/image';
import React from 'react';
import { View, Button } from 'reshaped';

export default function SelectProstheticsButton() {
  return (
    <View direction="row" width="100%" justify="center">
      <Button
        rounded
        startIcon={
          <Image
            src="./selectProsthetics.svg"
            height={18}
            width={13}
            alt="Select prosthetics"
          />
        }
        size="large"
        variant="outline"
        fullWidth={false}
      >
        Select Prosthetics
      </Button>
    </View>
  );
}
