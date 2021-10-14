import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import api from "../../services/api";
import { addProductToCart } from "../../store/modules/cart/actions";

import { IProduct } from "../../store/modules/cart/types";

export function Catalog(){
  const [catalog, setCatalog] = useState<IProduct[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('products');
      const data = response.data as IProduct[];
      setCatalog(data);
    }

    getProducts();
  }, []);

  const handleAddProductTocart = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product))
  }, [dispatch]);

  return (
    <main>

      <h1>Catalog</h1>

      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <span>{product.price}</span> {" "}

          <button type="button" onClick={() => handleAddProductTocart(product)}>Comprar</button>
        </article>
      ))}
    </main>
  );
}