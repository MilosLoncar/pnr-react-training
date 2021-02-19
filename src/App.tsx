import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AnotherComponent from "./components/another-component/another-component";
import GlobalDataProviderRefactor, {
  GlobalDataContextRefactor,
} from "./context/context-provider";
import { Reducers } from "./reducers/main.reducer";

type IDataType = {
  name: string;
  description: string;
};

function App() {
  const { state, dispatch } = React.useContext(GlobalDataContextRefactor);

  React.useLayoutEffect(() => {
    console.log(state);

    dispatch({
      type: Reducers.APP_SET_DATA,
      payload: {
        data: [
          { name: "1", description: "desc" },
          { name: "2", description: "2323" },
          { name: "3", description: "4242" },
          { name: "4", description: "55555" },
        ],
      },
    });
  }, []);

  return (
    <div className="App">
      <div>
        <section>
          {state.app.data.map((single: IDataType, key: number) => {
            return (
              <AnotherComponent
                type="first"
                key={key}
                name={single.name}
                desc={single.description}
              />
            );
          })}
        </section>
        <section>
          {state.app.data.map((single: IDataType, key: number) => {
            return (
              <AnotherComponent
                type="second"
                key={key}
                name={single.name}
                desc={single.description}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
