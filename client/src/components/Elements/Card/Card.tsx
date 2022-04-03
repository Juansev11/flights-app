import { CardContainer } from './Card.styles';

type CardProps = React.ComponentPropsWithoutRef<'div'>;

export const Card: React.FC<CardProps> = ({ children, ...props }) => (
  <CardContainer {...props}>{children}</CardContainer>
);
