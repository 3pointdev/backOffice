// import { fetchProducts } from "src/lib/queries/products";
import ProductTable from "components/tables/productTable";
import { fetchProducts } from "src/lib/queries/products";

export default async function ProductsPage() {
  const initialData = await fetchProducts({ page: 1, limit: 10 });

  return (
    <div className="shrink-0 h-max min-h-[calc(100vh-128px)] p-4">
      <ProductTable initialData={initialData} />
    </div>
  );
}
