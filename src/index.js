import React from "react";
import ReactDOM from "react-dom/client";
import RootContext from "./context";
import { StyledEngineProvider } from '@mui/material/styles';

import "./index.css";
import Root from "./Root";
// import "antd/dist/antd.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RootContext>
          <StyledEngineProvider injectFirst>
            <Root />
          </StyledEngineProvider>
        </RootContext>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
