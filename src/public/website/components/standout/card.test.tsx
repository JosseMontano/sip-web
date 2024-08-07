import { Card } from "./card";
import { render, screen } from "@testing-library/react";

describe("Website-Card-Categories", () => {
  test("should has a title", () => {
    const img =
      "https://img.freepik.com/vector-gratis/ilustracion-arte-dibujos-animados-aislado-queso_56104-624.jpg";
    const title = "Platillo Principal";
    render(
      <Card
        imageUrl={img}
        categoryTitle={title}
        categoryQuantityPlaces="(10 lugares)"
      />
    );
    expect(screen.getByText(title)).toBeDefined();
  });

  test("should has a description", () => {
    const img =
      "https://img.freepik.com/vector-gratis/ilustracion-arte-dibujos-animados-aislado-queso_56104-624.jpg";
    const title = "Platillo Principal";
    const description = "10 lugares";
    render(
      <Card
        imageUrl={img}
        categoryTitle={title}
        categoryQuantityPlaces={description}
      />
    );
    expect(screen.getByText(description)).toBeDefined();
  });

  test("should have an image", () => {
    const img =
      "https://img.freepik.com/vector-gratis/ilustracion-arte-dibujos-animados-aislado-queso_56104-624.jpg";
    const title = "Platillo Principal";
    render(
      <Card
        imageUrl={img}
        categoryTitle={title}
        categoryQuantityPlaces="(10 lugares)"
      />
    );
    const image = screen.getByTitle('img');
    expect(image).toBeDefined();
  });
});
