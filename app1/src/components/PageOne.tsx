import React from "react";
import {
  BurgerButton,
  GlobalMenu,
  MainMenu,
  MainMenuAvatar,
  MainMenuButton,
  MainMenuIcon,
  FlexSpacer,
  FlexCell,
  DropdownMenuButton,
  DropdownMenuSplitter,
  DropdownMenuBody,
  Burger,
} from "@epam/promo";
import {
  Dropdown,
  AdaptiveItemProps,
  MainMenuLogo,
} from "@epam/uui-components";
// import { ReactComponent as HelpIcon } from "@epam/assets/icons/common/notification-help-outline-24.svg";
import { Button } from "@epam/promo";

export default function MainMenuBasicExample() {
  const renderBurger = () => (
    <>
      <BurgerButton caption="DEP Onboarding" />
      <BurgerButton caption="Skill Review" />
      <BurgerButton caption="Learning Plan" />
      <BurgerButton caption="Project Proposals" />
      <BurgerButton caption="Log out" />
    </>
  );

  const renderAvatar = () => {
    return (
      // <Dropdown
      //     renderTarget={ props => (
      //         <MainMenuAvatar
      //             avatarUrl="https://avatars.dicebear.com/api/human/avatar12.svg?background=%23EBEDF5&radius=50"
      //             isDropdown
      //             { ...props }
      //         />
      //     ) }
      //     renderBody={ props => (
      //         <DropdownMenuBody { ...props }>
      //             <DropdownMenuButton caption="Settings" />
      //             <DropdownMenuSplitter />
      //             <DropdownMenuButton caption="Log out" />
      //         </DropdownMenuBody>
      //     ) }
      //     placement="bottom-end"
      // />
      <>
        <div> Pranita</div>
      </>
    );
  };

  const getMenuItems = (): AdaptiveItemProps[] => {
    return [
      {
        id: "DEP Onboarding",
        priority: 100,
        collapsedContainer: true,
        render: (hiddenItems) => (
          <Burger
            key={"burger"}
            width={300}
            renderBurgerContent={renderBurger}
          />
        ),
      },
      {
        id: "Skill Review",
        priority: 3,
        render: () => <MainMenuButton href="/" caption="DEP Onboarding" />,
      },
      {
        id: "requests",
        priority: 3,
        render: () => <MainMenuButton href="/" caption="Requests" />,
      },
      { id: "flexSpacer", priority: 100, render: () => <FlexSpacer /> },
      { id: "avatar", priority: 2, render: renderAvatar },
      { id: "globalMenu", priority: 100, render: () => <GlobalMenu /> },
    ];
  };

  return (
    <>
    <FlexCell grow={1}>
      <MainMenu items={getMenuItems()} />
    </FlexCell>
    </>
  );
}
