import SelectProduct from "../components/SelectProduct";
import { View } from "../components/Reshaped/Reshaped";
import Tooth from "../components/Tooth";
import FetchUsers from "../components/FetchUsers";
import Intellisense from "../components/Intellisense";

export default function Home() {
  return (
    <View>
      {/* <FetchUsers /> */}
      <SelectProduct />
      <Tooth />
      <Intellisense />
    </View>
  )
}
