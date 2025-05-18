# MomBabyShop

MomBabyShop là một ứng dụng web React dành cho cửa hàng thương mại điện tử chuyên về các sản phẩm dành cho mẹ và bé. Ứng dụng được xây dựng bằng React, TypeScript, Vite và TailwindCSS.

## Xem trước

![MomBabyShop](https://i.imgur.com/PLACEHOLDER.png)

## Tính năng

- Thiết kế đáp ứng cho cả máy tính và thiết bị di động
- Trưng bày sản phẩm nổi bật
- Phân loại theo danh mục
- Phần Blog
- Chức năng giỏ hàng
- Điều hướng thân thiện với người dùng

## Yêu cầu hệ thống

- Node.js 16.x trở lên
- npm 8.x trở lên

## Cài đặt

1. Sao chép kho mã nguồn về máy của bạn:

```bash
git clone https://github.com/your-username/MomBabyShop.git
cd MomBabyShop
```

2. Cài đặt các gói phụ thuộc:

```bash
npm install
```

## Phát triển

Để khởi động máy chủ phát triển:

```bash
npm run dev
```

Việc này sẽ khởi động máy chủ phát triển tại `http://localhost:5173`. Trang sẽ tự động tải lại khi bạn thay đổi mã nguồn.

## Xây dựng cho môi trường Production

Để xây dựng ứng dụng cho môi trường production:

```bash
npm run build
```

Lệnh này sẽ tạo ra các tệp đã được tối ưu hóa trong thư mục `dist`.

## Xem trước phiên bản Production

Để xem trước phiên bản production trên máy cục bộ:

```bash
npm run preview
```

## Kiểm tra chất lượng mã nguồn

Để kiểm tra các vấn đề về chất lượng mã nguồn:

```bash
npm run lint
```

## Cấu trúc dự án

```
MomBabyShop/
├── public/           # Tài nguyên tĩnh
├── src/              # Mã nguồn
│   ├── components/   # Các thành phần React
│   │   ├── BlogSection.tsx
│   │   ├── CategorySection.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   └── PromotionBanner.tsx
│   ├── App.tsx       # Thành phần App chính
│   ├── index.css     # Style toàn cục (TailwindCSS)
│   └── main.tsx      # Điểm khởi đầu
├── index.html        # Mẫu HTML
├── package.json      # Các phụ thuộc và scripts
├── tsconfig.json     # Cấu hình TypeScript
├── vite.config.ts    # Cấu hình Vite
└── README.md         # Tài liệu dự án
```

## Công nghệ sử dụng

- [React](https://reactjs.org/) - Thư viện UI
- [TypeScript](https://www.typescriptlang.org/) - JavaScript với kiểm tra kiểu dữ liệu
- [Vite](https://vitejs.dev/) - Công cụ xây dựng nhanh và máy chủ phát triển
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS tiện ích
- [Lucide React](https://lucide.dev/) - Thư viện biểu tượng

## Hỗ trợ trình duyệt

- Chrome (phiên bản mới nhất)
- Firefox (phiên bản mới nhất)
- Safari (phiên bản mới nhất)
- Edge (phiên bản mới nhất)

## Giấy phép

MIT

## Tác giả

Tên của bạn

---

Chúc bạn mua sắm vui vẻ tại MomBabyShop! 🛍️👶👩
