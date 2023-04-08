import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { Fragment, ReactNode, useState } from "react";

export interface TabProps {
  label: string;
  component: ReactNode;
}

interface PropsType {
  tabs: TabProps[];
}

function TabManager({ tabs }: PropsType) {
  const [tabValue, setTabValue] = useState<number>(0);

  function handleTabChange(event: React.SyntheticEvent, newValue: number) {
    setTabValue(newValue);
  }

  const tabRender = () => {
    const component = tabs[tabValue].component;
    return component;
  };

  return (
    <Fragment>
      <Box sx={{ width: "100%", backgroundColor: "white " }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          {tabs?.map((tab) => {
            return <Tab label={tab?.label} key={tab?.label} />;
          })}
        </Tabs>
      </Box>
      {tabRender()}
    </Fragment>
  );
}

export default TabManager;
