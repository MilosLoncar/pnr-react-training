import React from "react";

type AnotherComponentProps = {
  type: "first" | "second";
  name: string;
  desc: string;
};

export default function AnotherComponent(props: AnotherComponentProps) {
  return (
    <figure>
      {props.type === "first" ? <h1>{props.name}</h1> : <h1>WHATEVER</h1>}
      <p>{props.desc}</p>
    </figure>
  );
}
