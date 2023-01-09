'use client'

import { Tabs, Text, View } from "reshaped";
import { ProductCards } from "./Products";
import selectedToothData from "../../../SelectedTooth/data.json";

export default function ProductsByCategory({ params }: { params: any }) {
  const subItem = params['sub-item'];
  const item = params.item;


  return (
    <>
      {
        selectedToothData[1].availableOptions?.map((availableOption) => (

          availableOption.url === item && availableOption.options?.map((option, index) => (
            'url' in option && option?.url === subItem ? (
              'options' in option && Boolean(option?.options?.length) ? (
                <View key={index} padding={8} paddingTop={2}>
                  <Tabs >
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
                </View>
              ) : (
                'products' in option && <ProductCards data={option?.products} />
              )
            ) : null
          )
          ))
        )
      }
    </>

  )
}