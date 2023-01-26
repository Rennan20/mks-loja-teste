import Link from "next/link";
import {
  ImageContainer,
  ImagesContainer,
  SucessContainer,
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
      <SucessContainer>
        <ImagesContainer>
          {cartItems.map((product) => (
            <ImageContainer key={product.id}>
              <Image
                src={product.photo}
                width={120}
                height={110}
                alt=""
              ></Image>
            </ImageContainer>
          ))}
        </ImagesContainer>
        <h1>Compra efetuada</h1>
        <p>
          Sua compra de{""} {totalproductsInCart} produtos já está a caminho da
          sua casa.
        </p>
        <Link href="/" onClick={() => clearCart()}>
          Voltar ao Catálogo
        </Link>
      </SucessContainer>
    </>
  );
}
