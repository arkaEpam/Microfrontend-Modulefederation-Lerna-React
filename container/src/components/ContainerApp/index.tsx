
import React from "react";

type ContainerAppProps = {
  PageOne: React.LazyExoticComponent<React.ComponentType<{}>>;
};

export const ContainerApp = ({
  PageOne
}: ContainerAppProps) => {
  return (
    <>
    <PageOne/>
    </>
  );
};
