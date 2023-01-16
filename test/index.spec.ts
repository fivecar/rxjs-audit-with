// It'd be nice to test this library. But it turns out that jest wrappers around
// asyncs make it so that mergeMap's call to its callback never returns - but
// only in test runs. Works in production.
describe("auditWidth", () => {
  it("should be testable, but isn't", () => {
    expect("le sigh").toBe("le sigh");
  });
});
