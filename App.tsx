import MainNavigator from "./app/screens/navigation/MainNavigator";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
