"use client";
import ProductDto from "src/dtos/products/product.dto";

interface ProductTableProps {
  initialData: {
    page: number;
    limit: number;
    total: number;
    list: ProductDto[];
  };
}

export default function ProductTable({ initialData }: ProductTableProps) {
  return <div></div>;
}
