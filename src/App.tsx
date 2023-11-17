import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StatisticsPage } from "./application";

const router = createBrowserRouter([
  {
    index: true,
    element: <StatisticsPage/>
  }
])
const App = () => (<RouterProvider router={router}/>);

export default App;