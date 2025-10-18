import { Container, Filters, Title, TopBar } from "@/components/shared/index";

export default function Home() {
  return (
    <>
      <Container className="pt-6">
        <Title size="lg" text="All pizzas" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container>
        <div className="flex gap-14">
          {/*Filter*/}
          <aside className="min-w-56 max-w-3xs flex-shrink-0">
            <Filters />
          </aside>

          {/*Product list*/}
          <div className="flex-1">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              Product List
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
