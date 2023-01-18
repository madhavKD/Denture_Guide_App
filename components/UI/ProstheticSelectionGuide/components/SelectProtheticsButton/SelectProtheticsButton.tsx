'use client';

import Image from 'next/image';
import React from 'react';
import { View, Button } from 'reshaped';
import { useRouter } from "next/navigation";

export default function SelectProstheticsButton() {
  const router = useRouter()
  router.prefetch('/selected-tooth')

  const handleButtonClick = () => {
    router.push('/selected-tooth')
  }

  return (
    <View direction="row" width="100%" justify="center">
      <Button
        rounded
        startIcon={
          <Image
            src="/selectProsthetics.svg"
            height={18}
            width={13}
            alt="Select prosthetics"
          />
        }
        size="large"
        variant="outline"
        fullWidth={false}
        onClick={handleButtonClick}
      >
        Select Prosthetics
      </Button>
    </View>
  );
}
