import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: insertStringBefore} = indexModule

it("should run", () => {
  expect(insertStringBefore("I am the Hedgehog!", "the", "Sanic ")).toBe("I am Sanic the Hedgehog!")
})