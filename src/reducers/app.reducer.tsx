import { AppActions, Reducers } from "./main.reducer";

export const AppReducer = (state: { data: any[] }, action: AppActions) => {
  switch (action.type) {
    case Reducers.APP_SET_DATA:
      state.data = action.payload.data;
      return { ...state };
  }
};
