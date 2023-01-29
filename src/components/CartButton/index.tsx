import { Handbag } from "phosphor-react";
import { ButtonContainer } from "./styles";

export function CartButton() {
  return (
    <ButtonContainer>
      <Handbag width={12} height={13.5} />
      <strong>COMPRAR</strong>
    </ButtonContainer>
  );
}
