import SelectProduct from "../components/SelectProduct";
import FetchUsers from "../components/FetchUsers";
import { View } from "../components/Reshaped/Reshaped";

export default function Home() {
  return (
    <View>
      <FetchUsers />
      <SelectProduct />
    </View>
  )
}
