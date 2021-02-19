import { IState } from "../context/initial.state";
import { AppReducer } from "./app.reducer";

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Reducers {
  APP_SET_DATA = "APP_SET_DATA",
}

type AppPayload = {
  [Reducers.APP_SET_DATA]: {
    data: any[];
  };
};

export type AppActions = ActionMap<AppPayload>[keyof ActionMap<AppPayload>];

export type Actions = AppActions;

export const mainReducer = ({ app }: IState, action: Actions) => {
  return {
    app: AppReducer(app, action as AppActions),
  };
};
