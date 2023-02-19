import "./App.css";
import { Header } from "./components/Header";
import { store } from "./utils/store";
import { Provider } from "react-redux";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainContainer } from "./components/MainContainer";
import { WatchPage } from "./components/WatchPage";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: <WatchPage />,
      },
    ],
  },
  
]);

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
