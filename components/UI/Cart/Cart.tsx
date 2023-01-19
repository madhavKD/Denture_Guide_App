'use client';

import { useState } from 'react';
import {
  Accordion,
  View,
  Divider,
  Text,
  Button,
} from '../../Reshaped/Reshaped';

const CartSvg = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.1278 12.6762C12.1278 13.417 11.5273 14.0175 10.7865 14.0175C10.0458 14.0175 9.44531 13.417 9.44531 12.6762C9.44531 11.9355 10.0458 11.335 10.7865 11.335C11.5273 11.335 12.1278 11.9355 12.1278 12.6762Z"
      fill="#5976A6"
    />
    <path
      d="M6.76053 12.6762C6.76053 13.417 6.16003 14.0175 5.41933 14.0175C4.67862 14.0175 4.07812 13.417 4.07812 12.6762C4.07812 11.9355 4.67862 11.335 5.41933 11.335C6.16003 11.335 6.76053 11.9355 6.76053 12.6762Z"
      fill="#5976A6"
    />
    <path
      d="M11.8575 10.7987H5.66581C4.77413 10.7987 3.99947 10.1641 3.82461 9.28956L2.51709 2.7514H1.12756C0.979546 2.7514 0.859375 2.63123 0.859375 2.48312C0.859375 2.33502 0.979548 2.21484 1.12756 2.21484H2.73704C2.86476 2.21484 2.97469 2.30502 2.99994 2.43049L4.35084 9.18386C4.47586 9.80889 5.02894 10.2622 5.66581 10.2622H11.8575C12.0056 10.2622 12.1258 10.3823 12.1258 10.5304C12.1258 10.6786 12.0056 10.7987 11.8575 10.7987V10.7987Z"
      fill="#5976A6"
    />
    <path
      d="M13.1342 3.91493C13.0831 3.85754 13.0102 3.82422 12.933 3.82422H3.27609C3.12799 3.82422 3.00781 3.94439 3.00781 4.0925C3.00781 4.2406 3.12799 4.36077 3.27609 4.36077H3.32648L4.03251 8.12581C3.90802 8.14934 3.81255 8.25343 3.81255 8.38438C3.81255 8.53239 3.93273 8.65257 4.08083 8.65257H11.449C12.1239 8.65257 12.6964 8.14772 12.7801 7.4776L13.1991 4.12551C13.2087 4.04935 13.1851 3.97211 13.1341 3.91472L13.1342 3.91493Z"
      fill="#5976A6"
    />
  </svg>
);

export default function Cart() {
  const [activeValue, setActiveValue] = useState(false);

  return (
    <View padding={2} paddingTop={10} width='100%' direction='column'>
      <View
        animated
        borderColor="neutral"
        borderRadius="large"
        padding={2}
      >
        <Accordion active={activeValue} onToggle={(active) => setActiveValue(active)}>
          <Accordion.Trigger>
            <View paddingStart={1}>
              <Text variant="body-medium-1">Tools</Text>
            </View>
          </Accordion.Trigger>
          <Accordion.Content>
            <View padding={2}>
              Some Content
            </View>
          </Accordion.Content>
        </Accordion>
      </View>
      <View direction='column' paddingBottom={6}>
        <View direction="row" paddingTop={3} paddingBottom={3}>
          <View.Item grow>
            <Text variant="body-2" color="neutral-faded">
              Patients
            </Text>
          </View.Item>
          <Text variant="body-2">0.00 €</Text>
        </View>

        <View direction="row" paddingTop={3} paddingBottom={3}>
          <View.Item grow>
            <Text variant="body-2" color="neutral-faded">
              Dentist
            </Text>
          </View.Item>
          <Text variant="body-2">0.00 €</Text>
        </View>

        <Divider />

        <View direction="row" paddingTop={3} paddingBottom={3}>
          <View.Item grow>
            <Text variant="body-strong-2" color="neutral-faded">
              Total
            </Text>
          </View.Item>
          <Text variant="body-strong-2">0.00 €</Text>
        </View>

        <View padding={2}>
          <Button
            startIcon={CartSvg}
            variant="outline"
            rounded
            fullWidth
            size={'large'}
          >
            <Text variant="body-medium-2" color="neutral-faded">
              Order selected items (0)
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
}