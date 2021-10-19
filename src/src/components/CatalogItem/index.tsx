import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store";
import { addProductToCartRequest } from "../../store/modules/cart/actions";
import { IProduct } from "../../store/modules/cart/types";

interface CatalogItemProps {
  product: IProduct;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {

  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => state.cart.failureStockCheck.includes(product.id));

  const handleAddProductTocart = useCallback((product: IProduct) => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch]);

  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span>{" "}
      <button type="button" onClick={() => handleAddProductTocart(product)}>
        Comprar
      </button>

      {hasFailedStockCheck && <span style={{color: 'red'}}>Falta de estoque</span>}
    </article>
  );
};
