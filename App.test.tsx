import { render } from "@testing-library/react-native";
import App from "./App";

describe("<App />", () => {
  it("Should render the app", () => {
    const app = render(<App />);
    expect(app).toBeDefined();
  });
});
