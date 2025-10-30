import { Container, Filters, Title, TopBar } from "@/components/shared/index";
import { ProductCard } from "@/components/shared/product-card";

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
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <ProductCard
                product={{
                  id: 1,
                  img: "https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif",
                  title: "Pepperoni Pizza",
                  price: 13,
                }}
                className="max-w-sm mx-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
