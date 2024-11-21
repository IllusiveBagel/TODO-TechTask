import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// Used instead of plain `useDispatch` and `useSelector` just speeds up things without having to define the type each time
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
