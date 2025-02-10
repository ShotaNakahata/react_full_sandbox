import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from '../App';

describe("Greeting", () => {
    test('render "Hello worls"', () => {
        render(<App />);
        const h2El = screen.getByText("Hello World")
        expect(h2El).toBeInTheDocument()
    })
    test('render "good to see you" if the button was NOT clicked', () => {
        render(<App />);
        const h2El = screen.getByText("It is good to see you")
    })

    test('render "Changed" if the button was clicked', async () => {
        render(<App />);
        const button = screen.getByRole("button", { name: "Change text" })
        userEvent.click(button)
        const h2El = await screen.getByText("Changed")
        expect(h2El).toBeInTheDocument()
    })
    test('NOT render "good to see you" if the button was clicked', async () => {
        render(<App />);
        const button = screen.getByRole("button", { name: "Change text" })
        userEvent.click(button)
        const h2El = screen.queryByText("It is good to see you")
        expect(h2El).toBeNull()
    })
})