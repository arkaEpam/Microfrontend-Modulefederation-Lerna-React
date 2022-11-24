
import React from "react";

type ContainerAppProps = {
  PageOne: React.LazyExoticComponent<React.ComponentType<{}>>;
  CounterAppTwo: React.LazyExoticComponent<React.ComponentType<{}>>;
  CounterAppThree: React.LazyExoticComponent<React.ComponentType<{}>>;
};

export const ContainerApp = ({
  PageOne,
  CounterAppTwo,
  CounterAppThree
}: ContainerAppProps) => {
  return (
    <>
    <PageOne/>
    <CounterAppTwo/>
    <CounterAppThree/>
    </>
  );
};
