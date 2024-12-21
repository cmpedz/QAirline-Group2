import React from "react";

const BaoHiem = () => {
    return (
        <section className="px-[30px] md:px-[30px] mt-4 mb-6">
            {/* Tiêu đề */}
            <h1 className="text-[3em] text-white text-center pb-4">Bảo hiểm</h1>

            {/* Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Bảo hiểm Vietjet Travel Safe */}
                <div className="bg-white border rounded-lg p-6 shadow-md">
                    <h2 className="text-xl font-bold text-[#00008B] mb-4">
                        BẢO HIỂM DU LỊCH - VIETJET TRAVEL SAFE
                    </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Bảo hiểm du lịch trọn gói lên tới 2 tỷ đồng</li>
                    <li>
                        Quyền lợi bảo hiểm hấp dẫn: tai nạn, chi phí y tế, trễ/ hủy chuyến,
                        mất/ hỏng hành lý, ...
                    </li>
                    <li>Áp dụng toàn mạng bay nội địa và quốc tế</li>
                    <li>Áp dụng cho tất cả các hạng vé</li>
                    <li>
                        Chọn mua thêm Bảo hiểm Vietjet Travel Safe giá chỉ từ{" "}
                    <strong>58,000 đồng/chiều</strong>
                    </li>
                    <li>
                        Xem thêm chi tiết{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            tại đây
                        </a>
                    </li>
                </ul>
            </div>

        {/* Sky Care */}
        <div className="bg-white border rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold text-[#00008B] mb-4">
            SKY CARE - BẢO HIỂM DU LỊCH MIỄN PHÍ KÈM VÉ MÁY BAY VIETJET
          </h2>
          <p className="text-gray-700 mb-4">
            Yên tâm đồng hành cùng Vietjet với Sky Care trên mọi chuyến bay nội
            địa và quốc tế! Mọi hành khách sẽ được quyền lợi bảo hiểm trong các
            trường hợp (*):
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Chuyến bay khởi hành trễ từ 120 phút trở lên</li>
            <li>
              Hành lý đến trễ, hư hỏng mất mát bên trong hành lý ký gửi theo cùng
              chuyến bay
            </li>
            <li>
              Phát sinh chi phí điều trị y tế do đau ốm, tai nạn trong và sau
              chuyến bay
            </li>
            <li>Và hơn thế nữa...</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Thực hiện yêu cầu bồi thường trực tuyến, thuận tiện và đơn giản tại
            trang{" "}
            <a
              href="https://skycare.baoviet.com.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://skycare.baoviet.com.vn
            </a>
          </p>
          <p className="text-gray-700">
            Chi tiết các quyền lợi và điều kiện áp dụng của Sky Care{" "}
            <a href="#" className="text-blue-600 hover:underline">
              tại đây
            </a>
          </p>
          <p className="text-sm italic mt-2">
            (*) Theo điều kiện và điều khoản áp dụng cụ thể
          </p>
        </div>
      </div>
    </section>
  );
};

export default BaoHiem;