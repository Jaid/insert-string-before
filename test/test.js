import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: insertStringBefore} = indexModule

it("should run", () => {
  expect(insertStringBefore("Heo", "e", "ww")).toBe("Hewwo")
  expect(insertStringBefore("13", "1", "2")).toBe("123")
  expect(insertStringBefore("13", "", "2")).toBe("213")
  expect(insertStringBefore("I am Sanic!", "Sanic", " the Hedgehog")).toBe("I am Sanic the Hedgehog!")
})