import React, { useMemo, useState, createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import SideNavBar from "./components/sidenavbar";
import Discover from "./pages/discover";
import "./css/app.scss";

export const AppContext = createContext({
  state: {},
  toggleSidebar: () => {},
});
export default function App(props) {
  const [state, setState] = useState({ open: false });
  const value = useMemo(() => {
    const toggleSidebar = () =>
      setState((prev) => ({ ...prev, open: !prev.open }));
    return { ...state, toggleSidebar };
  }, [state]);
  return (
    <Router>
      <PageContainer>
        <AppContext.Provider value={value}>
          <SideNavBar {...props} />
          <ContentWrapper>
            <Switch>
              <Route
                path={["/", "/discover"]}
                component={Discover}
                {...props}
              />
            </Switch>
          </ContentWrapper>
        </AppContext.Provider>
      </PageContainer>
    </Router>
  );
}

const ContentWrapper = styled.main`
  padding-left: 260px;
  @media only screen and (max-width: 1024px) {
    padding-left: 0;
  }
`;

const PageContainer = styled.main`
  overflow-x: hidden;
`;
