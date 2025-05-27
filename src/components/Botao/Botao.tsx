import React from "react";
import style from "./Botao.module.scss";

export class Botao extends React.Component<{
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}> {
  render() {
    const { type = "button", children } = this.props;
    return (
      <button type={type} className={style.botao}>
        {children}
      </button>
    );
  }
}
