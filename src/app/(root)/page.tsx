import { Container, Title, TopBar } from "@/components/shared/index";

export default function Home() {
  return (
    <>
      <Container className="pt-6">
        <Title size="lg" text="All pizzas" className="font-extrabold" />
      </Container>
      <TopBar />
    </>
  );
}
