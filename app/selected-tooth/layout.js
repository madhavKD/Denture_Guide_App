'use-client'

import {View, Link, Button, Text} from '../../components/Reshaped/Reshaped'
// import { SelectedTooth } from "../../components/UI/SelectedTooth"; 

export default function Page({children}) {
  return (
    <>
      <View>
        <Link href='/selected-tooth/treatment'>
          <Button variant='outline' color='primary'>
            <Text variant='body-medium-2'>
              Implant Properties
            </Text>
          </Button>
        </Link>
        <Link href='/selected-tooth/product'>
          <Button variant='outline' color='primary'>
            <Text variant='body-medium-2'>
              Prosthetics
            </Text>
          </Button>
        </Link>
      </View>
      {children}
    </>
  );
}
