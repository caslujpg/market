import { DividerGradient, IconWrapper } from "./header.component.style";
import AppIcon from "../../../assets/icon-web.svg";

export const HeaderComponent = () => {
  return (
    <>
      <IconWrapper>
        <img src={AppIcon} alt="App Icon" />
      </IconWrapper>
      <DividerGradient />
    </>
  );
};
