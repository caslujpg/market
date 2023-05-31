import { ButtonComponent } from "../button";
import {
  DividerGradient,
  HeaderPrice,
  HeaderStyled,
  HeaderText,
  IconWrapper,
} from "./header.component.style";
import AppIcon from "../../../assets/icon-web.svg";

export const HeaderComponent = () => {
  return (
    <>
      <HeaderStyled>
        <HeaderText>
          Não limite sua criatividade, junte-se a familia Blocks por apenas{" "}
          <HeaderPrice>BRL 19,99</HeaderPrice>
        </HeaderText>
        <ButtonComponent />
      </HeaderStyled>
      <IconWrapper>
        <img src={AppIcon} alt="App Icon" />
      </IconWrapper>
      <DividerGradient />
    </>
  );
};
