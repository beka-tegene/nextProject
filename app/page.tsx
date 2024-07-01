"use client";
import { useRouter } from "next/navigation";
import ProductList from "./Components/ProductList";
import { products as allProducts } from "./util/products";
import { FaFilter, FaStar } from "react-icons/fa";

const Home: React.FC<{
  searchParams: { brand?: string; color?: string; rating?: string };
}> = ({ searchParams }) => {
  const { brand, color, rating } = searchParams;
  const router = useRouter();

  let filteredProducts = allProducts;

  if (brand) {
    filteredProducts = filteredProducts.filter(
      (product) => product.brand === brand
    );
  }

  if (color) {
    filteredProducts = filteredProducts.filter(
      (product) => product.color === color
    );
  }

  if (rating) {
    filteredProducts = filteredProducts.filter(
      (product) => product.rating.toString() === rating
    );
  }

  const handleFilterChange = (key: string, value: string | boolean) => {
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set(key, value.toString());
    } else {
      params.delete(key);
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="my-4 col-span-3 px-5 max-lg:hidden">
        <div className="bg-[#F7F7F7] px-7 py-2 flex flex-col gap-4 rounded">
          <h1 className="flex gap-2 items-center">
            <FaFilter /> Filters by 
          </h1>
          <div className="flex flex-col gap-4">
            <h3>CATEGORIES</h3>
            <h5 className="text-lg font-semibold">Brands</h5>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center justify-between">
                <label className="text-sm" htmlFor="Apple">Apple</label>
                <input
                  type="checkbox"
                  name="brand"
                  id="Apple"
                  checked={brand === "apple"}
                  onChange={(e) =>
                    handleFilterChange("brand", e.target.checked && "apple")
                  }
                />
              </li>
              <li className="flex items-center justify-between">
                <label className="text-sm" htmlFor="Samsung">Samsung</label>
                <input
                  type="checkbox"
                  name="brand"
                  id="Samsung"
                  checked={brand === "samsung"}
                  onChange={(e) =>
                    handleFilterChange("brand", e.target.checked && "samsung")
                  }
                />
              </li>
              <li className="flex items-center justify-between">
                <label className="text-sm" htmlFor="Tecno">Tecno</label>
                <input
                  type="checkbox"
                  name="brand"
                  id="Tecno"
                  checked={brand === "tecno"}
                  onChange={(e) =>
                    handleFilterChange("brand", e.target.checked && "tecno")
                  }
                />
              </li>
              <li className="flex items-center justify-between">
                <label className="text-sm" htmlFor="Huawei">Huawei</label>
                <input
                  type="checkbox"
                  name="brand"
                  id="Huawei"
                  checked={brand === "huawei"}
                  onChange={(e) =>
                    handleFilterChange("brand", e.target.checked && "huawei")
                  }
                />
              </li>
              <li className="flex items-center justify-between">
                <label className="text-sm" htmlFor="Nokia">Nokia</label>
                <input
                  type="checkbox"
                  name="brand"
                  id="Nokia"
                  checked={brand === "nokia"}
                  onChange={(e) =>
                    handleFilterChange("brand", e.target.checked && "nokia")
                  }
                />
              </li>
            </ul>
          </div>
          <hr />
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Product Rating</h3>
            <ul className="flex flex-col gap-2">
              {[...Array(6)].map((_, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between text-gray-300"
                >
                  <label
                    htmlFor={index.toString()}
                    className="flex items-center"
                  >
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <FaStar
                        key={starIndex}
                        className={
                          starIndex < index ? "text-[#DBAB3B]" : "text-gray-300"
                        }
                      />
                    ))}
                  </label>
                  <input
                    type="checkbox"
                    name="rating"
                    id={index.toString()}
                    checked={rating === index.toString()}
                    onChange={(e) =>
                      handleFilterChange(
                        "rating",
                        e.target.checked && index.toString()
                      )
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Color</h3>
            <ul className="flex flex-col gap-2">
              {["black", "blue", "gold", "silver", "purple"].map((color) => (
                <li key={color} className="flex items-center justify-between">
                  <label
                    htmlFor={color}
                    className={`flex items-center text-sm w-1/3 justify-between ${
                      searchParams.color === color
                        ? "font-semibold text-gray-800 "
                        : "text-gray-600 "
                    }`}
                  >
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                    <span
                      className={`${
                        color === "black"
                          ? "bg-black"
                          : color === "blue"
                          ? "bg-blue-800"
                          : color === "gold"
                          ? "bg-[#DBAB3B]"
                          : color === "silver"
                          ? "bg-gray-300"
                          : color === "purple"
                          ? "bg-purple-800"
                          : ""
                      } rounded-full w-4 h-4 `}
                    ></span>
                  </label>
                  <input
                    type="checkbox"
                    id={color}
                    checked={searchParams.color === color}
                    onChange={(e) =>
                      handleFilterChange("color", e.target.checked ? color : "")
                    }
                    className="mr-2 cursor-pointer"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="col-span-9 max-lg:col-span-12 max-lg:px-10">
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default Home;
