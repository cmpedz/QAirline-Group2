import React from "react";

const DichVuTaxi = () => {
    return (
        <section className="px-[30px] md:px-[30px] mt-4 mb-6">
            {/* Tiêu đề */}
            <h1 className="text-[3em] text-white text-center pb-4">Dịch vụ taxi</h1>

            <div className="bg-white border rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-bold text-[#00008B] mb-4">
                    HƯỚNG DẪN ĐẶT MUA VÀ SỬ DỤNG DỊCH VỤ XE TAXI ĐÓN SÂN BAY CUNG CẤP BỞI TAXI XANH SM
                </h2>     
                <p><strong>I. Hướng dẫn đặt mua dịch vụ:</strong></p>
                <ul>
                    <li>Bước 1: Đặt vé máy bay trên website hoặc app Vietjet Air</li>
                    <li>Bước 2: Chọn mua dịch vụ đi kèm chuyến bay "Xe Taxi đón sân bay"</li>
                    <li>Bước 3: Chọn mua các gói đón sân bay phù hợp với hành trình chuyến đi hoặc/và chuyến về</li>
                    <li>Bước 4: Tiến hành thanh toán cho toàn bộ giao dịch gồm vé máy bay và các dịch vụ đi kèm;</li>
                    <li>Bước 5: Nhận email thông tin chuyến bay và email mã voucher để sử dụng dịch vụ.</li>
                </ul>        
                <p>
                <strong>II. Hướng dẫn sử dụng dịch vụ:</strong>
                <br />
                E-Voucher sẽ được Xanh SM gửi đến quý khách qua email đăng ký khi mua vé.
                </p>   
                <ul>
                    <li>Bước 1: Tìm tài xế Xanh SM tại các điểm đón theo bảng hướng dẫn bên dưới;</li>
                    <li>Bước 2: Đưa mã voucher đã nhận qua email cho tài xế để xác nhận hành trình hợp lệ;</li>
                    <li>Bước 3: Lên xe và thực hiện chuyến đi;</li>
                    <li>Bước 4: Kết thúc hành trình và thực hiện thanh toán phí phát sinh (nếu có).</li>
                </ul>
                <p>
                <strong>III. Hướng dẫn Khách hàng di chuyển tới điểm đón taxi sân bay của Xanh SM:</strong>
                </p>
                <p>&nbsp;</p>
                <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          {/* Header */}
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="p-4 text-left border">Sân bay</th>
              <th className="p-4 text-left border">Nhà ga</th>
              <th className="p-4 text-left border">Hướng dẫn</th>
            </tr>
          </thead>
          {/* Nội dung */}
          <tbody className="text-gray-800">
            {/* Sân bay Nội Bài */}
            <tr className="bg-red-50">
              <td className="p-4 border" rowSpan="2">
                Sân bay Nội Bài <br />
                (Hà Nội)
              </td>
              <td className="p-4 border">Ga Quốc Nội (T1)</td>
              <td className="p-4 border">
                - Từ Sảnh A-B, di chuyển ra khỏi các cửa 1 – 5, hướng tới làn đường đi bộ. Đi
                thẳng tới làn đón taxi ở phía đối diện. Tìm taxi Xanh SM và lên xe.
                <br />
                - Hoặc từ Sảnh E, di chuyển ra khỏi các cửa E1 – E5, đi thẳng qua làn đường ưu
                tiên tới làn đón taxi. Tìm taxi Xanh SM và lên xe.
              </td>
            </tr>
            <tr className="bg-red-50">
              <td className="p-4 border">Ga Quốc Tế (T2)</td>
              <td className="p-4 border">
                - Từ Sảnh A1, di chuyển ra khỏi cửa và rẽ trái. Tìm taxi Xanh SM tại Cột số 5 và
                lên xe.
              </td>
            </tr>

            {/* Sân bay Tân Sơn Nhất */}
            <tr>
              <td className="p-4 border" rowSpan="2">
                Sân bay Tân Sơn Nhất <br />
                (TP. Hồ Chí Minh)
              </td>
              <td className="p-4 border">Ga Quốc Nội</td>
              <td className="p-4 border">
                - Từ cửa A1 và A2, đi thẳng đến Làn C và rẽ phải. Tìm taxi Xanh SM tại các Cột
                C03 – C20 và lên xe.
              </td>
            </tr>
            <tr>
              <td className="p-4 border">Ga Quốc Tế</td>
              <td className="p-4 border">
                - Từ cửa A1 và A2, đi thẳng đến Làn A và rẽ trái. Tìm taxi Xanh SM tại các Cột
                A04 – A01 và lên xe.
              </td>
            </tr>

            {/* Sân bay Phú Bài */}
            <tr className="bg-red-50">
              <td className="p-4 border" rowSpan="2">
                Sân bay Phú Bài <br />
                (Huế)
              </td>
              <td className="p-4 border">Ga Quốc Nội</td>
              <td className="p-4 border">
                - Đi thẳng ra từ cửa A2 và A3. Tìm taxi Xanh SM tại các Cột A05 – A01 và lên xe.
              </td>
            </tr>
            <tr className="bg-red-50">
              <td className="p-4 border">Ga Quốc Tế</td>
              <td className="p-4 border">
                - Đi thẳng ra từ cửa A1. Tìm taxi Xanh SM tại các Cột A01 – A03 và lên xe.
              </td>
            </tr>

            <tr className="bg-red-50">
              <td className="p-4 border" rowSpan="2">Sân bay Đà Nẵng</td>
              <td className="p-4 border">Ga Quốc Nội</td>
              <td className="p-4 border">
                - Rẽ trái khi ra khỏi cửa ga, rồi rẽ phải tại Cột 8, 9. Tìm taxi Xanh SM tại Ô số
                9 và lên xe.
              </td>
            </tr>
            <tr className="bg-red-50">
              <td className="p-4 border">Ga Quốc Tế</td>
              <td className="p-4 border">
                - Đi thẳng từ cổng ra. Tìm taxi Xanh SM tại các Ô số 1, 2, 3 và lên xe.
              </td>
            </tr>

            {/* Sân bay Cam Ranh */}
            <tr>
              <td className="p-4 border">Sân bay Cam Ranh <br />(Nha Trang)</td>
              <td className="p-4 border">Ga Quốc Nội</td>
              <td className="p-4 border">
                - Đi thẳng từ cổng ra, hướng về phía bên trái. Tìm taxi Xanh SM và lên xe.
              </td>
            </tr>

            {/* Sân bay Phú Quốc */}
            <tr className="bg-red-50">
              <td className="p-4 border">Sân bay Phú Quốc</td>
              <td className="p-4 border">Tất cả các ga</td>
              <td className="p-4 border">
                - Từ cổng ra, đi tiếp khoảng 30-50m tới giữa ga đến Quốc Nội và Quốc Tế. Tìm taxi
                Xanh SM và lên xe.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
                <p className="pt-4 pb-4">
                **Trong trường hợp không tìm được xe ở sân bay, vui lòng tìm đến quầy hỗ trợ Xanh SM tại sảnh hoặc gọi hotline để được hỗ trợ sắp xếp xe.
                </p>
                <p><strong>
                     IV. Điều kiện, điều khoản áp dụng:
                    </strong>
                </p>

      {/* Nội dung danh sách điều kiện */}
      <ul className="list-disc list-inside space-y-2 text-gray-800">
        <li>
          Áp dụng với các chuyến bay nội địa do Vietjet khai thác trên các nền
          tảng website hoặc ứng dụng Vietjet, áp dụng tại các sân bay có triển
          khai dịch vụ: sân bay Nội Bài (Hà Nội), sân bay Tân Sơn Nhất (TP. Hồ
          Chí Minh), sân bay Phú Bài (Huế), sân bay Đà Nẵng, sân bay Cam Ranh
          (Nha Trang), sân bay Phú Quốc.
        </li>
        <li>
          Áp dụng cho các chuyến đi đặt trước tối đa 2 năm và tối thiểu 3 tiếng
          trước giờ bay.
        </li>
        <li>
          Khách hàng có thể mua bổ sung dịch vụ sau khi đã hoàn thành thanh toán
          cho mã đặt chỗ vé máy bay (tương tự mua bổ sung hành lý).
        </li>
        <li>
          Mỗi khách hàng được mua tối đa 03 mã voucher đưa đón sân bay với mỗi mã
          đặt chỗ thành công.
        </li>
        <li>Giá dịch vụ đã bao gồm thuế VAT.</li>
        <li>
          Chi phí cước đi thực tế phụ thuộc vào số km thực tế, phụ phí cầu đường
          (nếu có) và các phụ phí khác (nếu có) phát sinh trong chuyến đi.
        </li>
        <li>
          Trong trường hợp sử dụng dịch vụ, nếu thực tế quãng đường di chuyển
          ngắn hơn số km quy định thì giá cước tính theo gói đưa đón sân bay VJA
          x Xanh SM khách hàng đã mua. Nếu thực tế quãng đường di chuyển dài hơn
          số km quy định thì khách hàng thanh toán phụ phí phát sinh với tài xế.
        </li>
        <li>
          Dịch vụ không có giá trị quy đổi thành tiền mặt trong bất kỳ trường hợp
          nào.
        </li>
        <li>
          Dịch vụ có giá trị sử dụng trong vòng 07 ngày kể từ ngày bay.
        </li>
        <li>
          Đối với trường hợp khách hàng có nhu cầu hoàn/hủy sẽ áp dụng tương tự
          chính sách hoàn, hủy và hoàn trả dịch vụ theo chính sách, quy định của
          Vietjet.
        </li>
      </ul>

      {/* Thông tin liên hệ */}
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Thông tin liên hệ với XANH SM:</h3>
        <p className="text-gray-800 mb-1">
          <strong>Hotline CSKH:</strong> 1900 2097
        </p>
        <p className="text-gray-800">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:cskh@xanhsm.com"
            className="text-blue-600 hover:underline"
          >
            cskh@xanhsm.com
          </a>
        </p>
      </div>
            </div>


    </section>
  );
};

export default DichVuTaxi;