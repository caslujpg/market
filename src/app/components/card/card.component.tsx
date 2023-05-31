import ArrowUpRightIcon from "../../../assets/arrow-up-right.svg";
import {
  Column,
  Divider,
  Card,
  CardButton,
  CardDivisor,
  Row,
  CardText,
  CardWrapper,
} from "./card.component.style";

export type CardOptions = {
  id: string;
  details: {
    name: string;
    description: string;
  };
};

export const CardComponent: React.FC<CardOptions> = (props: CardOptions) => {
  function truncate(text: string, length: number) {
    return text?.length > length ? text.substring(0, length - 1) + "..." : text;
  }

  return (
    <Row>
      <CardWrapper>
        <Card>
          <img
            src={`https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${props.id}.jpg`}
          />
        </Card>

        <Divider />

        <CardButton>
          <Column>
            <CardText>{truncate(props.details.name, 25)}</CardText>
            <CardText>{truncate(props.details.description, 25)}</CardText>
          </Column>
          <CardDivisor />
          <img src={ArrowUpRightIcon} alt="Arrow-up-right" />
        </CardButton>
      </CardWrapper>
    </Row>
  );
};
