import { mapStateToProps } from "../NavbarContainer";

jest.mock("modules/Auth/AuthSelectors", () => ({
  getUsername: () => "User 123"
}));

describe("AppRoutesContainer tests", () => {
  it("Should be a function", () => {
    expect(typeof mapStateToProps).toEqual("function");
  });
  it("should return an object", () => {
    expect(typeof mapStateToProps({})).toEqual("object");
  });
  it("should have property user", () => {
    const props = mapStateToProps({});

    expect(props).toHaveProperty("user");
    expect(props.user).toEqual("User 123");
  });
});
