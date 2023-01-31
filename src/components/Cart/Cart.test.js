import { render, fireEvent } from "@testing-library/react";
import React from "react";

import { CartContent } from "./index";

jest.mock("../../hooks/useCart", () => ({
  useCart: jest.fn(() => ({
    cartItems: [
      {
        id: 1,
        name: "Product 1",
        photo: "product1.jpg",
        price: 19.99,
        quantity: 2,
      },
      {
        id: 2,
        name: "Product 2",
        photo: "product2.jpg",
        price: 29.99,
        quantity: 1,
      },
    ],
    cartTotal: 69.97,
    removeProductFromCart: jest.fn(),
    changeCartItemQuantity: jest.fn(),
  })),
}));

describe("CartContent", () => {
  it("renders the correct number of cart items", () => {
    const { getByText } = render(<CartContent />);
    const cartItemCount = useCart().cartItems.length;
    expect(getByText(`${cartItemCount}`)).toBeInTheDocument();
  });

  it("displays the correct total price", () => {
    const { getByText } = render(<CartContent />);
    const cartTotal = useCart().cartTotal;
    expect(getByText(`R$ ${cartTotal.toFixed(2)}`)).toBeInTheDocument();
  });

  it("calls the removeProductFromCart method when a product is removed", () => {
    const { getByTestId } = render(<CartContent />);
    const removeProductFromCart = useCart().removeProductFromCart;
    fireEvent.click(getByTestId("remove-product-1"));
    expect(removeProductFromCart).toHaveBeenCalledWith(1);
  });

  it("calls the changeCartItemQuantity method when a product quantity is changed", () => {
    const { getByTestId } = render(<CartContent />);
    const changeCartItemQuantity = useCart().changeCartItemQuantity;
    fireEvent.click(getByTestId("decrease-quantity-product-1"));
    expect(changeCartItemQuantity).toHaveBeenCalledWith(1, "decrease");
    fireEvent.click(getByTestId("increase-quantity-product-1"));
    expect(changeCartItemQuantity).toHaveBeenCalledWith(1, "increase");
  });
});
