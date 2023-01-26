import { render, screen } from "@testing-library/react"
import About from "../pages/About/Index"


describe("About component", () => {
    it("should render the About component correctly", () => {
        render(<About />);
        const element = screen.getByRole("heading");
        expect(element).toBeInTheDocument();
    })
})