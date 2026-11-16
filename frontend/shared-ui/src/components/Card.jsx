import React, { createContext, useContext } from "react";

const CardContext = createContext({ tone: "default" });

export function Card({ tone = "default", children, ...rest }) {
  return (
    <CardContext.Provider value={{ tone }}>
      <div className={`nh-card nh-card--${tone}`} {...rest}>
        {children}
      </div>
    </CardContext.Provider>
  );
}

function Header({ children }) {
  const { tone } = useContext(CardContext);
  return (
    <div className={`nh-card__header nh-card__header--${tone}`}>{children}</div>
  );
}

function Body({ children }) {
  return <div className="nh-card__body">{children}</div>;
}

function Footer({ children }) {
  return <div className="nh-card__footer">{children}</div>;
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
