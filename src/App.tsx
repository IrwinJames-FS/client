import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StatisticsPage, VehicleEditorPage, VehiclesPage, ManufacturersPage, ManufacturerEditorPage } from "./application";
import { VehiclesLoader, ManufacturersLoader, VehicleLoader, ManufacturerLoader } from "./application/loaders";


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
  {
    path:"/manufacturers/id",
    loader: ManufacturerLoader,
    element: <ManufacturerEditorPage/>
  },
  {
    path:"/manufacturers/id/:id",
    loader: ManufacturerLoader,
    element: <ManufacturerEditorPage/>
  }
])
const App = () => (<RouterProvider router={router}/>);

export default App;