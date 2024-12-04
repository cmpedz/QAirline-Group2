import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 md:px-10 text-gray-700">
        {/* Bố cục chính */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {/* Cột 1 */}
          <div>
            <h3 className="font-semibold mb-3">Mahuco Airways</h3>
            <ul>
              <li className="mb-2">
                <a href="#about" className="hover:underline">
                  Về chúng tôi
                </a>
              </li>
              <li className="mb-2">
                <a href="#awards" className="hover:underline">
                  Giải thưởng
                </a>
              </li>
              <li className="mb-2">
                <a href="#careers" className="hover:underline">
                  Nghề nghiệp
                </a>
              </li>
              <li className="mb-2">
                <a href="#news" className="hover:underline">
                  Thông cáo báo chí
                </a>
              </li>
              <li>
                <a href="#sustainability" className="hover:underline">
                  Nhận thức về môi trường
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 2 */}
          <div>
            <h3 className="font-semibold mb-3">Công ty</h3>
            <ul>
              <li className="mb-2">
                <a href="#airport" className="hover:underline">
                  Sân bay quốc tế 
                </a>
              </li>
              <li className="mb-2">
                <a href="#dutyfree" className="hover:underline">
                  MCH Duty Free
                </a>
              </li>
              <li className="mb-2">
                <a href="#cargo" className="hover:underline">
                  MCH Airways Cargo
                </a>
              </li>
              <li>
                <a href="#more" className="hover:underline">
                  Tìm hiểu thêm...
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 3 */}
          <div>
            <h3 className="font-semibold mb-3">Đối tác kinh doanh</h3>
            <ul>
              <li className="mb-2">
                <a href="#marketing" className="hover:underline">
                  Tiếp thị liên kết
                </a>
              </li>
              <li className="mb-2">
                <a href="#shopping" className="hover:underline">
                  Mua sắm điện tử
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:underline">
                  Đối tác thương mại
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 4 */}
          <div>
            <h3 className="font-semibold mb-3">Liên hệ chúng tôi</h3>
            <ul>
              <li className="mb-2">
                <a href="#support" className="hover:underline">
                  Hỗ trợ
                </a>
              </li>
              <li className="flex space-x-3 mt-3">
                <a
                  href="#facebook"
                  className="hover:text-gray-900 text-xl"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#twitter"
                  className="hover:text-gray-900 text-xl"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#linkedin"
                  className="hover:text-gray-900 text-xl"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#youtube"
                  className="hover:text-gray-900 text-xl"
                  aria-label="YouTube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Hàng giải thưởng */}
        <div className="mt-10 text-center">
          <div className="flex justify-center items-center space-x-6 mb-6">
            <div className="flex flex-col items-center">
              <img src="/path-to-award-1.png" alt="Award 1" className="h-12" />
              <p className="mt-2 text-xs text-gray-500">Award 1</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/path-to-award-2.png" alt="Award 2" className="h-12" />
              <p className="mt-2 text-xs text-gray-500">Award 2</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/path-to-award-3.png" alt="Award 3" className="h-12" />
              <p className="mt-2 text-xs text-gray-500">Award 3</p>
            </div>
          </div>
          {/* Chính sách */}
          <p className="text-xs text-gray-600">
            Chính sách Cookie | Pháp luật | Riêng tư | Trợ năng | Các dịch vụ và
            phí tùy chọn
          </p>
          <p className="text-xs text-gray-600 mt-2">
            &copy; Mahuco Airways. Đã đăng ký Bản quyền
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
