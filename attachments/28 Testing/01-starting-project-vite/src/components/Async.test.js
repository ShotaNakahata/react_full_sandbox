import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("Async component", () => {
    test('render post id succeds', async () => {
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: "p1", title: "First post" }],
        })
        render(<Async />)
        const listItemsEl = await screen.findAllByRole("listitem")
        expext(listItemsEl).not.toHaveLength(0);//toBeInTheDocumentにしたらどうなる？
    })
})