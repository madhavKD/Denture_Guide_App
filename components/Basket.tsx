'use client';
import { Button, Modal, useToggle, View, Text, Badge } from "./Reshaped/Reshaped";

export default function Basket() {
    const { activate, deactivate, active } = useToggle(false);

    return (
        <>
            <Button onClick={activate}>
                <View direction={"row"} gap={2}>
                    <Text>Basket</Text>
                    <Badge color="critical">1</Badge>
                </View>
            </Button>
            <Modal
                active={active}
                onClose={deactivate}
                position={{ s: "bottom", m: "end" }}
            >
                Responsive sheet content
            </Modal>
        </>
    );
}