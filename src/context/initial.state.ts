export type IState = {
  app: {
    data: any[];
  };
};

export const store: IState = {
  app: {
    data: [
      { name: "SomeWW random name", description: "desc" },
      { name: "Some random name", description: "2323" },
      { name: "Some random name", description: "4242" },
      { name: "Some random name", description: "55555" },
    ],
  },
};
