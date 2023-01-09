'use-client';

import Image from "next/image";
import { Tabs, Text, View, Button, Container, Popover, AspectRatio } from '../../../../Reshaped/Reshaped';
import { popupData } from '../../../__mock__/data';

type ProductProps = {
  title: string;
  image: string;
  description: string;
  price: string;
}

type OptionProps = {
  name: string;
  options?: OptionProps[] | null;
  products?: ProductProps[] | null;
}

type ProductsProps = {
  title: string;
  options?: OptionProps[] | null;
  products?: ProductProps[] | null;
}

type PopupProps = {
  data: {
    name: string;
    description: string | null | undefined;
  }[];
}

export const Popup = () => {
  const data = popupData;
  return (<Popover position='top'>
    <Popover.Trigger>
      {(attributes) => (<Button attributes={attributes} color='primary' variant='outline' fullWidth> Select For ... </Button>)}
    </Popover.Trigger>
    <Popover.Content>
      {data.options?.map((item, index) => (
        <View width='300px' direction='row' key={index} paddingStart={4} paddingEnd={4} paddingBottom={3} paddingTop={3} gap={0}>
          <View.Item grow>
            <Text variant='body-medium-2'>{item.name}</Text>
          </View.Item>
          <Text variant='body-medium-2'>{item.description}</Text>
        </View>
      ))}
    </Popover.Content>
  </Popover>)
}

export const ProductCards = ({ data }: { data: ProductProps[] | null | undefined }) => {
  return (<View direction='row'>
    {data?.map((item, index) => (<View key={index} paddingTop={6} paddingEnd={4} paddingStart={4}>
      <View height='416px' width='216px' borderColor='neutral-faded' borderRadius='medium'>
        <AspectRatio ratio={1 / 1}>
          <Image src={item.image} width={216} height={216} alt={item.title} />
        </AspectRatio>
        <View padding={4} gap={4} direction='column' height='200px'>
          <View.Item grow>
            <Text variant='body-strong-2'>{item.title}</Text>
            <Text color='neutral-faded'>{item.description}</Text>
          </View.Item>
          <Text variant='body-strong-2' color='primary'>{item.price}</Text>
          {/* <Popup data={popupData}> */}
          <Popup />
        </View>
      </View>
    </View>))}
  </View>)
}

export const Products = ({ data }: { data: ProductsProps }) => {
  return (
    <View padding={8} paddingTop={0}>
      <View paddingBottom={8}>
        <Text variant='title-1'>{data.title}</Text>
      </View>
      {Boolean(data.options?.length) ? <Tabs itemWidth="equal" variant='pills-elevated'>
        <Tabs.List>
          {data.options?.map((option, index) => (
            <Tabs.Item value={option.name} key={index}>
              <Text variant='body-medium-2'>{option.name}</Text>
            </Tabs.Item>
          ))}
        </Tabs.List>
        {data.options?.map((option, index) => (
          <Tabs.Panel value={option.name} key={index}>
            {Boolean(option.options?.length) ? <Tabs itemWidth='equal'>
              <Tabs.List>
                {option.options?.map((subOption, subIndex) => (
                  <Tabs.Item value={subOption.name} key={subIndex}>
                    <Text variant='body-medium-2'>{subOption.name}</Text>
                  </Tabs.Item>
                ))}
              </Tabs.List>
              {option.options?.map((subOption, subIndex) => (
                <Tabs.Panel key={subIndex} value={subOption.name}>
                  <ProductCards data={subOption?.products} />
                </Tabs.Panel>
              ))}
            </Tabs> : <Tabs.Panel key={index} value={option.name}>
              <ProductCards data={option?.products} />
            </Tabs.Panel>}
          </Tabs.Panel>
        ))}
      </Tabs> : <ProductCards data={data.products} />}
    </View>
  )
}