import Link from "next/link";
import React from "react";
import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from "../src/styles/pages/success";
import Image from "next/image";
import Head from "next/head";
import { useCart } from "../src/hooks/useCart";

export default function Sucess() {
  const { cartItems, clearCart } = useCart();
  const totalproductsInCart = cartItems.length;
  return (
    <>
      <Head>
        <title>Compra efetuada | MKS Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <ImagesContainer>
          {cartItems.map((product) => (
            <ImageContainer key={product.id}>
              <Image
                src={product.photo}
                width={110}
                height={100}
                alt=""
              ></Image>
              <p>{product.name}</p>
            </ImageContainer>
          ))}
        </ImagesContainer>

        <h1>Compra efetuada</h1>
        <p>
          {totalproductsInCart === 1
            ? `Seu produto já está à caminho da sua casa!`
            : `Sua compra de ${totalproductsInCart} produtos já está à caminho da sua casa!`}
        </p>
        <Link href="/" onClick={() => clearCart()}>
          Volte ao Catálogo, continue comprando
        </Link>
      </SuccessContainer>
    </>
  );
}
