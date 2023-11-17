import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StatisticsPage, VehiclesPage } from "./application";
import { ManufacturersPage } from "./application/ManufacturersPage";

const router = createBrowserRouter([
  {
    index: true,
    element: <StatisticsPage/>
  },
  {
    path: "/vehicles",
    element: <VehiclesPage/>
  },
  {
    path: "/manufacturers",
    element: <ManufacturersPage/>
  }
])
const App = () => (<RouterProvider router={router}/>);

export default App;