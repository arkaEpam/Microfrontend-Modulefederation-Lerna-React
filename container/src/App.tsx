import React from "react";
import { ContainerApp } from "./components/ContainerApp";

const PageOne = React.lazy(() => import("app1/PageOne"));

const App = () => (
  
          <ContainerApp
          PageOne={PageOne}
          />
);

export default App;
