import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import {
  CartClose,
  CartContent,
  CartFinalization,
  CartProduct,
  FinalizationDetails,
  CartButtonContainer,
  ContainerQuantity,
  ButtonsContainer,
} from "./styles";
import { Minus, Plus, ShoppingCart, X } from "phosphor-react";
import Image from "next/image";
import { useCart } from "../../hooks/useCart";
import Link from "next/link";
import "../../context/CartContext";

export function Cart() {
  const {
    cartItems,
    cartTotal,
    removeProductFromCart,
    changeCartItemQuantity,
  } = useCart();
  const cartItemsQuantity = cartItems.length;
  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButtonContainer>
          <ShoppingCart />
          <span>{cartItemsQuantity}</span>
        </CartButtonContainer>
      </Dialog.Trigger>
      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size="28" />
          </CartClose>
          <h2>
            Carrinho <br />
            de compras
          </h2>
          <section>
            {cartItemsQuantity <= 0 && (
              <p className="texto">Seu carrinho ainda está vazio! </p>
            )}
            {cartItems.map((cartItem) => (
              <CartProduct key={cartItem.id}>
                <Image width={56} height={60} src={cartItem.photo} alt="" />
                <span>{cartItem.name}</span>
                <ContainerQuantity>
                  <p>Qtd:</p>
                  <ButtonsContainer>
                    <button
                      onClick={() =>
                        changeCartItemQuantity(cartItem.id, "decrease")
                      }
                      disabled={cartItem.quantity <= 1}
                    >
                      <Minus size={12} weight="fill" />
                    </button>
                    <span>{cartItem.quantity}</span>
                    <button
                      onClick={() =>
                        changeCartItemQuantity(cartItem.id, "increase")
                      }
                    >
                      <Plus size={15} weight="fill" />
                    </button>
                  </ButtonsContainer>
                </ContainerQuantity>
                <strong>
                  {formatCurrency(cartItem.price * cartItem.quantity)}
                </strong>
                <button
                  className="close"
                  onClick={() => removeProductFromCart(cartItem.id)}
                >
                  <X size="20" weight="bold" />{" "}
                </button>
              </CartProduct>
            ))}
          </section>
          <CartFinalization>
            <FinalizationDetails>
              <span>Total:</span>
              <p>{formatCurrency(cartTotal)}</p>
            </FinalizationDetails>
            <button disabled={cartItemsQuantity <= 0}>
              {cartItemsQuantity > 0 && (
                <Link href="success">Finalizar Compra</Link>
              )}
            </button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
