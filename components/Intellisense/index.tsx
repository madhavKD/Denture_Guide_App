'use client'
import Image from "next/image";
import { Button, Divider, DropdownMenu, MenuItem, Popover, Text, useToggle, View } from "../Reshaped/Reshaped";

export default function Intellisense() {
    const { active, activate, deactivate } = useToggle(false);
    return (
        <View padding={5} paddingTop={30}>
            <View padding={2} borderColor="primary" borderRadius="medium" direction={"column"} width="50%">
                <View align={"start"}>
                    <Text variant="body-medium-1">Array</Text>
                </View>
                <View>
                    <MenuItem>at</MenuItem>
                    <Popover active={active} onClose={deactivate} onOpen={activate} position={"bottom-end"}>
                        <Popover.Trigger>
                            {(attributes) => (
                                // <Button rounded attributes={attributes}>
                                //     Show menu
                                // </Button>
                                <MenuItem attributes={attributes}>map</MenuItem>
                            )}
                        </Popover.Trigger>
                        <Popover.Content>
                            <View borderColor="primary" borderRadius="medium" height="500px" gap={3} padding={2}>
                                <View>
                                    <Image src="/Code.png" alt="Code" width={500} height={250} style={{objectFit: "contain"}} />
                                </View>

                                <Text>Calls a defined callback function on each element of an array, and returns an array that contains the results.</Text>

                                <Text><Text color="critical">@param</Text> callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.</Text>

                                <Text>@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.</Text>

                            </View>
                        </Popover.Content>
                    </Popover>
                    <MenuItem>foreach</MenuItem>
                    <Divider />
                    <MenuItem>concat</MenuItem>
                    <MenuItem>copyWithin</MenuItem>
                </View>
            </View>
        </View>
    )
}