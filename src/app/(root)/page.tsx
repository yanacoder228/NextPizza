import { Categories, Container, Title } from "@/components/shared/index";

export default function Home() {
  return (
    <>
      <Container className="pt-10">
        <Title size="lg" text="All pizzas" className="font-extrabold" />
        <Categories />
      </Container>
    </>
  );
}
