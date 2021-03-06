import React from "react";
import { View, Toolbar, Link, Tabs, Tab, Block, Page } from "framework7-react";
import { F7App, TimeView, Auth } from "@components";
import type { IComponentFunction } from "@types";

export const App: IComponentFunction<{}> = () => {
  return (
    <F7App>
      <View main>
        <Page pageContent={false}>
          <Toolbar tabbar bottom>
            <Link
              tabLink="#mt-time-view"
              iconOnly
              iconF7="timer"
              tabLinkActive
            />
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
              <Block>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates maxime saepe ratione aperiam voluptatum quod placeat
                asperiores soluta quae? Facere natus dolorem, facilis fugit
                aliquid laudantium provident aperiam totam itaque.
              </Block>
            </Tab>
            <Tab id="mt-profile" className="page-content">
              <Block>
                <Auth />
              </Block>
            </Tab>
          </Tabs>
        </Page>
      </View>
    </F7App>
  );
};

export default App;
