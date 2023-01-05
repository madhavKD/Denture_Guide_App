'use-client';


import { Tabs, Text, View, Image, Card, AspectRatio, Button } from '../../../Reshaped/Reshaped';


export const ProductCards = ({ data }: { data: any }) => {
    return (<View direction='row'>
        {data?.map((item, index) => (<View paddingTop={6} paddingEnd={4} paddingStart={4}>
            <View height='416px' width='216px' borderColor='primary' borderRadius='medium'>
                <AspectRatio ratio={1 / 1}>
                    <Image src='' borderRadius='medium' fallback='none' />
                </AspectRatio>
                <View padding={4} gap={4} direction='column' height='200px'>
                    <View.Item grow>
                        <Text>{item}</Text>
                    </View.Item>
                    <Text>Price</Text>
                    <Button fullWidth> Select For ... </Button>
                </View>
            </View>
        </View>))}
    </View>)
}

export const ProstheticsMenu = ({ data }: { data: any }) => {
    return <View borderColor="primary">
        <Text>{data.name}</Text>
        {Boolean(data.options?.length) ? <Tabs itemWidth="equal" variant='pills-elevated'>
            <Tabs.List>
                {data.options.map((option, index) => (
                    <Tabs.Item value={option.name} key={index}>{option.name}</Tabs.Item>
                ))}
            </Tabs.List>
            {data.options.map((option, index) => (
                <Tabs.Panel value={option.name} key={index}>
                    {Boolean(option.options?.length) ? <Tabs itemWidth='equal'>
                        <Tabs.List>
                            {option.options?.map((subOption, subIndex) => (
                                <Tabs.Item value={subOption.name} key={subIndex}>{subOption.name}</Tabs.Item>
                            ))}
                        </Tabs.List>
                        {option.options?.map((subOption, subIndex) => (
                            <Tabs.Panel key={subIndex} value={subOption.name}>
                                <ProductCards data={subOption?.cards} />
                            </Tabs.Panel>
                        ))}
                    </Tabs> : <Tabs.Panel key={index} value={option.name}>
                        <ProductCards data={option?.cards} />
                    </Tabs.Panel>}
                </Tabs.Panel>
            ))}
        </Tabs> : null}
        {/* </Tabs> : <ProductCards data={} />} */}
    </View>
}