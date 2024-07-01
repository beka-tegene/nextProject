import { FC } from "react";
import { Product } from "../util/types";
import Image from "next/image";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className=" rounded overflow-hidden shadow my-4">
      <div className="relative max-h-[170px] min-h-[170px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="contain"
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <div className="px-6 py-4 flex flex-col gap-2">
        <div className="font-bold text-sm mb-2">{product.name}</div>
        <p className="text-gray-700 text-xs flex items-center gap-1">
          <span className="flex items-center ">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                className={`${
                  index < product.rating ? "text-[#DBAB3B]" : "text-gray-300"
                }`}
                size={12}
              />
            ))}
          </span>{" "}
          {product.rating > 0
            ? `${product.rating} reviews`
            : "(No reviews Yet)"}
        </p>
        <p className="text-gray-700 text-base font-bold">
          ${product.price} {product.rating === 0 && <span className="text-gray-500 line-through ml-2">$613</span>}
        </p>
        <div className="flex items-center gap-1">
          <button className="text-[#DBAB3B] bg-[#FBF5E9] px-3 py-1 rounded">
            Add To Cart
          </button>
          <div className="text-[#DBAB3B] bg-[#FBF5E9] w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer    ">
            <FaRegHeart />
          </div>
          <div className="text-[#DBAB3B] bg-[#FBF5E9] w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer">
            <IoShareSocialOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
