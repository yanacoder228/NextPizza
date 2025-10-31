import { Container, Filters, Title, TopBar } from "@/components/shared/index";
import { ProductCard } from "@/components/shared/product-card";
import { ProductGroupList } from "@/components/shared/product-group-list";
import { products } from "@/mochdata/products";

export default function Home() {
  //   const [filter, setFilter] = useState("");

  //   const handleFilterChange = (value: string) => {
  //     setFilter(value);
  //   };

  return (
    <>
      <Container className="pt-6">
        <Title size="lg" text="All pizzas" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container>
        <div className="flex gap-14 mt-9">
          {/*Filter*/}
          <aside className="min-w-56 max-w-3xs flex-shrink-0">
            <Filters />
          </aside>

          {/*Product list*/}
          <div className="flex-1">
            <div className="flex flex-col gap-10">
              <ProductGroupList
                groupTitle="Pizzas"
                products={products}
                categoryId={1}
              />
              <ProductGroupList
                groupTitle="Combos"
                products={products}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
