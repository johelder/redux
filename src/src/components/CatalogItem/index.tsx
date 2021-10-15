import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/modules/cart/actions";
import { IProduct } from "../../store/modules/cart/types";

interface CatalogItemProps {
  product: IProduct;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {

  const dispatch = useDispatch();

  const handleAddProductTocart = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product))
  }, [dispatch]);

  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span>{" "}
      <button type="button" onClick={() => handleAddProductTocart(product)}>
        Comprar
      </button>
    </article>
  );
};
