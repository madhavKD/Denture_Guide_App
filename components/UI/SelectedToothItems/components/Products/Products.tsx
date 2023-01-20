"use client";

// import Image from "next/image";
import {
  Text,
  View,
  Button,
  MenuItem,
  Popover,
  AspectRatio,
  Tabs,
} from "../../../../Reshaped/Reshaped";

type ProductProps = {
  title: string;
  image: string;
  description: string;
  price: string;
  availableTooth: string[];
};

type OptionProps = {
  name: string;
  options?: OptionProps[] | null;
  products?: ProductProps[] | null;
};

type ProductsProps = {
  title: string;
  options?: OptionProps[] | null;
  products?: ProductProps[] | null;
};

type PopupProps = {
  availableTeeth: string[]
};

export const Popup = ({ availableTeeth }: PopupProps) => {
  return (
    <Popover position="top">
      <Popover.Trigger>
        {(attributes) => (
          <Button
            attributes={attributes}
            color="primary"
            variant="outline"
            fullWidth
          >
            {" "}
            Select For ...{" "}
          </Button>
        )}
      </Popover.Trigger>
      <Popover.Content>
        <View width='300px'>
          <MenuItem>
            Select for all teeth
          </MenuItem>
          {availableTeeth?.map((item, index) => (
            <MenuItem key={index} startSlot={
              <Text align='start' variant="body-medium-2">{item}</Text>
            } endSlot={
              <Text variant="body-medium-2">3.8 mm</Text>
            }>
              {' '}
            </MenuItem>
          ))}
        </View>
      </Popover.Content>
    </Popover>
  );
};

export const ProductCards = ({
  data,
}: {
  data: ProductProps[] | null | undefined;
}) => {
  return (
    <View direction="row">
      {data?.map((item, index) => (
        <View key={index} paddingTop={6} paddingEnd={4} paddingStart={4}>
          <View
            height="416px"
            width="216px"
            borderColor="neutral-faded"
            borderRadius="medium"
          >
            {/* <AspectRatio ratio={1 / 1}>
              <Image
                src={item.image}
                width={216}
                height={216}
                alt={item.title}
              />
            </AspectRatio> */}
            <View padding={4} gap={4} direction="column" height="200px">
              <View.Item grow>
                <Text variant="body-strong-2">{item.title}</Text>
                <Text color="neutral-faded">{item.description}</Text>
              </View.Item>
              <Text variant="body-strong-2" color="primary">
                {`${item.price} €`}
              </Text>
              {'availableTooth' in item && <Popup availableTeeth={item.availableTooth} />}
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export const Products = ({ data }: { data: ProductsProps }) => {
  return (
    <View padding={8} paddingTop={0}>
      <View paddingBottom={8}>
        <Text variant="title-1">{data.title}</Text>
      </View>
      {Boolean(data.options?.length) ? (
        <Tabs itemWidth="equal" variant="pills-elevated">
          <Tabs.List>
            {data.options?.map((option, index) => (
              <Tabs.Item value={option.name} key={index}>
                <Text variant="body-medium-2">{option.name}</Text>
              </Tabs.Item>
            ))}
          </Tabs.List>
          {data.options?.map((option, index) => (
            <Tabs.Panel value={option.name} key={index}>
              {Boolean(option.options?.length) ? (
                <Tabs itemWidth="equal">
                  <Tabs.List>
                    {option.options?.map((subOption, subIndex) => (
                      <Tabs.Item value={subOption.name} key={subIndex}>
                        <Text variant="body-medium-2">{subOption.name}</Text>
                      </Tabs.Item>
                    ))}
                  </Tabs.List>
                  {option.options?.map((subOption, subIndex) => (
                    <Tabs.Panel key={subIndex} value={subOption.name}>
                      <ProductCards data={subOption?.products} />
                    </Tabs.Panel>
                  ))}
                </Tabs>
              ) : (
                <Tabs.Panel key={index} value={option.name}>
                  <ProductCards data={option?.products} />
                </Tabs.Panel>
              )}
            </Tabs.Panel>
          ))}
        </Tabs>
      ) : (
        <ProductCards data={data.products} />
      )}
    </View>
  );
};
