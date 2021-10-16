import React from "react";
import { Toolbar, Link, Tabs, Tab, Block, Page } from "framework7-react";
import { Base, TimeView, Auth } from "@components";
import { Styles } from "./App.styles";
import type { AppComponent } from "./App.types";

export const App: AppComponent = () => {
  const { root } = Styles();

  return (
    <Base {...root}>
      <Page pageContent={false}>
        <Toolbar tabbar bottom>
          <Link tabLink="#mt-time-view" iconOnly iconF7="timer" tabLinkActive />
          <Link tabLink="#tab-2" iconOnly iconF7="circle_grid_hex" />
          <Link tabLink="#mt-profile" iconOnly iconF7="person" />
        </Toolbar>
        <Tabs swipeable>
          <Tab id="mt-time-view" className="page-content" tabActive>
            <Block>
              <TimeView />
            </Block>
          </Tab>
          <Tab id="tab-2" className="page-content">
            <Block>Tab 2</Block>
          </Tab>
          <Tab id="mt-profile" className="page-content">
            <Block>
              <Auth />
            </Block>
          </Tab>
        </Tabs>
      </Page>
    </Base>
  );
};

export default App;
