import React from "react";
import Router from "next/router";
import { LogoBox, LogoImage } from "./logo.style";
type LogoProps = {
  imageUrl: string;
  alt: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const Logo: React.FC<LogoProps> = ({ imageUrl, alt, onClick, style }) => {
  function onLogoClick() {
    Router.push("/");
    if (onClick) {
      onClick();
    }
  }
  return (
    <LogoBox onClick={onLogoClick}>
      <LogoImage style={style} src={imageUrl} alt={alt} />
    </LogoBox>
  );
};

export default Logo;
