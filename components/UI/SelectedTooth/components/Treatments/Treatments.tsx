'use client';

import Image from "next/image";
import { Card, Container, MenuItem, Text, View } from "reshaped";

type Options = {
  id: number | string,
  name: string,
  image: null | string
}

type TreatmentsProps = {
  question: string; title: string; options: Options[]
}

export default function Treatments({ question, title, options }: TreatmentsProps) {
  return (
    <Container width="60%" >
      <View padding={8}>
        <View >
          <Text variant="body-medium-1" color="disabled">
            {title}
          </Text>
          <Text variant="title-3">{question}</Text>
        </View>

        <View gap={1} paddingTop={8} maxWidth="575px" width="70%">
          {
            options.map((option, index) => (
              <Card key={`${option.id}-${option.name}-${index}`} padding={0}>
                <MenuItem roundedCorners >
                  <View direction="row" gap={2}>
                    {option.image && <Image src={`/${option.image}`} alt={option.name} height={24} width={24} />}
                    <Text variant="body-strong-2">{option.name}</Text>
                  </View>
                </MenuItem>
              </Card>
            ))
          }
        </View>
      </View>
    </Container>
  )
}