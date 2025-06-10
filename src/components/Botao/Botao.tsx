import React from "react";
import style from "./Botao.module.scss";

export class Botao extends React.Component<{
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
}> {
  render() {
    const { type = "button", onClick, children } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.botao}>
        {children}
      </button>
    );
  }
}
