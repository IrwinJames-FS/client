import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StatisticsPage, VehicleEditorPage, VehiclesPage, ManufacturersPage } from "./application";
import { VehiclesLoader, ManufacturersLoader, VehicleLoader } from "./application/loaders";


const router = createBrowserRouter([
  {
    index: true,
    element: <StatisticsPage/>
  },
  {
    path: "/vehicles",
    loader: VehiclesLoader,
    element: <VehiclesPage/>
  },
  {
    path: "/vehicles/id",
    loader: VehicleLoader,
    element: <VehicleEditorPage/>
  },
  {
    path:"/vehicles/id/:id",
    loader: VehicleLoader,
    element: <VehicleEditorPage/>
  },
  {
    path: "/manufacturers",
    loader: ManufacturersLoader,
    element: <ManufacturersPage/>
  },
])
const App = () => (<RouterProvider router={router}/>);

export default App;