🚀 InternHub Testing Project - Midterm Artifacts
Dự án này lưu trữ toàn bộ hồ sơ minh chứng kiểm thử (testing artifacts) cho hệ thống InternHub (Quản lý Thực tập sinh). Đây là nội dung thực hiện cho bài bảo vệ giữa kỳ, tập trung vào việc áp dụng các kỹ thuật kiểm thử từ cơ bản đến nâng cao.

📋 Tổng quan dự án
Hệ thống: InternHub (Backend: Spring Boot, Frontend: Angular).

Mục tiêu: Đảm bảo chất lượng phần mềm thông qua quy trình kiểm thử toàn diện (Manual, Unit, API, Performance và UI Automation).

📁 Cấu trúc thư mục minh chứng (Artifacts Structure)
Hệ thống thư mục được tổ chức khoa học để đáp ứng các tiêu chí đánh giá từ a đến h của Giảng viên:

1. [Câu a] Kiểm thử hộp đen (01_BlackBox_Testing/)
   Nội dung: Các file Excel chứa Test Case cho Front-end và API.

Kỹ thuật: Áp dụng Phân vùng tương đương và Phân tích giá trị biên.

Số lượng: 70 kịch bản kiểm thử.

2. [Câu b, g] Kiểm thử hộp trắng (02_WhiteBox_Testing/)
   Mã nguồn: Unit Test sử dụng JUnit 5 và Mockito tại thư mục Unit_Test_Source_BE.

Báo cáo: Độ bao phủ nhánh (Branch Coverage) được đo lường qua JaCoCo (~21% Instruction Coverage).

Tài liệu: Sơ đồ luồng dữ liệu (Control Flow Diagram) cho logic nghiệp vụ createTask.

3. [Câu e] Kiểm thử tĩnh (03_Static_Testing/)
   Tài liệu: Biên bản rà soát (Peer Review) đặc tả yêu cầu SRS.

Mã nguồn: Kết quả quét lỗi tĩnh, Code Smells và Security Hotspots từ SonarLint.

4. [Câu f] Kiểm thử phi chức năng (04_NonFunctional_Testing/)
   Công cụ: Apache JMeter.

Nội dung: Kịch bản giả lập 100 người dùng (.jmx) và báo cáo hiệu năng (Response Time, Error Rate).

5. [Câu g] Kiểm thử tự động UI (05_Automation_Testing/)
   Công cụ: Cypress.

Minh chứng: Script tự động luồng Login và Video quay màn hình thực thi (Execution_Video_Demo.mp4).

6. [Câu d] Quản lý lỗi (06_Bug_Management/)
   Nội dung: File Bug_Log_InternHub.xlsx quản lý 18 lỗi phát hiện được.

Phân loại: Đầy đủ thông tin Severity, Status và các ảnh chụp minh chứng lỗi.

7. [Câu c] Chỉ số chất lượng (07_Quality_Metrics/)
   Báo cáo: Final_Testing_Report.docx tổng kết các chỉ số: Pass Rate (40%), Defect Density, và Test Coverage.

8. [Câu h] Chiến lược kiểm thử (08_Manual_vs_Automation/)
   Tài liệu: Giải trình việc kết hợp kiểm thử thủ công (cho tính năng mới/UI) và tự động (cho kiểm thử hồi quy).

🛠 Công cụ sử dụng (Tech Stack)

Hạng mục,Công cụ
Unit Test / Coverage,"JUnit 5, Mockito, JaCoCo"
Static Scan,SonarLint
UI Automation,Cypress (JavaScript)
Performance,Apache JMeter
API Testing,Postman
Management,"MS Excel, Word"

🚀 Hướng dẫn thực thi
Chạy Unit Test (Thành viên 2)

# Di chuyển vào thư mục backend

mvn test

Chạy UI Automation (Thành viên 3)

# Cài đặt dependencies

npm install

# Mở giao diện Cypress để chạy trực tiếp

npx cypress open

# Hoặc chạy ở chế độ ẩn (Headless)

npx cypress run
