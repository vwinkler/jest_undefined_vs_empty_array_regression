describe("Jest characterization", () => {
  test("I expect this to fail", () => {
    const foo = jest.fn()
    foo([])
    expect(foo).toHaveBeenCalledWith([undefined])
  })
  test("I expect this to pass", () => {
    const foo = jest.fn()
    foo([undefined])
    expect(foo).not.toHaveBeenCalledWith([])
  })
});
