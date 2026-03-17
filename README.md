InternHub_Testing_Artifacts/
├── 01_BlackBox_Testing/ # [Câu a] Kiểm thử hộp đen
│ ├── TestCases_Function_FE.xlsx # Kỹ thuật: Phân vùng tương đương, Giá trị biên cho UI
│ └── TestCases_API_BE.xlsx # Kỹ thuật: Phân tích bảng quyết định cho API Endpoints
├── 02_WhiteBox_Testing/ # [Câu b, g] Kiểm thử hộp trắng & Đơn vị
│ ├── Unit_Test_Source_BE/ # Mã nguồn test (JUnit 5, Mockito) tại src/test/java
│ ├── Branch_Coverage_Report.pdf # Báo cáo độ bao phủ nhánh (JaCoCo/Clover)
│ └── Control_Flow_Diagrams/ # Sơ đồ luồng cho thuật toán xử lý logic
├── 03_Static_Testing/ # [Câu e] Kiểm thử tĩnh
│ ├── SonarLint_Scan_Results.pdf # Kết quả quét Code Smells & Security Hotspots
│ └── Document_Review_Checklist.pdf # Review tài liệu SRS và Design Specification
├── 04_NonFunctional_Testing/ # [Câu f] Kiểm thử phi chức năng
│ ├── JMeter_Scripts/ # Kịch bản giả lập tải (.jmx)
│ ├── Performance_Report_JMeter.pdf # Biểu đồ Response Time & Throughput
│ └── Security_Scan_Report.pdf # Quét lỗ hổng bảo mật cơ bản
├── 05_Automation_Testing/ # [Câu g] Kiểm thử tự động Giao diện
│ ├── UI_Automation_Scripts/ # Mã nguồn Playwright/Cypress/Selenium
│ └── Execution_Video_Demo.mp4 # Video ghi hình script chạy tự động
├── 06_Bug_Management/ # [Câu d] Quản lý lỗi
│ ├── Bug_Log_InternHub.xlsx # Nhật ký theo dõi lỗi (ID, Severity, Status)
│ └── Bug_Evidences/ # Ảnh chụp/Log minh chứng lỗi hệ thống
├── 07_Quality_Metrics/ # [Câu c] Chỉ số chất lượng
│ └── Final_Testing_Report.pdf # Tổng kết Pass Rate, Defect Density, Coverage %
└── 08_Manual_vs_Automation/ # [Câu h] Chiến lược kiểm thử
└── Strategy_Document.pdf # Giải trình mô hình kết hợp Manual & Automation
