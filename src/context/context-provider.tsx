import React, { Dispatch } from "react";
import { Actions, mainReducer } from "../reducers/main.reducer";
import { IState, store } from "./initial.state";

type GlobalDataProviderProps = {
  children: JSX.Element;
  initialState?: IState;
};

export const GlobalDataContextRefactor = React.createContext<{
  state: IState;
  dispatch: Dispatch<Actions>;
}>({
  state: store,
  dispatch: () => null,
});

function GlobalDataProviderRefactor({ children }: GlobalDataProviderProps) {
  const [state, dispatch] = React.useReducer(mainReducer, store);

  // This should run on once, and that's when the page loads
  // the purpose of this is runing the window object sync
  React.useEffect(() => {}, []);

  return (
    <GlobalDataContextRefactor.Provider value={{ state, dispatch }}>
      {children}
    </GlobalDataContextRefactor.Provider>
  );
}

export default GlobalDataProviderRefactor;
