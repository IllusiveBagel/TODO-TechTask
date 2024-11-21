import { RootState } from "./store";

// Checks browser localStorage for todoState to load from previous sessions
export const loadState = () => {
  try {
    const serialState = localStorage.getItem("todoState");
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
};

// Saves current state to todoState in local storage
export const saveState = (state: RootState) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem("todoState", serialState);
  } catch (err) {
    console.log(err);
  }
};
