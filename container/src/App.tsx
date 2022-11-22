import React from "react";
import { ContainerApp } from "./components/ContainerApp";

const PageOne = React.lazy(() => import("app1/PageOne"));
const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));
const CounterAppThree = React.lazy(() => import("app3/CounterAppThree"));

const App = () => (
  
          <ContainerApp
          PageOne={PageOne}
            CounterAppTwo={CounterAppTwo}
            CounterAppThree={CounterAppThree}
          />
);

export default App;
