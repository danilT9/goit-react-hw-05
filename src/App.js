import { FoodItem, GlobalStyles } from "./components/Food/Food";
import data from "./datas/data.json";

function App() {
  return (
  <>
    <GlobalStyles />
    {
      data.map((d) => (
        <FoodItem key={d.id} {...d}  />
      ))
      }
  </>
  )
}

export default App;