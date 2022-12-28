import SelectProduct from "../components/SelectProduct";
import FetchUsers from "../components/FetchUsers";
import { View } from "../components/Reshaped/Reshaped";
import Tooth from "../components/Tooth";

export default function Home() {
  return (
    <View>
      <FetchUsers />
      <SelectProduct />
      <Tooth />
    </View>
  )
}
