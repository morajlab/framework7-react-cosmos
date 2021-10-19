import { mountDomRenderer } from "react-cosmos/dom";
import {
  decorators,
  fixtures,
  rendererConfig,
} from "@root/.cosmos/cosmos.userdeps";

// Initialize framework7 app
import "@libs";

import "../styles.css";

mountDomRenderer({ rendererConfig, decorators, fixtures });

if (import.meta.hot) import.meta.hot!.accept();
