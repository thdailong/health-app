import Container from "../components/Container";
import GridLayout from "../components/GridLayout";
import Button from "../components/Button";

const MainPage = () => {
  return (
    <div className="">
      <Container>
        <h1 className="text-dark-600 mb-4 text-3xl font-bold">Main Page</h1>
        <p className="text-gray-400 text-lg mb-8">
          Welcome to Health App - Track your health journey
        </p>

        <h2 className="text-dark-600 mb-4 text-2xl font-semibold">
          Grid Layout Demo (2 rows × 4 items)
        </h2>
        <GridLayout className="mb-8">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-dark-600 font-semibold"
            >
              Item {i + 1}
            </div>
          ))}
        </GridLayout>

        <h2 className="text-dark-600 mb-4 text-2xl font-semibold">
          Button Demo
        </h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary" onClick={() => alert("Primary clicked!")}>
            Primary Button
          </Button>
          <Button
            variant="secondary"
            onClick={() => alert("Secondary clicked!")}
          >
            Secondary Button
          </Button>
          <Button variant="outline" onClick={() => alert("Outline clicked!")}>
            Outline Button
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default MainPage;
