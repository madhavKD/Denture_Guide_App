'use client'
import { Card, Text, View } from "../../components/Reshaped/Reshaped";
// import { CreateOrganization } from "../../components/Clerk";
import { CreateOrganization } from "@clerk/nextjs";

export default function NewAccount() {
    return (
        <View gap={5} direction={"column"} align={"center"}>
            <View.Item columns={5}>
                <View align={"center"}>
                    <CreateOrganization/>
                </View>
            </View.Item>
            <View.Item columns={2}>
                <Text variant="display-3">OR</Text>
            </View.Item>
            <View.Item columns={5}>
                <Card><Text>Get invited from an existing Organization</Text></Card>
            </View.Item>
        </View>
    )
}