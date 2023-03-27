import ApiContextProvider from "./Context/ApiContext";
import AppNavigationStack from "./Navigation/AppNavigationStack";

export default function App() {
  return (
    <ApiContextProvider>
      <AppNavigationStack />
    </ApiContextProvider>
  );
}
