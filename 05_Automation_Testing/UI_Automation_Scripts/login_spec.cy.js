describe("Kiểm thử luồng Đăng nhập InternHub", () => {
  beforeEach(() => {
    // 1. Truy cập trang web
    cy.visit("http://localhost:4200/login");
  });

  it("Đăng nhập thành công với thông tin Admin", () => {
    // 2. Nhập Email - Dùng ID (#email) là cách chuẩn và nhanh nhất
    cy.get("#email")
      .should("be.visible")
      .type("admin@internhub.com", { delay: 50 });

    // 3. Nhập Password
    // Dựa trên cấu trúc Email, khả năng cao Password sẽ có id="password"
    // Nếu chạy vẫn lỗi chỗ này, bạn hãy Inspect tương tự ô Password nhé
    cy.get("#password").should("be.visible").type("admin", { log: false });

    // 4. Nhấn nút Đăng nhập
    // Thường nút submit sẽ là button có type="submit"
    cy.get('button[type="submit"]').click();

    // 5. Kiểm tra chuyển hướng
    cy.url({ timeout: 10000 }).should("include", "/dashboard");

    // 6. Khẳng định giao diện đã tải
    cy.contains(/Welcome/i).should("be.visible");
  });
});
