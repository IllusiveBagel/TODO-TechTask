import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./App/store.ts";
import { saveState } from "./App/localStorage.ts";
import App from "./App.tsx";

import "./index.css";

// Updates the localStorage every time state is changed
store.subscribe(() => {
  saveState({
    todo: store.getState().todo,
  });
});

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
);
