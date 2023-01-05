import { Card, View, Text, MenuItem } from 'reshaped';

export const TreatmentCard = ({
  icon = <></>,
  text,
  number,
  onSelectTreatment,
}: {
  icon: any;
  text: string;
  number: number;
  onSelectTreatment: Function;
}) => {
  const Icon = icon;
  return (
    <View width="350px">
      <Card padding={0} onClick={() => onSelectTreatment(text)}>
        <MenuItem roundedCorners>
          <View gap={0} direction="row" align="center" justify="center">
            <Icon />
            <View.Item grow>
              <Text variant="body-medium-1">{text}</Text>
            </View.Item>
            <View
              width="23px"
              height="25px"
              borderColor="primary-faded"
              borderRadius="small"
              justify="center"
              align="center"
            >
              <Text color="neutral-faded">{number}</Text>
            </View>
          </View>
        </MenuItem>
      </Card>
    </View>
  );
};
