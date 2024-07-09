describe("E2Eテスト", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3000");
  });

  it("都道府県を選択できる", () => {
    const button = cy.contains("兵庫県");
    const checkbox = button.children();
    button.click();
    checkbox.should("be.checked");
    button.click();
    checkbox.should("not.be.checked");
  });

  it("人口区分が切り替えられる", () => {
    cy.get("select").select("年少人口");
    cy.contains("総人口").should("not.be.selected");
  });

  it("レスポンシブ対応が目視で確認できる", () => {
    cy.viewport("iphone-x");
  });
});
