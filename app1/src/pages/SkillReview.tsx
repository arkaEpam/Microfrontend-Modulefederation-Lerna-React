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
  Avatar,
  FlexRow,
  Accordion,
  SearchInput,
} from "@epam/promo";
import {
  Dropdown,
  AdaptiveItemProps,
  MainMenuLogo,
} from "@epam/uui-components";
import "./SkillReview.scss";

import react_basic from "../data/react-basic.json"
import javascript_basic from "../data/javascript-basic.json"
import html_basic from "../data/html-basic.json"

const containerStyle = {
  display: "flex",
  borderRadius: "6px",
  overflow: "hidden",
};

export default function MainMenuBasicExample() {
  const [value, onValueChange] = React.useState("pranita");
  const handleChange = () => {};
  const renderBurger = () => (
    <>
      <BurgerButton caption="DEP Onboarding" />
      <BurgerButton caption="Skill Review" />
      <BurgerButton caption="Learning Plan" />
      <BurgerButton caption="Project Proposals" />
      <BurgerButton caption="Log out" />
    </>
  );

  const getMenuItems = (): AdaptiveItemProps[] => {
    return [
      {
        id: "burger",
        priority: 100,
        render: (hiddenItems) => (
          <Burger
            key={"burger"}
            width={300}
            renderBurgerContent={renderBurger}
          />
        ),
      },
      //   {
      //   id: 'logo', priority: 99,
      //   render: () =>
      //   <MainMenuLogo
      //   href='https://learn.epam.com/'
      //   logoUrl='https://uui.epam.com/static/images/app-logos/learn_logo.svg'
      //     />,
      //  },

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
      {
        id: "requests",
        priority: 3,
        render: () => <MainMenuButton href="/" caption="Learning Plan" />,
      },
      {
        id: "requests",
        priority: 3,
        render: () => <MainMenuButton href="/" caption="Project Proposals" />,
      },
      {
        id: "requests",
        priority: 3,
        render: () => <MainMenuButton href="/" caption="Interviews" />,
      },
    ];
  };

  return (
    <>
      <div className="page-header">
        <FlexCell grow={1}>
          <MainMenu items={getMenuItems()} />
        </FlexCell>
      </div>
      <div className="page-body-container">
        <div className="container" style={containerStyle}>
          <div className="user-info-block">
            <div className="user-avatar">
              <FlexRow spacing="6">
                <Avatar
                  alt="avatar"
                  img="https://static.cdn.epam.com/avatar/68f310872afde56093443db6c2de4552.jpg"
                  size="90"
                />
              </FlexRow>
            </div>
            <div className="user-info">
              <div
                style={{
                  fontFamily: "Sans Semibold,Arial,sans-serif",
                  fontWeight: "400",
                }}
              >
                Pranita Panigrahi
              </div>
              <div style={{ color: "#009ecc", fontSize: "16px" }}>
                Lead Software Engineer
              </div>
              <div
                style={{
                  color: "#6c6f80",
                  fontFamily: "Sans Regular,Arial,sans-serif",
                  fontSize: "12px",
                }}
              >
                Primary Skill : Frontend Development
              </div>
            </div>
            {/* <img className="_3ptQf" width="72" height="72" src="https://static.cdn.epam.com/avatar/68f310872afde56093443db6c2de4552.jpg"/> */}
          </div>
          <div></div>
        </div>
        <div className="page-search">
          {/*       
            <SearchInput value={ value } onValueChange={handleChange} placeholder='Type for search' debounceDelay={ 1000 } /> */}

          <FlexCell width="auto">
            <input
              type="search"
              className="search"
              placeholder="Search"
              value=""
            ></input>
          </FlexCell>
        </div>

        <div className="accordion">
          <FlexCell width="100%">
            <Accordion title="HTML" mode="block">
            <div>
                {
                  html_basic.map((item ,index)=> {
                    return (
                        <>
                          <div key={item.id} className="accordion-item">
                            <a>{item.title}</a>
                          </div>
                           { index !== html_basic.length-1 ?
                              <div className="accordion-item-border"></div> : null
                           }
                        </>
                        )
                  })
                }
              </div>
            </Accordion>
          </FlexCell>
        </div>
        <div className="accordion">
          <FlexCell width="100%">
            <Accordion title=" JavaScript" mode="block">
            <div>
                {
                  javascript_basic.map((item ,index)=> {
                    return (
                        <>
                          <div key={item.id} className="accordion-item">
                            <a>{item.title}</a>
                          </div>
                           { index !== javascript_basic.length-1 ?
                              <div className="accordion-item-border"></div> : null
                           }
                        </>
                        )
                  })
                }
              </div>
            </Accordion>
          </FlexCell>
        </div>
        <div className="accordion">
          <FlexCell width="100%">
            <Accordion title="React(Basic)" mode="block">
              <div>
                {
                  react_basic.map((item ,index)=> {
                    return (
                        <>
                          <div key={item.id} className="accordion-item">
                            <a>{item.title}</a>
                          </div>
                           { index !== react_basic.length-1 ?
                              <div className="accordion-item-border"></div> : null
                           }
                        </>
                        )
                  })
                }
              </div>
            </Accordion>
          </FlexCell>
        </div>
      </div>
    </>
  );
}
