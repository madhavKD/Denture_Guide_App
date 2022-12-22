"use client";
import { View, Text, Image, Accordion, Tabs, MenuItem } from "reshaped";

export default function Product() {
  return (
    <View maxWidth="100%" align="stretch" borderColor="neutral-faded" padding={2}>
      <Accordion>
        <Accordion.Trigger>
          <View direction="row" gap={4} align="center" width="100%" >
            <Image
              src="https://eshop.camlog.de/out/pictures/generated/product/1/256_256_80/K2227.xxxx_zoom1.jpg"
              alt="CAMLOG® Esthomic® Abutment PS"
              borderRadius="medium"
              width="64px"
              height="100%"
            />
            <View>
              <Text variant="body-medium-1">Abutment</Text>
              <Text variant="body-2" color="neutral-faded">Not selected</Text>
            </View>
          </View>
        </Accordion.Trigger>
        <Accordion.Content>
          <View paddingStart={{ s: 0, m: 20}} paddingTop={4}>
            <Tabs variant="pills-elevated" itemWidth="equal" >
              <Tabs.List>
                <Tabs.Item value="0">Analog</Tabs.Item>
                <Tabs.Item value="1">Digital</Tabs.Item>
              </Tabs.List>
              <Tabs.Panel value="0">
                <View paddingTop={4}>
                  <Tabs variant="pills" itemWidth="equal">
                    <Tabs.List>
                      <Tabs.Item value="0">Esthomic</Tabs.Item>
                      <Tabs.Item value="1">Universal</Tabs.Item>
                      <Tabs.Item value="2">Gold-Composite</Tabs.Item>
                      <Tabs.Item value="3">Titanium basis CAD/CAM</Tabs.Item>
                    </Tabs.List>

                    <Tabs.Panel value="0">
                      <View direction="row" paddingTop={8}>
                        <Image
                          src="https://eshop.camlog.de/out/pictures/generated/product/1/256_256_80/K2227.xxxx_zoom1.jpg"
                          alt="CAMLOG® Esthomic® Abutment PS"
                          borderRadius="medium"
                          width="104px"
                          height="100%"
                        />
                        <View paddingStart={6} width="500px" maxWidth="100%">
                          <View paddingBottom={4}>
                            <Text variant="body-strong-1">CAMLOG® Esthomic® Abutment PS</Text>
                            <Text variant="body-2" color="neutral-faded">Ø 4.3</Text>
                          </View>

                          <MenuItem roundedCorners={true} selected={true}>
                            <View direction="row">
                              <View.Item columns={3} >Type A
                              </View.Item>
                              <View.Item columns={3}>
                                gewinkelt 15°
                              </View.Item>
                              <View.Item columns={3}>GH 1.5 - 2.5
                              </View.Item>
                              <View.Item columns={3}>
                                <View align="end">55.00 €</View>
                              </View.Item>
                            </View>
                          </MenuItem>

                          <MenuItem roundedCorners={true} selected={false}>
                            <View direction="row">
                              <View.Item columns={3}>Type A
                              </View.Item>
                              <View.Item columns={3}>
                                gewinkelt 15°
                              </View.Item>
                              <View.Item columns={3}>GH 1.5 - 2.5
                              </View.Item>
                              <View.Item columns={3}>
                                <View align="end">55.00 €</View>
                              </View.Item>
                            </View>
                          </MenuItem>

                          <MenuItem roundedCorners={true} selected={false}>
                            <View direction="row">
                              <View.Item columns={3}>Type A
                              </View.Item>
                              <View.Item columns={3}>
                                gewinkelt 15°
                              </View.Item>
                              <View.Item columns={3}>GH 1.5 - 2.5
                              </View.Item>
                              <View.Item columns={3}>
                                <View align="end">55.00 €</View>
                              </View.Item>
                            </View>
                          </MenuItem>
                        </View>

                      </View>
                    </Tabs.Panel>
                  </Tabs>
                </View>
              </Tabs.Panel>
              <Tabs.Panel value="1">
                <View paddingTop={4}>
                  <Tabs variant="pills" itemWidth="equal">
                    <Tabs.List>
                      <Tabs.Item value="0">Titanbasic CAD/CAM</Tabs.Item>
                      <Tabs.Item value="1">CAM-Rohling</Tabs.Item>
                      <Tabs.Item value="2">Dedicam</Tabs.Item>
                    </Tabs.List>
                  </Tabs>
                </View>
              </Tabs.Panel>
            </Tabs>
          </View>
        </Accordion.Content>
      </Accordion>
    </View>
  )
}
