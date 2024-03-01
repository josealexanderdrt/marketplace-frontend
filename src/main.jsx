import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
/* import "react-toastify/dist/ReactToastify.css"; */
import {StoreProvider} from "./context/StoreContext.jsx";
/* </StoreProvider> */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <Auth0Provider
          domain="dev-iw8elxagxdwxybue.us.auth0.com"
          clientId="hT268YQQlQ1LN93RM3qbCv4pR0ES8rr1"
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
