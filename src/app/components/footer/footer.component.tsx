import { FooterWrapper, ButtonLink } from "./footer.component.style";

export const FooterComponent = () => {
  return (
    <FooterWrapper>
      <ButtonLink href="https://www.blocksrvt.com/pt/sobre">Sobre</ButtonLink>
      <ButtonLink href="https://faq.blocksrvt.com/pt-BR/">FAQ</ButtonLink>
      <ButtonLink href="https://www.blocksrvt.com/pt/termos-de-uso">
        Termos de uso
      </ButtonLink>
      <ButtonLink href="https://www.blocksrvt.com/pt/politica-de-privacidade">
        Politicas de privacidade
      </ButtonLink>
    </FooterWrapper>
  );
};
