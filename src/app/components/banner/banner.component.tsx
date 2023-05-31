import {
  CloseButton,
  BannerPrice,
  BannerStyled,
  BannerText,
  CloseButtonText,
} from "./banner.component.style";
import { ButtonComponent } from "../button";
import CloseIcon from "../../../assets/x-01.svg";
import { useState } from "react";

type BannerOptions = {
  variant?: "desktop" | "mobile";
};

export const BannerComponent: React.FC<BannerOptions> = ({
  variant = "desktop",
}) => {
  const [showBanner, setShowBanner] = useState(true);

  const handleHideBanner = () => {
    setShowBanner(false);
  };
  return (
    <>
      {showBanner && (
        <BannerStyled>
          {variant === "mobile" && (
            <CloseButton onClick={handleHideBanner}>
              <CloseButtonText>Fechar</CloseButtonText>
              <img src={CloseIcon} alt="Close Button" />
            </CloseButton>
          )}
          <BannerText>
            Não limite sua criatividade, junte-se a família Blocks por apenas{" "}
            <BannerPrice>BRL 19,99</BannerPrice>
          </BannerText>
          <ButtonComponent />
        </BannerStyled>
      )}
    </>
  );
};
