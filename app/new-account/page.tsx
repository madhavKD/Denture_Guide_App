'use client'
import { Icon, Text, View } from "../../components/Reshaped/Reshaped";
// import { CreateOrganization } from "../../components/Clerk";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";


export default function NewAccount() {
    return (
        <View gap={5} direction={"column"} align={"center"} >
            <View.Item columns={5}>
                <View align={"center"}>
                    <CreateOrganization />
                </View>
            </View.Item>
            <View.Item columns={5}>
                <View borderColor="primary-faded" borderRadius="medium" backgroundColor="primary-faded" padding={3}>
                    <View direction={"row"}>
                        {/* <Icon svg={IconZap} /> */}
                        {/* <Image /> */}
                        <Text variant="body-medium-1" color="primary">You can also ask an administrator of an existing organization to get invited</Text>
                    </View>
                </View>
            </View.Item>
        </View>
    )
}