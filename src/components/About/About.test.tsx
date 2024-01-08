import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import About from "./About";

test("renders About component", () => {
    render(<About />);

    // Check if the "About me" heading is present
    expect(screen.getByText("About me")).toBeInTheDocument();

    // Check if the "Click to open the curtain" text is present
    expect(screen.getByText("Click to open the curtain")).toBeInTheDocument();

    // Click the curtain to toggle visibility
    fireEvent.click(screen.getByText("Click to open the curtain"));

    // Check if the curtain is open
    expect(screen.getByText("Click to open the curtain")).toHaveClass(
        "curtainOpen"
    );
});
