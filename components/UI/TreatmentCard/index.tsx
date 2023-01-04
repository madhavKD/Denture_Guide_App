import { Card, View, Text } from "reshaped";

export const TreatmentCard = ({ icon = <></>, text, number }: { icon: any, text: string, number: number }) => {
  const Icon = icon;
  return <View width='350px'>
    <Card padding={0}>
      <View gap={3} direction="row" align="center" justify='center' paddingTop={4} paddingBottom={4} paddingEnd={5} paddingStart={5}>
        <Icon />
        <View.Item grow>
          <Text variant="body-medium-1">
            {text}
          </Text>
        </View.Item>
        <View width='23px' height='25px' borderColor="primary-faded" borderRadius="small" justify="center" align="center">
          <Text color='neutral-faded'>
            {number}
          </Text>
        </View>
      </View>
    </Card>
  </View>
}