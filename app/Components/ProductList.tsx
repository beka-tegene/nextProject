import { FC } from "react";
import { Product } from "../util/types";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <>
      {products.length > 0 ? (
        <div className="grid max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2 items-stretch ">
          {products.map((product) => (
            <div key={product.id} className="">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <h1 className="h-screen flex flex-col items-center justify-center">WE DID NOT HAVE THIS TYPE OF ITEMS</h1>
      )}
    </>
  );
};

export default ProductList;
