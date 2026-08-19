const VOCAB_DATA = {
  N5: {
    levelName: "N5 — Sơ Cấp (Giáo trình Nhật Ngữ Đông Du)",
    lessons: [
      {
        id: "n5_b1",
        title: "Bài 1: Giới thiệu bản thân, Nghề nghiệp & Quốc tịch",
        description: "Bản thân, nghề nghiệp, quốc tịch, lời chào và số đếm (100% Hiragana/Katakana)",
        words: [
          { kanji: "", hiragana: "わたし", vietnamese: "Tôi" },
          { kanji: "", hiragana: "わたしたち", vietnamese: "Chúng tôi" },
          { kanji: "", hiragana: "あなた", vietnamese: "Bạn, anh, chị (ngôi thứ 2)" },
          { kanji: "", hiragana: "ひと", vietnamese: "Người" },
          { kanji: "", hiragana: "この ひと", vietnamese: "Người này" },
          { kanji: "", hiragana: "あの ひと", vietnamese: "Người kia" },
          { kanji: "", hiragana: "かた", vietnamese: "Vị" },
          { kanji: "", hiragana: "この かた", vietnamese: "Vị này" },
          { kanji: "", hiragana: "あの かた", vietnamese: "Vị kia" },
          { kanji: "", hiragana: "～さん", vietnamese: "Bạn~, anh~, chị~, ông~, bà~" },
          { kanji: "", hiragana: "せんせい", vietnamese: "Thầy, Cô (TIÊN SINH)" },
          { kanji: "", hiragana: "がくせい", vietnamese: "Học sinh, học viên (HỌC SINH)" },
          { kanji: "", hiragana: "だいがくせい", vietnamese: "Sinh viên (ĐẠI HỌC SINH)" },
          { kanji: "", hiragana: "きょうし", vietnamese: "Giáo viên (GIÁO SƯ)" },
          { kanji: "", hiragana: "てんいん", vietnamese: "Nhân viên cửa hàng (ĐIỂM VIÊN)" },
          { kanji: "", hiragana: "かいしゃいん", vietnamese: "Nhân viên công ty (HỘI XÃ VIÊN)" },
          { kanji: "", hiragana: "ぎんこういん", vietnamese: "Nhân viên ngân hàng (NGÂN HÀNG VIÊN)" },
          { kanji: "", hiragana: "いしゃ", vietnamese: "Bác sĩ (Y GIẢ)" },
          { kanji: "", hiragana: "しゅふ", vietnamese: "Nội trợ (CHỦ PHỤ)" },
          { kanji: "", hiragana: "かしゅ", vietnamese: "Ca sĩ (CA THỦ)" },
          { kanji: "", hiragana: "うんてんしゅ", vietnamese: "Tài xế (VẬN CHUYỂN THỦ)" },
          { kanji: "", hiragana: "しごと", vietnamese: "Công việc" },
          { kanji: "", hiragana: "おしごとは？", vietnamese: "(Anh / Chị) làm công việc gì?" },
          { kanji: "", hiragana: "はい", vietnamese: "Vâng" },
          { kanji: "", hiragana: "いいえ", vietnamese: "Không" },
          { kanji: "", hiragana: "だれ？", vietnamese: "Ai?" },
          { kanji: "", hiragana: "どなた？", vietnamese: "Ai, vị nào?" },
          { kanji: "", hiragana: "なまえ", vietnamese: "Tên" },
          { kanji: "", hiragana: "おなまえは？", vietnamese: "(Anh / Chị) tên gì?" },
          { kanji: "", hiragana: "べとなむ", vietnamese: "Việt Nam" },
          { kanji: "", hiragana: "にほん", vietnamese: "Nhật Bản" },
          { kanji: "", hiragana: "かんこく", vietnamese: "Hàn Quốc" },
          { kanji: "", hiragana: "ちゅうごく", vietnamese: "Trung Quốc" },
          { kanji: "", hiragana: "たいわん", vietnamese: "Đài Loan" },
          { kanji: "", hiragana: "～じん", vietnamese: "Người ~" },
          { kanji: "", hiragana: "べとなむじん", vietnamese: "Người Việt Nam" },
          { kanji: "", hiragana: "にほんじん", vietnamese: "Người Nhật Bản" },
          { kanji: "", hiragana: "こくせき", vietnamese: "Quốc tịch" },
          { kanji: "", hiragana: "ごこくせきは？", vietnamese: "(Anh / Chị) quốc tịch gì?" },
          { kanji: "", hiragana: "こうちょう", vietnamese: "Hiệu trưởng (HIỆU TRƯỞNG)" },
          { kanji: "", hiragana: "しゃちょう", vietnamese: "Giám đốc (XÃ TRƯỞNG)" },
          { kanji: "", hiragana: "てんちょう", vietnamese: "Cửa hàng trưởng (ĐIỂM TRƯỞNG)" },
          { kanji: "", hiragana: "こうむいん", vietnamese: "Cán bộ nhà nước (CÔNG VỤ VIÊN)" },
          { kanji: "", hiragana: "けいさつかん", vietnamese: "Cảnh sát" },
          { kanji: "", hiragana: "ちょうりし", vietnamese: "Đầu bếp" },
          { kanji: "", hiragana: "べんごし", vietnamese: "Luật sư" },
          { kanji: "", hiragana: "かんごし", vietnamese: "Y tá" },
          { kanji: "", hiragana: "かいごし", vietnamese: "Điều dưỡng" },
          { kanji: "", hiragana: "えんじにあ", vietnamese: "Kỹ sư" },
          { kanji: "", hiragana: "たい", vietnamese: "Thái Lan" },
          { kanji: "", hiragana: "いんど", vietnamese: "Ấn Độ" },
          { kanji: "", hiragana: "いぎりす", vietnamese: "Anh" },
          { kanji: "", hiragana: "ふらんす", vietnamese: "Pháp" },
          { kanji: "", hiragana: "あめりか", vietnamese: "Mỹ" },
          { kanji: "", hiragana: "どいつ", vietnamese: "Đức" },
          { kanji: "", hiragana: "いたりあ", vietnamese: "Ý" },
          { kanji: "", hiragana: "みなさん", vietnamese: "Mọi người" },
          { kanji: "", hiragana: "はじめまして", vietnamese: "Lần đầu gặp mặt" },
          { kanji: "", hiragana: "どうぞ よろしく", vietnamese: "Rất mong được giúp đỡ" },
          { kanji: "", hiragana: "どうぞ よろしく おねがいします", vietnamese: "Rất mong được giúp đỡ" },
          { kanji: "", hiragana: "おはよう ございます", vietnamese: "Chào (buổi sáng)" },
          { kanji: "", hiragana: "こんにちは", vietnamese: "Chào (buổi trưa)" },
          { kanji: "", hiragana: "こんばんは", vietnamese: "Chào (buổi tối)" },
          { kanji: "", hiragana: "しゅっしん", vietnamese: "Quê quán" },
          { kanji: "", hiragana: "HO CHI MINH し", vietnamese: "Thành phố Hồ Chí Minh" },
          { kanji: "", hiragana: "しつれいですが", vietnamese: "Xin thất lễ, ~" },
          { kanji: "", hiragana: "～さい", vietnamese: "~ tuổi" },
          { kanji: "", hiragana: "いっさい", vietnamese: "1 tuổi" },
          { kanji: "", hiragana: "はっさい", vietnamese: "8 tuổi" },
          { kanji: "", hiragana: "じゅっさい", vietnamese: "10 tuổi" },
          { kanji: "", hiragana: "はたち", vietnamese: "20 tuổi" },
          { kanji: "", hiragana: "とし", vietnamese: "Năm, tuổi" },
          { kanji: "", hiragana: "おとしは？", vietnamese: "(Anh / Chị) bao nhiêu tuổi?" },
          { kanji: "", hiragana: "なんさいですか / おいいくつですか", vietnamese: "Bao nhiêu tuổi?" }
        ]
      },
      {
        id: "n5_b2",
        title: "Bài 2: Đồ vật, Chỉ thị từ & Đồ dùng học tập",
        description: "Các chỉ thị từ これ/それ/あれ, đồ dùng học tập và phần mở rộng",
        words: [
          { kanji: "", hiragana: "これ", vietnamese: "Cái này (gần người nói)" },
          { kanji: "", hiragana: "それ", vietnamese: "Cái đó (gần người nghe)" },
          { kanji: "", hiragana: "あれ", vietnamese: "Cái kia (xa cả hai)" },
          { kanji: "", hiragana: "かばん", vietnamese: "Cặp" },
          { kanji: "", hiragana: "ほん", vietnamese: "Sách" },
          { kanji: "", hiragana: "じしょ", vietnamese: "Từ điển (TỪ THƯ)" },
          { kanji: "", hiragana: "てちょう", vietnamese: "Sổ tay (THỦ TRƯỚNG)" },
          { kanji: "", hiragana: "ふでばこ", vietnamese: "Hộp bút" },
          { kanji: "", hiragana: "えんぴつ", vietnamese: "Bút chì chuốt" },
          { kanji: "", hiragana: "けしごむ", vietnamese: "Cục gôm, tẩy" },
          { kanji: "", hiragana: "しんぶん", vietnamese: "Tờ báo (TÂN VĂN)" },
          { kanji: "", hiragana: "ざっし", vietnamese: "Tạp chí (TẠP CHÍ)" },
          { kanji: "", hiragana: "つくえ", vietnamese: "Cái bàn" },
          { kanji: "", hiragana: "いす", vietnamese: "Cái ghế" },
          { kanji: "", hiragana: "せんぷうき", vietnamese: "Quạt máy" },
          { kanji: "", hiragana: "かさ", vietnamese: "Ô, dù" },
          { kanji: "", hiragana: "ぼうし", vietnamese: "Nón" },
          { kanji: "", hiragana: "めがね", vietnamese: "Mắt kính" },
          { kanji: "", hiragana: "とけい", vietnamese: "Đồng hồ" },
          { kanji: "", hiragana: "さいふ", vietnamese: "Ví tiền (TÀI BỐ)" },
          { kanji: "", hiragana: "くつ", vietnamese: "Giày" },
          { kanji: "", hiragana: "でんわ", vietnamese: "Điện thoại (ĐIỆN THOẠI)" },
          { kanji: "", hiragana: "かぎ", vietnamese: "Chìa khóa" },
          { kanji: "", hiragana: "じてんしゃ", vietnamese: "Xe đạp (TỰ CHUYỂN XA)" },
          { kanji: "", hiragana: "じどうしゃ", vietnamese: "Xe hơi (TỰ ĐỘNG XA)" },
          { kanji: "", hiragana: "くるま", vietnamese: "Xe hơi" },
          { kanji: "", hiragana: "ばいく", vietnamese: "Xe máy" },
          { kanji: "", hiragana: "おかし", vietnamese: "Bánh kẹo" },
          { kanji: "", hiragana: "なんですか？", vietnamese: "Là cái gì?" },
          { kanji: "", hiragana: "だれの ～？", vietnamese: "~ của ai?" },
          { kanji: "", hiragana: "どこの ～？", vietnamese: "~ của nước nào?" },
          { kanji: "", hiragana: "なんの ～？", vietnamese: "~ gì?" },
          { kanji: "", hiragana: "～ご", vietnamese: "Tiếng ~" },
          { kanji: "", hiragana: "にほんご", vietnamese: "Tiếng Nhật" },
          { kanji: "", hiragana: "ちゅうごくご", vietnamese: "Tiếng Trung Quốc" },
          { kanji: "", hiragana: "えいご", vietnamese: "Tiếng Anh" },
          { kanji: "", hiragana: "なにご？", vietnamese: "Tiếng gì?" },
          { kanji: "", hiragana: "どれですか？", vietnamese: "Cái nào?" },
          { kanji: "", hiragana: "どの ～ですか？", vietnamese: "Là ~ nào?" },
          { kanji: "", hiragana: "この ～", vietnamese: "~ này" },
          { kanji: "", hiragana: "その ～", vietnamese: "~ đó" },
          { kanji: "", hiragana: "あの ～", vietnamese: "~ kia" },
          { kanji: "", hiragana: "がっこう", vietnamese: "Trường học (HỌC HIỆU)" },
          { kanji: "", hiragana: "かいしゃ", vietnamese: "Công ty (HỘI XÃ)" },
          { kanji: "", hiragana: "へや", vietnamese: "Phòng" },
          { kanji: "", hiragana: "もの", vietnamese: "Vật, đồ vật, hàng hóa" },
          { kanji: "", hiragana: "こくばん", vietnamese: "Bảng đen" },
          { kanji: "", hiragana: "でんき", vietnamese: "Điện, đèn (ĐIỆN KHÍ)" },
          { kanji: "", hiragana: "かめら", vietnamese: "Máy chụp hình" },
          { kanji: "", hiragana: "のーと", vietnamese: "Vở, quyển vở" },
          { kanji: "", hiragana: "くーらー", vietnamese: "Máy lạnh" },
          { kanji: "", hiragana: "おとこ", vietnamese: "Đàn ông" },
          { kanji: "", hiragana: "おんな", vietnamese: "Phụ nữ" },
          { kanji: "", hiragana: "はい、そうです", vietnamese: "Vâng, đúng vậy" },
          { kanji: "", hiragana: "いいえ、ちがいます", vietnamese: "Không, không phải vậy" }
        ]
      },
      {
        id: "n5_b3",
        title: "Bài 3: Địa điểm, Phương hướng & Nơi chốn",
        description: "Các từ chỉ nơi chốn, phòng ban, địa danh và đếm tầng",
        words: [
          { kanji: "", hiragana: "ここ", vietnamese: "Chỗ này" },
          { kanji: "", hiragana: "そこ", vietnamese: "Chỗ đó" },
          { kanji: "", hiragana: "あそこ", vietnamese: "Chỗ kia" },
          { kanji: "", hiragana: "がっこう", vietnamese: "Trường học" },
          { kanji: "", hiragana: "うけつけ", vietnamese: "Quầy tiếp tân" },
          { kanji: "", hiragana: "かいだん", vietnamese: "Cầu thang" },
          { kanji: "", hiragana: "じむしょ", vietnamese: "Văn phòng (SỰ VỤ THẤT)" },
          { kanji: "", hiragana: "じしゅうしつ", vietnamese: "Phòng tự học (TỰ TẬP THẤT)" },
          { kanji: "", hiragana: "きょうしつ", vietnamese: "Phòng học (GIÁO THẤT)" },
          { kanji: "", hiragana: "かいぎしつ", vietnamese: "Phòng họp (HỘI NGHỊ THẤT)" },
          { kanji: "", hiragana: "としょかん", vietnamese: "Thư viện (ĐỒ THƯ QUÁN)" },
          { kanji: "", hiragana: "としょしつ", vietnamese: "Phòng đọc sách (ĐỒ THƯ THẤT)" },
          { kanji: "", hiragana: "おてあらい", vietnamese: "Nhà vệ sinh" },
          { kanji: "", hiragana: "かいじょう", vietnamese: "Hội trường (HỘI TRƯỜNG)" },
          { kanji: "", hiragana: "しょくどう", vietnamese: "Nhà ăn (THỰC ĐƯỜNG)" },
          { kanji: "", hiragana: "～かい", vietnamese: "Tầng ~" },
          { kanji: "", hiragana: "なんがい", vietnamese: "Tầng mấy?" },
          { kanji: "", hiragana: "うち", vietnamese: "Nhà (nơi sinh sống, gia đình)" },
          { kanji: "", hiragana: "いえ", vietnamese: "Căn nhà (về mặt vật lý)" },
          { kanji: "", hiragana: "げんかん", vietnamese: "Tiền sảnh" },
          { kanji: "", hiragana: "おうせつま", vietnamese: "Phòng tiếp khách" },
          { kanji: "", hiragana: "いま", vietnamese: "Phòng khách" },
          { kanji: "", hiragana: "だいどころ", vietnamese: "Nhà bếp" },
          { kanji: "", hiragana: "よくしつ", vietnamese: "Nhà tắm (DỤC THẤT)" },
          { kanji: "", hiragana: "ふろば", vietnamese: "Phòng tắm" },
          { kanji: "", hiragana: "しんしつ", vietnamese: "Phòng ngủ (TẨM THẤT)" },
          { kanji: "", hiragana: "まど", vietnamese: "Cửa sổ" },
          { kanji: "", hiragana: "どこですか？", vietnamese: "Chỗ nào?" },
          { kanji: "", hiragana: "どちらですか？", vietnamese: "Phía nào?" },
          { kanji: "", hiragana: "こちら", vietnamese: "Phía này" },
          { kanji: "", hiragana: "そちら", vietnamese: "Phía đó" },
          { kanji: "", hiragana: "あちら", vietnamese: "Phía kia" },
          { kanji: "", hiragana: "きっさてん", vietnamese: "Quán nước (KHIẾT TRÀ ĐIỂM)" },
          { kanji: "", hiragana: "ぎんこう", vietnamese: "Ngân hàng (NGÂN HÀNG)" },
          { kanji: "", hiragana: "おてら", vietnamese: "Chùa" },
          { kanji: "", hiragana: "きょうかい", vietnamese: "Nhà thờ (GIÁO HỘI)" },
          { kanji: "", hiragana: "びょういん", vietnamese: "Bệnh viện (BỆNH VIỆN)" },
          { kanji: "", hiragana: "こうえん", vietnamese: "Công viên (CÔNG VIÊN)" },
          { kanji: "", hiragana: "ほんや", vietnamese: "Nhà sách" },
          { kanji: "", hiragana: "いちば", vietnamese: "Chợ" },
          { kanji: "", hiragana: "えき", vietnamese: "Nhà ga" },
          { kanji: "", hiragana: "くうこう", vietnamese: "Sân bay (KHÔNG CẢNG)" },
          { kanji: "", hiragana: "えいがかん", vietnamese: "Rạp chiếu phim (ÁNH HỌA QUÁN)" },
          { kanji: "", hiragana: "どうぶつえん", vietnamese: "Sở thú (ĐỘNG VẬT VIÊN)" },
          { kanji: "", hiragana: "ゆうびんきょく", vietnamese: "Bưu điện" },
          { kanji: "", hiragana: "とういつかいどう", vietnamese: "Dinh Thống Nhất" },
          { kanji: "", hiragana: "しやくしょ", vietnamese: "Cơ quan hành chính thành phố" },
          { kanji: "", hiragana: "とこや", vietnamese: "Tiệm tóc nam" },
          { kanji: "", hiragana: "びよういん", vietnamese: "Tiệm tóc nữ" },
          { kanji: "", hiragana: "～く", vietnamese: "Quận ~" },
          { kanji: "", hiragana: "～どおり", vietnamese: "Đường ~" },
          { kanji: "", hiragana: "いくらですか？", vietnamese: "Bao nhiêu tiền?" },
          { kanji: "", hiragana: "～えん", vietnamese: "~ yên" },
          { kanji: "", hiragana: "Ben Thanh えき", vietnamese: "Ga Bến Thành" },
          { kanji: "", hiragana: "ちかてつ", vietnamese: "Tàu điện ngầm" },
          { kanji: "", hiragana: "きっぷ", vietnamese: "Vé" },
          { kanji: "", hiragana: "うりば", vietnamese: "Quầy" },
          { kanji: "", hiragana: "きっぷうりば", vietnamese: "Quầy vé" },
          { kanji: "", hiragana: "Ben Thanh いちば", vietnamese: "Chợ Bến Thành" },
          { kanji: "", hiragana: "ひがしぐち", vietnamese: "Cổng phía Đông" },
          { kanji: "", hiragana: "にしぐち", vietnamese: "Cổng phía Tây" },
          { kanji: "", hiragana: "みなみぐち", vietnamese: "Cổng phía Nam" },
          { kanji: "", hiragana: "きたぐち", vietnamese: "Cổng phía Bắc" },
          { kanji: "", hiragana: "おみやげ", vietnamese: "Quà lưu niệm, đặc sản" },
          { kanji: "", hiragana: "にく", vietnamese: "Thịt" },
          { kanji: "", hiragana: "さかな", vietnamese: "Cá" },
          { kanji: "", hiragana: "やさい", vietnamese: "Rau" },
          { kanji: "", hiragana: "はな", vietnamese: "Hoa" },
          { kanji: "", hiragana: "とうきょう", vietnamese: "Tokyo" },
          { kanji: "", hiragana: "おおさか", vietnamese: "Osaka" },
          { kanji: "", hiragana: "きょうと", vietnamese: "Kyoto" },
          { kanji: "", hiragana: "でんわばんごう", vietnamese: "Số điện thoại (ĐIỆN THOẠI PHIÊN HIỆU)" },
          { kanji: "", hiragana: "なんばんですか？", vietnamese: "Số mấy? (HÀ PHIÊN)" },
          { kanji: "", hiragana: "いらっしゃいませ", vietnamese: "Xin kính chào quý khách!" },
          { kanji: "", hiragana: "あのう", vietnamese: "À..., Xin lỗi..., Cho tôi hỏi..." },
          { kanji: "", hiragana: "すみません", vietnamese: "Xin lỗi" }
        ]
      },
      {
        id: "n5_b4",
        title: "Bài 4: Thời gian, Thứ ngày tháng & Mùa trong năm",
        description: "Học xem giờ, phút, các ngày trong tuần, tháng và thời tiết",
        words: [
          { kanji: "", hiragana: "なんじ", vietnamese: "Mấy giờ?" },
          { kanji: "", hiragana: "なんぷん", vietnamese: "Mấy phút?" },
          { kanji: "", hiragana: "いま", vietnamese: "Bây giờ" },
          { kanji: "", hiragana: "ちょうど", vietnamese: "Vừa đúng" },
          { kanji: "", hiragana: "～まえ", vietnamese: "Trước (kém) ~" },
          { kanji: "", hiragana: "ごぜん", vietnamese: "Buổi sáng (trước 12 giờ trưa)" },
          { kanji: "", hiragana: "ごご", vietnamese: "Buổi chiều (sau 12 giờ trưa)" },
          { kanji: "", hiragana: "あさ", vietnamese: "Sáng" },
          { kanji: "", hiragana: "ひる", vietnamese: "Trưa" },
          { kanji: "", hiragana: "ゆうがた", vietnamese: "Chiều" },
          { kanji: "", hiragana: "よる・ばん", vietnamese: "Tối" },
          { kanji: "", hiragana: "なんようび", vietnamese: "Thứ mấy?" },
          { kanji: "", hiragana: "にちようび", vietnamese: "Chủ nhật (NHẬT DIỆU NHẬT)" },
          { kanji: "", hiragana: "げつようび", vietnamese: "Thứ hai (NGUYỆT DIỆU NHẬT)" },
          { kanji: "", hiragana: "かようび", vietnamese: "Thứ ba (HỎA DIỆU NHẬT)" },
          { kanji: "", hiragana: "すいようび", vietnamese: "Thứ tư (THỦY DIỆU NHẬT)" },
          { kanji: "", hiragana: "もくようび", vietnamese: "Thứ năm (MỘC DIỆU NHẬT)" },
          { kanji: "", hiragana: "きんようび", vietnamese: "Thứ sáu (KIM DIỆU NHẬT)" },
          { kanji: "", hiragana: "どようび", vietnamese: "Thứ bảy (THỔ DIỆU NHẬT)" },
          { kanji: "", hiragana: "きょう", vietnamese: "Hôm nay" },
          { kanji: "", hiragana: "あした", vietnamese: "Ngày mai" },
          { kanji: "", hiragana: "あさって", vietnamese: "Ngày mốt" },
          { kanji: "", hiragana: "きのう", vietnamese: "Hôm qua" },
          { kanji: "", hiragana: "おととい", vietnamese: "Hôm kia" },
          { kanji: "", hiragana: "なんにし", vietnamese: "Ngày mấy?" },
          { kanji: "", hiragana: "ついたち", vietnamese: "Ngày 1" },
          { kanji: "", hiragana: "ふつか", vietnamese: "Ngày 2" },
          { kanji: "", hiragana: "みっか", vietnamese: "Ngày 3" },
          { kanji: "", hiragana: "よっか", vietnamese: "Ngày 4" },
          { kanji: "", hiragana: "いつか", vietnamese: "Ngày 5" },
          { kanji: "", hiragana: "むいか", vietnamese: "Ngày 6" },
          { kanji: "", hiragana: "なのか", vietnamese: "Ngày 7" },
          { kanji: "", hiragana: "ようか", vietnamese: "Ngày 8" },
          { kanji: "", hiragana: "ここのか", vietnamese: "Ngày 9" },
          { kanji: "", hiragana: "とおか", vietnamese: "Ngày 10" },
          { kanji: "", hiragana: "なんがつ", vietnamese: "Tháng mấy?" },
          { kanji: "", hiragana: "こんげつ", vietnamese: "Tháng này (KIM NGUYỆT)" },
          { kanji: "", hiragana: "らいげつ", vietnamese: "Tháng tới (LAI NGUYỆT)" },
          { kanji: "", hiragana: "さらいげつ", vietnamese: "Tháng tới nữa" },
          { kanji: "", hiragana: "せんげつ", vietnamese: "Tháng trước (TIÊN NGUYỆT)" },
          { kanji: "", hiragana: "せんせんげつ", vietnamese: "Tháng trước nữa" },
          { kanji: "", hiragana: "げつまつ", vietnamese: "Cuối tháng (NGUYỆT MẠT)" },
          { kanji: "", hiragana: "たんじょうび", vietnamese: "Ngày sinh nhật" },
          { kanji: "", hiragana: "いつ", vietnamese: "Khi nào, lúc nào?" },
          { kanji: "", hiragana: "なんねん", vietnamese: "Năm mấy?" },
          { kanji: "", hiragana: "ことし", vietnamese: "Năm nay" },
          { kanji: "", hiragana: "らいねん", vietnamese: "Năm tới (LAI NIÊN)" },
          { kanji: "", hiragana: "さらいねん", vietnamese: "Năm tới nữa" },
          { kanji: "", hiragana: "きょねん", vietnamese: "Năm ngoái (KHỨ NIÊN)" },
          { kanji: "", hiragana: "おととし", vietnamese: "Năm kia" },
          { kanji: "", hiragana: "ねんまつ", vietnamese: "Cuối năm (NIÊN MẠT)" },
          { kanji: "", hiragana: "せいねんがっぴ", vietnamese: "Ngày tháng năm sinh" },
          { kanji: "", hiragana: "はる", vietnamese: "Mùa xuân" },
          { kanji: "", hiragana: "なつ", vietnamese: "Mùa hè" },
          { kanji: "", hiragana: "あき", vietnamese: "Mùa thu" },
          { kanji: "", hiragana: "ふゆ", vietnamese: "Mùa đông" },
          { kanji: "", hiragana: "あめ", vietnamese: "Mưa" },
          { kanji: "", hiragana: "はれ", vietnamese: "Trời trong xanh, nắng đẹp" },
          { kanji: "", hiragana: "くもり", vietnamese: "Trời âm u" },
          { kanji: "", hiragana: "こんしゅう", vietnamese: "Tuần này (KIM CHU)" },
          { kanji: "", hiragana: "らいしゅう", vietnamese: "Tuần tới (LAI CHU)" },
          { kanji: "", hiragana: "さらいしゅう", vietnamese: "Tuần tới nữa" },
          { kanji: "", hiragana: "せんしゅう", vietnamese: "Tuần trước (TIÊN CHU)" },
          { kanji: "", hiragana: "せんせんしゅう", vietnamese: "Tuần trước nữa" },
          { kanji: "", hiragana: "しゅうまつ", vietnamese: "Cuối tuần (CHU MẠT)" },
          { kanji: "", hiragana: "まいあさ", vietnamese: "Mỗi sáng (MỖI TRIỀU)" },
          { kanji: "", hiragana: "まいばん", vietnamese: "Mỗi tối (MỖI VÃN)" },
          { kanji: "", hiragana: "まいにち", vietnamese: "Mỗi ngày (MỖI NHẬT)" },
          { kanji: "", hiragana: "まいしゅう", vietnamese: "Mỗi tuần (MỖI CHU)" },
          { kanji: "", hiragana: "まいつき", vietnamese: "Mỗi tháng (MỖI NGUYỆT)" },
          { kanji: "", hiragana: "まいとし", vietnamese: "Mỗi năm (MỖI NIÊN)" },
          { kanji: "", hiragana: "～から", vietnamese: "Từ ~" },
          { kanji: "", hiragana: "～まで", vietnamese: "Đến ~" },
          { kanji: "", hiragana: "じゅぎょう", vietnamese: "Giờ học, tiết học" },
          { kanji: "", hiragana: "べんきょう", vietnamese: "Việc học" },
          { kanji: "", hiragana: "しけん", vietnamese: "Kỳ thi, bài thi" },
          { kanji: "", hiragana: "やすみ", vietnamese: "Ngày nghỉ, kỳ nghỉ, giờ nghỉ" },
          { kanji: "", hiragana: "ひるやすみ", vietnamese: "Nghỉ trưa" },
          { kanji: "", hiragana: "やすみじかん", vietnamese: "Giờ ra chơi" },
          { kanji: "", hiragana: "きゅうけいじかん", vietnamese: "Thời gian nghỉ giải lao" },
          { kanji: "", hiragana: "かいぎ", vietnamese: "Cuộc họp, hội nghị" },
          { kanji: "", hiragana: "しゅっちょう", vietnamese: "Công tác, việc đi công tác" },
          { kanji: "", hiragana: "りょこう", vietnamese: "Du lịch, chuyến du lịch" },
          { kanji: "", hiragana: "じゃいんりょこう", vietnamese: "Du lịch nhân viên" },
          { kanji: "", hiragana: "てすと", vietnamese: "Bài kiểm tra" }
        ]
      },
      {
        id: "n5_b5",
        title: "Bài 5: Tính từ (Mô tả đặc điểm & Trạng thái)",
        description: "Các tính từ đuôi い và đuôi な từ giáo trình Đông Du Bài 5 (Bài 8 trong Minna)",
        words: [
          { kanji: "", hiragana: "おおきい", vietnamese: "Lớn" },
          { kanji: "", hiragana: "ちいさい", vietnamese: "Nhỏ" },
          { kanji: "", hiragana: "ひろい", vietnamese: "Rộng" },
          { kanji: "", hiragana: "せまい", vietnamese: "Hẹp" },
          { kanji: "", hiragana: "あかるい", vietnamese: "Sáng" },
          { kanji: "", hiragana: "くらい", vietnamese: "Tối" },
          { kanji: "", hiragana: "あたらしい", vietnamese: "Mới" },
          { kanji: "", hiragana: "ふるい", vietnamese: "Cũ" },
          { kanji: "", hiragana: "おもい", vietnamese: "Nặng" },
          { kanji: "", hiragana: "かるい", vietnamese: "Nhẹ" },
          { kanji: "", hiragana: "たかい", vietnamese: "Đắt, cao" },
          { kanji: "", hiragana: "やすい", vietnamese: "Rẻ" },
          { kanji: "", hiragana: "ひくい", vietnamese: "Thấp" },
          { kanji: "", hiragana: "おいしい", vietnamese: "Ngon" },
          { kanji: "", hiragana: "まずい", vietnamese: "Dở" },
          { kanji: "", hiragana: "からい", vietnamese: "Cay" },
          { kanji: "", hiragana: "にがい", vietnamese: "Đắng" },
          { kanji: "", hiragana: "しょっぱい", vietnamese: "Mặn" },
          { kanji: "", hiragana: "あまい", vietnamese: "Ngọt" },
          { kanji: "", hiragana: "すっぱい", vietnamese: "Chua" },
          { kanji: "", hiragana: "やさしい", vietnamese: "Hiền, dễ" },
          { kanji: "", hiragana: "きびしい", vietnamese: "Nghiêm khắc" },
          { kanji: "", hiragana: "かわいい", vietnamese: "Dễ thương" },
          { kanji: "", hiragana: "おとなしい", vietnamese: "Trầm tính, ít nói" },
          { kanji: "", hiragana: "おもしろい", vietnamese: "Thú vị" },
          { kanji: "", hiragana: "つまらない", vietnamese: "Nhàm chán" },
          { kanji: "", hiragana: "むずかしい", vietnamese: "Khó" },
          { kanji: "", hiragana: "いい・よい", vietnamese: "Tốt, hay" },
          { kanji: "", hiragana: "わるい", vietnamese: "Xấu" },
          { kanji: "", hiragana: "あつい", vietnamese: "Nóng" },
          { kanji: "", hiragana: "さむい", vietnamese: "Lạnh (thời tiết)" },
          { kanji: "", hiragana: "あたたかい", vietnamese: "Ấm" },
          { kanji: "", hiragana: "すずしい", vietnamese: "Mát" },
          { kanji: "", hiragana: "つめたい", vietnamese: "Lạnh (đồ ăn, nước uống)" },
          { kanji: "", hiragana: "ながい", vietnamese: "Dài" },
          { kanji: "", hiragana: "みじかい", vietnamese: "Ngắn" },
          { kanji: "", hiragana: "たのしい", vietnamese: "Vui" },
          { kanji: "", hiragana: "いそがしい", vietnamese: "Bận rộn" },
          { kanji: "", hiragana: "きたない", vietnamese: "Dơ bẩn" },
          { kanji: "", hiragana: "しろい", vietnamese: "Trắng" },
          { kanji: "", hiragana: "くろい", vietnamese: "Đen" },
          { kanji: "", hiragana: "あおい", vietnamese: "Xanh" },
          { kanji: "", hiragana: "あかい", vietnamese: "Đỏ" },
          { kanji: "", hiragana: "きいろい", vietnamese: "Vàng" },
          { kanji: "", hiragana: "ひま", vietnamese: "Rảnh" },
          { kanji: "", hiragana: "まじめ", vietnamese: "Chăm chỉ, nghiêm túc" },
          { kanji: "", hiragana: "ねっしん", vietnamese: "Nhiệt tình" },
          { kanji: "", hiragana: "しんせつ", vietnamese: "Tử tế, thân thiện" },
          { kanji: "", hiragana: "げんき", vietnamese: "Khỏe mạnh" },
          { kanji: "", hiragana: "じょうぶ", vietnamese: "Bền, chắc, khỏe" },
          { kanji: "", hiragana: "しずか", vietnamese: "Yên tĩnh, khẽ, nhẹ nhàng" },
          { kanji: "", hiragana: "にぎやか", vietnamese: "Náo nhiệt, nhộn nhịp" },
          { kanji: "", hiragana: "たいへん", vietnamese: "Vất vả, khó khăn (ĐẠI BIẾN)" },
          { kanji: "", hiragana: "ゆうめい", vietnamese: "Nổi tiếng (HỮU DANH)" },
          { kanji: "", hiragana: "きれい", vietnamese: "Đẹp, sạch, trong" },
          { kanji: "", hiragana: "べんり", vietnamese: "Tiện lợi (LIỆU LÝ)" },
          { kanji: "", hiragana: "りょうり", vietnamese: "Món ăn" },
          { kanji: "", hiragana: "くすり", vietnamese: "Thuốc" },
          { kanji: "", hiragana: "みかん", vietnamese: "Quả quýt" },
          { kanji: "", hiragana: "～ちゃん / ～くん", vietnamese: "Bé ~" },
          { kanji: "", hiragana: "たてもの", vietnamese: "Tòa nhà" },
          { kanji: "", hiragana: "やま", vietnamese: "Núi" },
          { kanji: "", hiragana: "ふじさん", vietnamese: "Núi Phú Sĩ (PHÚ SĨ SƠN)" },
          { kanji: "", hiragana: "うみ", vietnamese: "Biển" },
          { kanji: "", hiragana: "ところ", vietnamese: "Nơi, chỗ" },
          { kanji: "", hiragana: "まち", vietnamese: "Thành phố, thị trấn" },
          { kanji: "", hiragana: "いなか", vietnamese: "Miền quê, nông thôn" },
          { kanji: "", hiragana: "ふるさと", vietnamese: "Quê hương" },
          { kanji: "", hiragana: "おすし", vietnamese: "Sushi" },
          { kanji: "", hiragana: "さくらの はな", vietnamese: "Hoa anh đào" },
          { kanji: "", hiragana: "ふべん", vietnamese: "Bất tiện" },
          { kanji: "", hiragana: "どうですか", vietnamese: "Như thế nào?" },
          { kanji: "", hiragana: "どんな ～ですか", vietnamese: "~ như thế nào?" }
        ]
      },
      {
        id: "n5_b6",
        title: "Bài 6: Động từ & Biến đổi thể Động từ",
        description: "24 động từ cơ bản nhóm 1, 2, 3 và nền tảng biến đổi thể (V-masu, V-nai, V-te, V-ta...)",
        words: [
          { kanji: "洗う", hiragana: "あらう", vietnamese: "Rửa", group: 1 },
          { kanji: "習う", hiragana: "ならう", vietnamese: "Học", group: 1 },
          { kanji: "会う", hiragana: "あう", vietnamese: "Gặp", group: 1 },
          { kanji: "買う", hiragana: "かう", vietnamese: "Mua", group: 1 },
          { kanji: "行く", hiragana: "いく", vietnamese: "Đi", group: 1 },
          { kanji: "書く", hiragana: "かく", vietnamese: "Viết", group: 1 },
          { kanji: "聞く", hiragana: "きく", vietnamese: "Nghe", group: 1 },
          { kanji: "泳ぐ", hiragana: "およぐ", vietnamese: "Bơi", group: 1 },
          { kanji: "話す", hiragana: "はなす", vietnamese: "Nói chuyện", group: 1 },
          { kanji: "待つ", hiragana: "まつ", vietnamese: "Chờ, đợi", group: 1 },
          { kanji: "遊ぶ", hiragana: "あそぶ", vietnamese: "Chơi", group: 1 },
          { kanji: "読む", hiragana: "よむ", vietnamese: "Đọc", group: 1 },
          { kanji: "飲む", hiragana: "のむ", vietnamese: "Uống", group: 1 },
          { kanji: "休む", hiragana: "やすむ", vietnamese: "Nghỉ ngơi", group: 1 },
          { kanji: "作る", hiragana: "つくる", vietnamese: "Nấu ăn, làm ra", group: 1 },
          { kanji: "帰る", hiragana: "かえる", vietnamese: "Về, quay về, trở về", group: 1 },
          { kanji: "戻る", hiragana: "もどる", vietnamese: "Quay lại", group: 1 },
          { kanji: "食べる", hiragana: "たべる", vietnamese: "Ăn", group: 2 },
          { kanji: "寝る", hiragana: "ねる", vietnamese: "Ngủ", group: 2 },
          { kanji: "教える", hiragana: "おしえる", vietnamese: "Chỉ, dạy", group: 2 },
          { kanji: "見る", hiragana: "みる", vietnamese: "Xem, nhìn", group: 2 },
          { kanji: "起きる", hiragana: "おきる", vietnamese: "Thức, ngủ dậy", group: 2 },
          { kanji: "来る", hiragana: "くる", vietnamese: "Đến", group: 3 },
          { kanji: "する", hiragana: "する", vietnamese: "Làm", group: 3 }
        ]
      },
      {
        id: "n5_b7",
        title: "Bài 7: Động từ sơ cấp, Gia đình & Đồ dùng",
        description: "Động từ V1/V2/V3 (học, rửa, mua, viết, nghe...), thành viên gia đình và mở rộng danh từ động từ する",
        words: [
          { kanji: "習う", hiragana: "ならう", vietnamese: "Học (tiếng Nhật)", group: 1 },
          { kanji: "洗う", hiragana: "あらう", vietnamese: "Rửa (mặt)", group: 1 },
          { kanji: "買う", hiragana: "かう", vietnamese: "Mua (trái cây)", group: 1 },
          { kanji: "書く", hiragana: "かく", vietnamese: "Viết (thư)", group: 1 },
          { kanji: "聞く", hiragana: "きく", vietnamese: "Nghe (nhạc)", group: 1 },
          { kanji: "話す", hiragana: "はなす", vietnamese: "Nói chuyện (tiếng Nhật)", group: 1 },
          { kanji: "読む", hiragana: "よむ", vietnamese: "Đọc (báo)", group: 1 },
          { kanji: "飲む", hiragana: "のむ", vietnamese: "Uống (trà)", group: 1 },
          { kanji: "作る", hiragana: "つくる", vietnamese: "Nấu (món ăn), làm", group: 1 },
          { kanji: "行く", hiragana: "いく", vietnamese: "Đi (công viên)", group: 1 },
          { kanji: "帰る", hiragana: "かえる", vietnamese: "Về (nhà)", group: 1 },
          { kanji: "戻る", hiragana: "もどる", vietnamese: "Quay lại (phòng)", group: 1 },
          { kanji: "教える", hiragana: "おしえる", vietnamese: "Chỉ, dạy (tiếng Nhật)", group: 2 },
          { kanji: "食べる", hiragana: "たべる", vietnamese: "Ăn (cơm)", group: 2 },
          { kanji: "見る", hiragana: "みる", vietnamese: "Xem (tivi)", group: 2 },
          { kanji: "する", hiragana: "する", vietnamese: "Làm (bài tập, việc, tiệc, thể thao)", group: 3 },
          { kanji: "来る", hiragana: "くる", vietnamese: "Đến (trường)", group: 3 },
          { kanji: "顔", hiragana: "かお", vietnamese: "Mặt" },
          { kanji: "手紙", hiragana: "てがみ", vietnamese: "Lá thư" },
          { kanji: "日記", hiragana: "にっき", vietnamese: "Nhật ký (NHẬT KÝ)" },
          { kanji: "音楽", hiragana: "おんがく", vietnamese: "Âm nhạc (ÂM NHẠC)" },
          { kanji: "映画", hiragana: "えいが", vietnamese: "Phim (ÁNH HỌA)" },
          { kanji: "水", hiragana: "みず", vietnamese: "Nước" },
          { kanji: "お茶", hiragana: "おちゃ", vietnamese: "Trà" },
          { kanji: "牛乳", hiragana: "ぎゅうにゅう", vietnamese: "Sữa bò (NGƯU NHŨ)" },
          { kanji: "ご飯", hiragana: "ごはん", vietnamese: "Cơm (PHẠN)" },
          { kanji: "朝ご飯", hiragana: "あさごはん", vietnamese: "Cơm sáng" },
          { kanji: "昼ご飯", hiragana: "ひるごはん", vietnamese: "Cơm trưa" },
          { kanji: "晩ご飯", hiragana: "ばんごはん", vietnamese: "Cơm tối" },
          { kanji: "卵", hiragana: "たまご", vietnamese: "Trứng" },
          { kanji: "果物", hiragana: "くだもの", vietnamese: "Trái cây" },
          { kanji: "国", hiragana: "くに", vietnamese: "Đất nước" },
          { kanji: "飛行機", hiragana: "ひこうき", vietnamese: "Máy bay (PHI HÀNH CƠ)" },
          { kanji: "新幹線", hiragana: "しんかんせん", vietnamese: "Tàu cao tốc (TÂN CÁN TUYẾN)" },
          { kanji: "船", hiragana: "ふね", vietnamese: "Thuyền" },
          { kanji: "箸", hiragana: "はし", vietnamese: "Đôi đũa" },
          { kanji: "家族", hiragana: "かぞく", vietnamese: "Gia đình (GIA TỘC)" },
          { kanji: "両親", hiragana: "りょうしん", vietnamese: "Bố mẹ (LƯỠNG THÂN)" },
          { kanji: "父", hiragana: "ちち", vietnamese: "Bố (mình)" },
          { kanji: "お父さん", hiragana: "おとうさん", vietnamese: "Bố (người khác)" },
          { kanji: "母", hiragana: "はは", vietnamese: "Mẹ (mình)" },
          { kanji: "お母さん", hiragana: "おかあさん", vietnamese: "Mẹ (người khác)" },
          { kanji: "兄弟", hiragana: "きょうだい", vietnamese: "Anh chị em (HUYNH ĐỆ)" },
          { kanji: "兄", hiragana: "あに", vietnamese: "Anh trai (mình)" },
          { kanji: "お兄さん", hiragana: "おにいさん", vietnamese: "Anh trai (người khác)" },
          { kanji: "弟", hiragana: "おとうと", vietnamese: "Em trai (mình)" },
          { kanji: "おとうとさん", hiragana: "おとうとさん", vietnamese: "Em trai (người khác)" },
          { kanji: "姉", hiragana: "あね", vietnamese: "Chị gái (mình)" },
          { kanji: "お姉さん", hiragana: "おねえさん", vietnamese: "Chị gái (người khác)" },
          { kanji: "妹", hiragana: "いもうと", vietnamese: "Em gái (mình)" },
          { kanji: "いもうとさん", hiragana: "いもうとさん", vietnamese: "Em gái (người khác)" },
          { kanji: "親友", hiragana: "しんゆう", vietnamese: "Bạn thân (THÂN HỮU)" },
          { kanji: "友達", hiragana: "ともだち", vietnamese: "Bạn bè" },
          { kanji: "恋人", hiragana: "こいびと", vietnamese: "Người yêu" },
          { kanji: "会社の人", hiragana: "かいしゃのひと", vietnamese: "Người cùng công ty" },
          { kanji: "一人で", hiragana: "ひとりで", vietnamese: "Một mình" },
          { kanji: "週末", hiragana: "しゅうまつ", vietnamese: "Cuối tuần (CHU MẠT)" },
          { kanji: "", hiragana: "テレビ", vietnamese: "Tivi" },
          { kanji: "", hiragana: "アニメ", vietnamese: "Phim hoạt hình" },
          { kanji: "", hiragana: "レポート", vietnamese: "Bài báo cáo" },
          { kanji: "", hiragana: "ミルクティー", vietnamese: "Trà sữa" },
          { kanji: "", hiragana: "ジュース", vietnamese: "Nước ép trái cây" },
          { kanji: "", hiragana: "コーヒー", vietnamese: "Cà phê" },
          { kanji: "", hiragana: "ビール", vietnamese: "Bia" },
          { kanji: "", hiragana: "パン", vietnamese: "Bánh mì" },
          { kanji: "", hiragana: "サッカー", vietnamese: "Bóng đá" },
          { kanji: "", hiragana: "テニス", vietnamese: "Quần vợt, tennis" },
          { kanji: "", hiragana: "スーパー", vietnamese: "Siêu thị" },
          { kanji: "", hiragana: "コンビニ", vietnamese: "Cửa hàng tiện lợi" },
          { kanji: "", hiragana: "スプーン", vietnamese: "Cái muỗng" },
          { kanji: "", hiragana: "フォーク", vietnamese: "Cái nĩa" },
          { kanji: "", hiragana: "ナイフ", vietnamese: "Con dao" },
          { kanji: "", hiragana: "ユーチューブ", vietnamese: "Youtube" },
          { kanji: "勉強", hiragana: "べんきょう（をする）", vietnamese: "Học" },
          { kanji: "練習", hiragana: "れんしゅう（をする）", vietnamese: "Luyện tập" },
          { kanji: "相談", hiragana: "そうだん（をする）", vietnamese: "Trao đổi, tham khảo ý kiến" },
          { kanji: "留学", hiragana: "りゅうがく（をする）", vietnamese: "Du học" },
          { kanji: "料理", hiragana: "りょうり（をする）", vietnamese: "Nấu món ăn" },
          { kanji: "食事", hiragana: "しょくじ（をする）", vietnamese: "Dùng bữa" },
          { kanji: "買い物", hiragana: "かいもの（をする）", vietnamese: "Mua sắm" },
          { kanji: "散歩", hiragana: "さんぽ（をする）", vietnamese: "Đi dạo" },
          { kanji: "掃除", hiragana: "そうじ（をする）", vietnamese: "Quét dọn" },
          { kanji: "洗濯", hiragana: "せんたく（をする）", vietnamese: "Giặt giũ" },
          { kanji: "運動", hiragana: "うんどう（をする）", vietnamese: "Tập thể dục" },
          { kanji: "運転", hiragana: "うんてん（をする）", vietnamese: "Lái xe" },
          { kanji: "旅行", hiragana: "りょこう（をする）", vietnamese: "Du lịch" },
          { kanji: "出張", hiragana: "しゅっちょう（をする）", vietnamese: "Đi công tác" },
          { kanji: "結婚", hiragana: "けっこん（をする）", vietnamese: "Kết hôn" },
          { kanji: "", hiragana: "カラオケ（をする）", vietnamese: "Hát karaoke" },
          { kanji: "", hiragana: "ジョギング（をする）", vietnamese: "Chạy bộ" },
          { kanji: "", hiragana: "ハイキング（をする）", vietnamese: "Đi chơi dã ngoại" }
        ]
      },
      {
        id: "n5_b8",
        title: "Bài 8: Phương tiện & Bút viết, Biến đổi đuôi câu",
        description: "Phương tiện di chuyển, dụng cụ viết và quy tắc biến đổi lịch sự / thân mật",
        words: [
          { kanji: "", hiragana: "オートバイ", vietnamese: "Xe máy, xe môtô" },
          { kanji: "", hiragana: "バス", vietnamese: "Xe buýt" },
          { kanji: "", hiragana: "タクシー", vietnamese: "Xe taxi" },
          { kanji: "", hiragana: "ペン", vietnamese: "Bút, bút máy" },
          { kanji: "", hiragana: "ボールペン", vietnamese: "Bút bi" },
          { kanji: "", hiragana: "シャープペンシル", vietnamese: "Bút chì bấm" },
          { kanji: "", hiragana: "スプーン", vietnamese: "Cái muỗng" },
          { kanji: "", hiragana: "フォーク", vietnamese: "Cái nĩa" },
          { kanji: "", hiragana: "ナイフ", vietnamese: "Con dao" },
          { kanji: "一日", hiragana: "いちにち", vietnamese: "Một ngày (NHẤT NHẬT)" },
          { kanji: "", hiragana: "いつも", vietnamese: "Lúc nào cũng, thường hay" },
          { kanji: "", hiragana: "よく", vietnamese: "Thường, rõ, kỹ" },
          { kanji: "", hiragana: "それから", vietnamese: "Sau đó" }
        ]
      },
      {
        id: "n5_b9",
        title: "Bài 9: Tính từ, Thời gian & Hoạt động",
        description: "Chụp ảnh, các tính từ nóng/lạnh/ấm/mát/vui/bận, mốc thời gian theo tuần và phó từ",
        words: [
          { kanji: "写真を撮る", hiragana: "しゃしんをとる", vietnamese: "Chụp ảnh", group: 1 },
          { kanji: "暑い", hiragana: "あつい", vietnamese: "Nóng" },
          { kanji: "寒い", hiragana: "さむい", vietnamese: "Lạnh" },
          { kanji: "暖かい", hiragana: "あたたかい", vietnamese: "Ấm" },
          { kanji: "涼しい", hiragana: "すずしい", vietnamese: "Mát" },
          { kanji: "楽しい", hiragana: "たのしい", vietnamese: "Vui" },
          { kanji: "忙しい", hiragana: "いそがしい", vietnamese: "Bận rộn" },
          { kanji: "暇", hiragana: "ひま", vietnamese: "Rảnh rỗi" },
          { kanji: "簡単", hiragana: "かんたん", vietnamese: "Đơn giản" },
          { kanji: "複雑", hiragana: "ふくざつ", vietnamese: "Phức tạp" },
          { kanji: "先々週", hiragana: "せんせんしゅう", vietnamese: "Tuần trước nữa" },
          { kanji: "先週", hiragana: "せんしゅう", vietnamese: "Tuần trước (TIÊN CHU)" },
          { kanji: "今週", hiragana: "こんしゅう", vietnamese: "Tuần này (KIM CHU)" },
          { kanji: "来週", hiragana: "らいしゅう", vietnamese: "Tuần tới (LAI CHU)" },
          { kanji: "再来週", hiragana: "さらいしゅう", vietnamese: "Tuần tới nữa" },
          { kanji: "今朝", hiragana: "けさ", vietnamese: "Sáng nay" },
          { kanji: "夕べ", hiragana: "ゆうべ", vietnamese: "Tối qua" },
          { kanji: "昔", hiragana: "むかし", vietnamese: "Ngày xưa" },
          { kanji: "天気", hiragana: "てんき", vietnamese: "Thời tiết (THIÊN KHÍ)" },
          { kanji: "", hiragana: "へん", vietnamese: "Vùng, khu vực" },
          { kanji: "赤ちゃん", hiragana: "あかちゃん", vietnamese: "Em bé" },
          { kanji: "", hiragana: "テスト", vietnamese: "Bài kiểm tra" },
          { kanji: "", hiragana: "パーティー", vietnamese: "Bữa tiệc" },
          { kanji: "", hiragana: "レストラン", vietnamese: "Nhà hàng" },
          { kanji: "", hiragana: "カラオケ", vietnamese: "Karaoke" },
          { kanji: "もう", hiragana: "もう", vietnamese: "Đã, rồi" },
          { kanji: "まだ", hiragana: "まだ", vietnamese: "Chưa, vẫn" },
          { kanji: "これから / いまから", hiragana: "これから / いまから", vietnamese: "Từ bây giờ" },
          { kanji: "一緒に", hiragana: "いっしょに", vietnamese: "Cùng nhau" },
          { kanji: "また", hiragana: "また", vietnamese: "Lại, nữa" },
          { kanji: "大人", hiragana: "おとな", vietnamese: "Người lớn" },
          { kanji: "子供", hiragana: "こども", vietnamese: "Trẻ con, con cái" },
          { kanji: "切符", hiragana: "きっぷ", vietnamese: "Vé" },
          { kanji: "花見", hiragana: "はなみ", vietnamese: "Việc ngắm hoa" }
        ]
      },
      {
        id: "n5_b10",
        title: "Bài 10: Thời gian, Gia đình & Đơn vị thời lượng",
        description: "Động từ tốn thời gian/tiền bạc, đánh răng, các kỳ nghỉ, bảng thời lượng (giờ, ngày, tuần, tháng)",
        words: [
          { kanji: "掛かる", hiragana: "かかる", vietnamese: "Tốn (thời gian, tiền)", group: 1 },
          { kanji: "始まる", hiragana: "はじまる", vietnamese: "(giờ học) Bắt đầu", group: 1 },
          { kanji: "終わる", hiragana: "おわる", vietnamese: "(giờ học) Kết thúc", group: 1 },
          { kanji: "磨く", hiragana: "みがく", vietnamese: "Đánh (răng)", group: 1 },
          { kanji: "受ける", hiragana: "うける", vietnamese: "Kiểm tra sức khỏe, tham gia thi", group: 2 },
          { kanji: "毎朝", hiragana: "まいあさ", vietnamese: "Mỗi sáng (MỖI TRIÊU)" },
          { kanji: "毎晩", hiragana: "まいばん", vietnamese: "Mỗi tối (MỖI VÃN)" },
          { kanji: "毎日", hiragana: "まいにち", vietnamese: "Mỗi ngày (MỖI NHẬT)" },
          { kanji: "毎週", hiragana: "まいしゅう", vietnamese: "Mỗi tuần (MỖI CHU)" },
          { kanji: "毎月", hiragana: "まいつき", vietnamese: "Mỗi tháng (MỖI NGUYỆT)" },
          { kanji: "毎年", hiragana: "まいとし", vietnamese: "Mỗi năm (MỖI NIÊN)" },
          { kanji: "お正月", hiragana: "おしょうがつ", vietnamese: "Tết (CHÍNH NGUYỆT)" },
          { kanji: "春休み", hiragana: "はるやすみ", vietnamese: "Nghỉ xuân" },
          { kanji: "夏休み", hiragana: "なつやすみ", vietnamese: "Nghỉ hè" },
          { kanji: "冬休み", hiragana: "ふゆやすみ", vietnamese: "Nghỉ đông" },
          { kanji: "高速船", hiragana: "こうそくせん", vietnamese: "Tàu cánh ngầm cao tốc" },
          { kanji: "～回", hiragana: "～かい", vietnamese: "~ Lần (HỒI)" },
          { kanji: "何回", hiragana: "なんかい", vietnamese: "Bao nhiêu lần?" },
          { kanji: "疲れる", hiragana: "つかれる", vietnamese: "Mệt", group: 2 },
          { kanji: "お祭り", hiragana: "おまつり", vietnamese: "Lễ hội" },
          { kanji: "", hiragana: "グラブ", vietnamese: "Xe Grab" },
          { kanji: "", hiragana: "アルバイト", vietnamese: "Việc làm thêm" },
          { kanji: "", hiragana: "バドミントン", vietnamese: "Cầu lông" },
          { kanji: "", hiragana: "ジム", vietnamese: "Phòng tập Gym" },
          { kanji: "どのぐらい / どのくらい", hiragana: "どのぐらい / どのくらい", vietnamese: "Khoảng bao lâu / bao nhiêu" }
        ]
      },
      {
        id: "n5_b11",
        title: "Bài 11: Động từ & Trợ từ chuyển động, Nơi chốn",
        description: "Đi kèm trợ từ に / から / を / と: vào, lên, xuống, rời, leo núi, bay trên trời, băng qua cầu...",
        words: [
          { kanji: "聞く", hiragana: "きく", vietnamese: "Hỏi (giáo viên)", group: 1 },
          { kanji: "貸す", hiragana: "かす", vietnamese: "Cho mượn, cho thuê", group: 1 },
          { kanji: "出す", hiragana: "だす", vietnamese: "Nộp, gửi (báo cáo)", group: 1 },
          { kanji: "返す", hiragana: "かえす", vietnamese: "Trả lại (sách)", group: 1 },
          { kanji: "送る", hiragana: "おくる", vietnamese: "Gửi (email)", group: 1 },
          { kanji: "見せる", hiragana: "みせる", vietnamese: "Cho xem (ảnh)", group: 2 },
          { kanji: "電話を掛ける", hiragana: "でんわをかける", vietnamese: "Gọi điện thoại", group: 2 },
          { kanji: "借りる", hiragana: "かりる", vietnamese: "Mượn, vay, thuê (từ ai)", group: 2 },
          { kanji: "入る", hiragana: "はいる", vietnamese: "Vào (phòng học)", group: 1 },
          { kanji: "乗る", hiragana: "のる", vietnamese: "Lên (xe), cưỡi (ngựa)", group: 1 },
          { kanji: "登る", hiragana: "のぼる", vietnamese: "Leo (núi)", group: 1 },
          { kanji: "着く", hiragana: "つく", vietnamese: "Đến (sân bay)", group: 1 },
          { kanji: "出る", hiragana: "でる", vietnamese: "Rời khỏi (nhà)", group: 2 },
          { kanji: "降りる", hiragana: "おりる", vietnamese: "Xuống (xe)", group: 2 },
          { kanji: "卒業する", hiragana: "そつぎょうする", vietnamese: "Tốt nghiệp (đại học)", group: 3 },
          { kanji: "出発する", hiragana: "しゅっぱつする", vietnamese: "Xuất phát, rời (sân bay)", group: 3 },
          { kanji: "言葉", hiragana: "ことば", vietnamese: "Từ, ngôn ngữ" },
          { kanji: "意味", hiragana: "いみ", vietnamese: "Ý nghĩa" },
          { kanji: "お金", hiragana: "おかね", vietnamese: "Tiền" },
          { kanji: "部長", hiragana: "ぶちょう", vietnamese: "Trưởng phòng (BỘ TRƯỞNG)" },
          { kanji: "課長", hiragana: "かちょう", vietnamese: "Trưởng ban" },
          { kanji: "話", hiragana: "はなし", vietnamese: "Câu chuyện" },
          { kanji: "お風呂", hiragana: "おふろ", vietnamese: "Bồn tắm" },
          { kanji: "", hiragana: "メール", vietnamese: "Thư điện tử" },
          { kanji: "飛ぶ", hiragana: "とぶ", vietnamese: "Bay (trên bầu trời)", group: 1 },
          { kanji: "走る", hiragana: "はしる", vietnamese: "Chạy (trên đường)", group: 1 },
          { kanji: "通る", hiragana: "とおる", vietnamese: "Đi qua (đường)", group: 1 },
          { kanji: "渡る", hiragana: "わたる", vietnamese: "Băng qua (cầu)", group: 1 },
          { kanji: "歩く", hiragana: "あるく", vietnamese: "Đi bộ (trong công viên)", group: 1 },
          { kanji: "立つ", hiragana: "たつ", vietnamese: "Đứng (ở lối vào)", group: 1 },
          { kanji: "座る", hiragana: "すわる", vietnamese: "Ngồi (ở đằng kia)", group: 1 },
          { kanji: "泊まる", hiragana: "とまる", vietnamese: "Trọ lại, ngủ lại (khách sạn)", group: 1 },
          { kanji: "止まる", hiragana: "とまる", vietnamese: "Dừng, đậu (mỗi ga)", group: 1 },
          { kanji: "置く", hiragana: "おく", vietnamese: "Đặt, để (xe đạp ở...)", group: 1 },
          { kanji: "貼る", hiragana: "はる", vietnamese: "Dán tem (vào phong bì)", group: 1 },
          { kanji: "入れる", hiragana: "いれる", vietnamese: "Bỏ (bia vào tủ lạnh)", group: 2 },
          { kanji: "掛ける", hiragana: "かける", vietnamese: "Treo (lịch lên tường)", group: 2 },
          { kanji: "答える", hiragana: "こたえる", vietnamese: "Trả lời (cho...)", group: 2 },
          { kanji: "質問する", hiragana: "しつもんする", vietnamese: "Đặt câu hỏi", group: 3 },
          { kanji: "別れる", hiragana: "わかれる", vietnamese: "Chia tay (với...)", group: 2 },
          { kanji: "試合をする", hiragana: "しあいをする", vietnamese: "Thi đấu", group: 3 },
          { kanji: "戦争をする", hiragana: "せんそうをする", vietnamese: "Chiến đấu", group: 3 }
        ]
      },
      {
        id: "n5_b12",
        title: "Bài 12: Vị trí, Động vật, Trái cây & Số đếm",
        description: "Từ chỉ vị trí, con vật, trái cây, đồ vật trong nhà và bảng đơn vị đếm (cái, người, cuốn, tờ, chiếc, con...)",
        words: [
          { kanji: "上 / 下", hiragana: "うえ / した", vietnamese: "Phía trên / Phía dưới" },
          { kanji: "前 / 後ろ", hiragana: "まえ / うしろ", vietnamese: "Phía trước / Phía sau" },
          { kanji: "右 / 左", hiragana: "みぎ / ひだり", vietnamese: "Bên phải / Bên trái" },
          { kanji: "中 / 外", hiragana: "なか / そと", vietnamese: "Bên trong / Bên ngoài" },
          { kanji: "隣", hiragana: "となり", vietnamese: "Bên cạnh, sát bên" },
          { kanji: "横", hiragana: "よこ", vietnamese: "Bên cạnh, bên hông" },
          { kanji: "側", hiragana: "そば", vietnamese: "Bên cạnh" },
          { kanji: "間", hiragana: "あいだ", vietnamese: "Ở giữa" },
          { kanji: "近く", hiragana: "ちかく", vietnamese: "Gần, chỗ gần" },
          { kanji: "遠く", hiragana: "とおく", vietnamese: "Phía xa, đằng xa" },
          { kanji: "向こう", hiragana: "むこう", vietnamese: "Phía bên kia" },
          { kanji: "猫", hiragana: "ねこ", vietnamese: "Mèo" },
          { kanji: "犬", hiragana: "いぬ", vietnamese: "Chó" },
          { kanji: "鳥", hiragana: "とり", vietnamese: "Chim" },
          { kanji: "小鳥", hiragana: "ことり", vietnamese: "Chim nhỏ" },
          { kanji: "鶏", hiragana: "にわとり", vietnamese: "Gà" },
          { kanji: "魚", hiragana: "さかな", vietnamese: "Cá" },
          { kanji: "鼠", hiragana: "ねずみ", vietnamese: "Chuột" },
          { kanji: "蟹", hiragana: "かに", vietnamese: "Cua" },
          { kanji: "牛", hiragana: "うし", vietnamese: "Bò" },
          { kanji: "馬", hiragana: "うま", vietnamese: "Ngựa" },
          { kanji: "兎", hiragana: "うさぎ", vietnamese: "Thỏ" },
          { kanji: "亀", hiragana: "かめ", vietnamese: "Rùa" },
          { kanji: "象", hiragana: "ぞう", vietnamese: "Voi" },
          { kanji: "", hiragana: "キリン", vietnamese: "Hươu cao cổ" },
          { kanji: "", hiragana: "ライオン", vietnamese: "Sư tử" },
          { kanji: "", hiragana: "パンダ", vietnamese: "Gấu trúc" },
          { kanji: "林檎", hiragana: "りんご", vietnamese: "Táo" },
          { kanji: "蜜柑", hiragana: "みかん", vietnamese: "Quýt" },
          { kanji: "柿", hiragana: "かき", vietnamese: "Hồng" },
          { kanji: "桃", hiragana: "もも", vietnamese: "Đào" },
          { kanji: "梨", hiragana: "なし", vietnamese: "Lê" },
          { kanji: "西瓜", hiragana: "すいか", vietnamese: "Dưa hấu" },
          { kanji: "葡萄", hiragana: "ぶどう", vietnamese: "Nho" },
          { kanji: "苺", hiragana: "いちご", vietnamese: "Dâu" },
          { kanji: "", hiragana: "バナナ", vietnamese: "Chuối" },
          { kanji: "", hiragana: "マンゴー", vietnamese: "Xoài" },
          { kanji: "", hiragana: "メロン", vietnamese: "Dưa lưới" },
          { kanji: "", hiragana: "オレンジ", vietnamese: "Cam" },
          { kanji: "", hiragana: "ドリアン", vietnamese: "Sầu riêng" },
          { kanji: "", hiragana: "ココナッツ", vietnamese: "Dừa" },
          { kanji: "", hiragana: "パイナップル", vietnamese: "Dứa, thơm" },
          { kanji: "", hiragana: "パパイヤ", vietnamese: "Đu đủ" },
          { kanji: "ある", hiragana: "ある", vietnamese: "Có, ở (đồ vật)", group: 1 },
          { kanji: "いる", hiragana: "いる", vietnamese: "Có, ở (người, động vật)", group: 2 },
          { kanji: "職員室", hiragana: "しょくいんしつ", vietnamese: "Phòng giáo viên" },
          { kanji: "交番", hiragana: "こうばん", vietnamese: "Đồn công an (GIAO PHIÊN)" },
          { kanji: "本棚", hiragana: "ほんだな", vietnamese: "Kệ sách" },
          { kanji: "子供たち", hiragana: "こどもたち", vietnamese: "Bọn trẻ" },
          { kanji: "枝", hiragana: "えだ", vietnamese: "Cành cây" },
          { kanji: "屋根", hiragana: "やね", vietnamese: "Mái nhà" },
          { kanji: "", hiragana: "たんす", vietnamese: "Tủ quần áo" },
          { kanji: "", hiragana: "トイレ", vietnamese: "Nhà vệ sinh" },
          { kanji: "", hiragana: "シャツ", vietnamese: "Áo sơ mi" },
          { kanji: "会場", hiragana: "かいじょう", vietnamese: "Hội trường (HỘI TRƯỜNG)" },
          { kanji: "屋上", hiragana: "おくじょう", vietnamese: "Sân thượng" },
          { kanji: "運動場", hiragana: "うんどうじょう", vietnamese: "Sân vận động (VẬN ĐỘNG TRƯỜNG)" },
          { kanji: "発表会", hiragana: "はっぴょうかい", vietnamese: "Hội phát biểu" },
          { kanji: "誕生日パーティー", hiragana: "たんじょうパーティー", vietnamese: "Tiệc sinh nhật" },
          { kanji: "試合", hiragana: "しあい", vietnamese: "Trận đấu (thể thao)" },
          { kanji: "地震", hiragana: "じしん", vietnamese: "Động đất" },
          { kanji: "火事", hiragana: "かじ", vietnamese: "Hỏa hoạn (HỎA SỰ)" },
          { kanji: "交通事故", hiragana: "こうつうじこ", vietnamese: "Sự cố, tai nạn giao thông (GIAO THÔNG SỰ CỐ)" },
          { kanji: "花火大会", hiragana: "はなびたいかい", vietnamese: "Lễ hội pháo hoa" },
          { kanji: "池", hiragana: "いけ", vietnamese: "Ao" },
          { kanji: "袋", hiragana: "ふくろ", vietnamese: "Túi, bao" },
          { kanji: "地図", hiragana: "ちず", vietnamese: "Bản đồ (ĐỊA ĐỒ)" },
          { kanji: "買い物客", hiragana: "かいものきゃく", vietnamese: "Người mua sắm" },
          { kanji: "", hiragana: "ペット", vietnamese: "Thú cưng" },
          { kanji: "", hiragana: "デパート", vietnamese: "Trung tâm thương mại" },
          { kanji: "たくさん", hiragana: "たくさん", vietnamese: "Nhiều" },
          { kanji: "大勢", hiragana: "おおぜい", vietnamese: "Nhiều người" },
          { kanji: "誰か", hiragana: "だれか", vietnamese: "Ai đó" },
          { kanji: "何か", hiragana: "なにか", vietnamese: "Cái gì đó" },
          { kanji: "どこか", hiragana: "どこか", vietnamese: "Ở đâu đó" }
        ]
      },
      {
        id: "n5_b13",
        title: "Bài 13: Cơ thể, Sở thích, Môn học, Màu sắc & Món ăn",
        description: "Các bộ phận cơ thể, thể loại nhạc/phim/thể thao, môn học, màu sắc, ẩm thực Nhật và tính từ",
        words: [
          { kanji: "体", hiragana: "からだ", vietnamese: "Cơ thể" },
          { kanji: "背", hiragana: "せ", vietnamese: "Dáng, chiều cao" },
          { kanji: "肌", hiragana: "はだ", vietnamese: "Da" },
          { kanji: "毛", hiragana: "け", vietnamese: "Lông" },
          { kanji: "髪の毛", hiragana: "かみのけ", vietnamese: "Tóc" },
          { kanji: "頭", hiragana: "あたま", vietnamese: "Đầu" },
          { kanji: "顔", hiragana: "かお", vietnamese: "Khuôn mặt" },
          { kanji: "耳", hiragana: "みみ", vietnamese: "Tai" },
          { kanji: "目", hiragana: "め", vietnamese: "Mắt" },
          { kanji: "鼻", hiragana: "はな", vietnamese: "Mũi" },
          { kanji: "口", hiragana: "くち", vietnamese: "Miệng" },
          { kanji: "首", hiragana: "くび", vietnamese: "Cổ" },
          { kanji: "喉", hiragana: "のど", vietnamese: "Họng" },
          { kanji: "お腹", hiragana: "おなか", vietnamese: "Bụng" },
          { kanji: "手", hiragana: "て", vietnamese: "Bàn tay" },
          { kanji: "指", hiragana: "ゆび", vietnamese: "Ngón tay" },
          { kanji: "腕", hiragana: "うで", vietnamese: "Cánh tay" },
          { kanji: "足", hiragana: "あし", vietnamese: "Chân" },
          { kanji: "尻尾", hiragana: "しっぽ", vietnamese: "Cái đuôi" },
          { kanji: "数学", hiragana: "すうがく", vietnamese: "Số học, toán" },
          { kanji: "物理", hiragana: "ぶつり", vietnamese: "Vật lý" },
          { kanji: "化学", hiragana: "かがく", vietnamese: "Hóa học" },
          { kanji: "生物", hiragana: "せいぶつ", vietnamese: "Sinh vật" },
          { kanji: "国語", hiragana: "こくご", vietnamese: "Quốc ngữ" },
          { kanji: "漢字", hiragana: "かんじ", vietnamese: "Hán tự" },
          { kanji: "会話", hiragana: "かいわ", vietnamese: "Hội thoại" },
          { kanji: "作文", hiragana: "さくぶん", vietnamese: "Tập làm văn" },
          { kanji: "文法", hiragana: "ぶんぽう", vietnamese: "Văn phạm" },
          { kanji: "読解", hiragana: "どっかい", vietnamese: "Đọc hiểu" },
          { kanji: "白", hiragana: "しろ", vietnamese: "Màu trắng" },
          { kanji: "黒", hiragana: "くろ", vietnamese: "Màu đen" },
          { kanji: "青", hiragana: "あお", vietnamese: "Màu xanh" },
          { kanji: "赤", hiragana: "あか", vietnamese: "Màu đỏ" },
          { kanji: "黄色", hiragana: "きいろ", vietnamese: "Màu vàng" },
          { kanji: "金色", hiragana: "きんいろ", vietnamese: "Màu vàng kim" },
          { kanji: "銀色", hiragana: "ぎんいろ", vietnamese: "Màu bạc" },
          { kanji: "茶色", hiragana: "ちゃいろ", vietnamese: "Màu nâu" },
          { kanji: "灰色", hiragana: "はいいろ", vietnamese: "Màu xám" },
          { kanji: "緑", hiragana: "みどり", vietnamese: "Màu xanh lá cây" },
          { kanji: "紫", hiragana: "むらさき", vietnamese: "Màu tím" },
          { kanji: "", hiragana: "ピンク", vietnamese: "Màu hồng" },
          { kanji: "", hiragana: "すし", vietnamese: "Sushi" },
          { kanji: "", hiragana: "さしみ", vietnamese: "Sashimi" },
          { kanji: "", hiragana: "てんぷら", vietnamese: "Tempura" },
          { kanji: "", hiragana: "うどん", vietnamese: "Mì Udon" },
          { kanji: "", hiragana: "そば", vietnamese: "Mì soba" },
          { kanji: "", hiragana: "ラーメン", vietnamese: "Mì Ramen" },
          { kanji: "", hiragana: "とんかつ", vietnamese: "Thịt heo chiên xù" },
          { kanji: "", hiragana: "ぎゅうどん", vietnamese: "Cơm thịt bò" },
          { kanji: "", hiragana: "おこのみやき", vietnamese: "Bánh xèo Nhật" },
          { kanji: "", hiragana: "コロッケ", vietnamese: "Bánh khoai tây rán" },
          { kanji: "味噌汁", hiragana: "みそしる", vietnamese: "Súp Miso" },
          { kanji: "", hiragana: "おにぎり", vietnamese: "Cơm nắm" },
          { kanji: "", hiragana: "すきやき", vietnamese: "Món Sukiyaki" },
          { kanji: "", hiragana: "しゃぶしゃぶ", vietnamese: "Lẩu Shabu Shabu" },
          { kanji: "", hiragana: "たこやき", vietnamese: "Bạch tuộc nướng" },
          { kanji: "", hiragana: "なっとう", vietnamese: "Natto (đậu tương lên men)" },
          { kanji: "絵を描く", hiragana: "えをかく", vietnamese: "Vẽ tranh", group: 1 },
          { kanji: "風邪を引く", hiragana: "かぜをひく", vietnamese: "Bị cảm", group: 1 },
          { kanji: "弾く", hiragana: "ひく", vietnamese: "Đánh (đàn ghita)", group: 1 },
          { kanji: "学ぶ", hiragana: "まなぶ", vietnamese: "Học (tiếng Anh)", group: 1 },
          { kanji: "使う", hiragana: "つかう", vietnamese: "Sử dụng (máy tính)", group: 1 },
          { kanji: "集める", hiragana: "あつめる", vietnamese: "Thu thập, sưu tầm (tem)", group: 2 },
          { kanji: "遅れる", hiragana: "おくれる", vietnamese: "Trễ (giờ học)", group: 2 },
          { kanji: "出かける", hiragana: "でかける", vietnamese: "Đi ra ngoài", group: 2 },
          { kanji: "出来る", hiragana: "できる", vietnamese: "Có thể", group: 2 },
          { kanji: "予約する", hiragana: "よやくする", vietnamese: "Đặt trước (khách sạn)", group: 3 },
          { kanji: "速い", hiragana: "はやい", vietnamese: "Nhanh" },
          { kanji: "遅い", hiragana: "おそい", vietnamese: "Chậm, trễ" },
          { kanji: "多い", hiragana: "おおい", vietnamese: "Nhiều" },
          { kanji: "少ない", hiragana: "すくない", vietnamese: "Ít" },
          { kanji: "若い", hiragana: "わかい", vietnamese: "Trẻ trung" },
          { kanji: "欲しい", hiragana: "ほしい", vietnamese: "Muốn có" },
          { kanji: "冷たい", hiragana: "つめたい", vietnamese: "Lạnh" },
          { kanji: "便利", hiragana: "べんり", vietnamese: "Tiện lợi" },
          { kanji: "不便", hiragana: "ふべん", vietnamese: "Bất tiện" },
          { kanji: "好き", hiragana: "すき", vietnamese: "Thích" },
          { kanji: "嫌い", hiragana: "きらい", vietnamese: "Ghét" },
          { kanji: "上手", hiragana: "じょうず", vietnamese: "Giỏi" },
          { kanji: "下手", hiragana: "へた", vietnamese: "Dở" },
          { kanji: "得意", hiragana: "とくい", vietnamese: "Có khiếu, giỏi" },
          { kanji: "苦手", hiragana: "にがて", vietnamese: "Dở, không thích" },
          { kanji: "自由", hiragana: "じゆう", vietnamese: "Tự do" },
          { kanji: "交通", hiragana: "こうつう", vietnamese: "Giao thông" },
          { kanji: "物価", hiragana: "ぶっか", vietnamese: "Vật giá" },
          { kanji: "一番", hiragana: "いちばん", vietnamese: "Nhất" },
          { kanji: "外国語", hiragana: "がいこくご", vietnamese: "Tiếng nước ngoài" },
          { kanji: "趣味", hiragana: "しゅみ", vietnamese: "Sở thích" },
          { kanji: "図書館", hiragana: "としょかん", vietnamese: "Thư viện" },
          { kanji: "字", hiragana: "じ", vietnamese: "Chữ viết" },
          { kanji: "気", hiragana: "き", vietnamese: "Tính cách, tâm trạng" },
          { kanji: "学費", hiragana: "がくひ", vietnamese: "Học phí" },
          { kanji: "渋滞", hiragana: "じゅうたい", vietnamese: "Kẹt xe" },
          { kanji: "熱", hiragana: "ねつ", vietnamese: "Nóng sốt" },
          { kanji: "風邪", hiragana: "かぜ", vietnamese: "Bị cảm" },
          { kanji: "約束", hiragana: "やくそく", vietnamese: "Lời hứa, hẹn" },
          { kanji: "用事", hiragana: "ようじ", vietnamese: "Việc riêng" },
          { kanji: "彼", hiragana: "かれ", vietnamese: "Anh ấy" },
          { kanji: "彼女", hiragana: "かのじょ", vietnamese: "Cô ấy, bạn gái" },
          { kanji: "心", hiragana: "こころ", vietnamese: "Tấm lòng" },
          { kanji: "声", hiragana: "こえ", vietnamese: "Tiếng, giọng nói" },
          { kanji: "力", hiragana: "ちから", vietnamese: "Sức lực" },
          { kanji: "絵", hiragana: "え", vietnamese: "Tranh" },
          { kanji: "歌", hiragana: "うた", vietnamese: "Bài hát" },
          { kanji: "お腹が空く", hiragana: "おなかがすく", vietnamese: "Đói bụng", group: 1 },
          { kanji: "喉が渇く", hiragana: "のどがかわく", vietnamese: "Khát nước", group: 1 },
          { kanji: "丸い", hiragana: "まるい", vietnamese: "Tròn" },
          { kanji: "細い", hiragana: "ほそい", vietnamese: "Thon, ốm" },
          { kanji: "太い", hiragana: "ふとい", vietnamese: "Mập" },
          { kanji: "痛い", hiragana: "いたい", vietnamese: "Đau, nhức" },
          { kanji: "だるい", hiragana: "だるい", vietnamese: "Uể oải" },
          { kanji: "寂しい", hiragana: "さびしい", vietnamese: "Buồn, cô đơn" },
          { kanji: "色々", hiragana: "いろいろ", vietnamese: "Nhiều loại" },
          { kanji: "気持ち", hiragana: "きもち", vietnamese: "Cảm giác, tâm trạng" },
          { kanji: "身長", hiragana: "しんちょう", vietnamese: "Chiều cao" },
          { kanji: "体重", hiragana: "たいじゅう", vietnamese: "Cân nặng" },
          { kanji: "特に", hiragana: "とくに", vietnamese: "Đặc biệt là" }
        ]
      },
      {
        id: "n5_b15",
        title: "Bài 15: Đô thị, Xã hội & So sánh",
        description: "Dậy sớm, thông minh, đẹp trai, so sánh đô thị - nông thôn và vị trí gần xa",
        words: [
          { kanji: "早起きする", hiragana: "はやおきする", vietnamese: "Dậy sớm", group: 3 },
          { kanji: "頭がいい", hiragana: "あたまがいい", vietnamese: "Thông minh" },
          { kanji: "", hiragana: "ハンサム", vietnamese: "Đẹp trai" },
          { kanji: "世界", hiragana: "せかい", vietnamese: "Thế giới" },
          { kanji: "一番", hiragana: "いちばん", vietnamese: "Nhất" },
          { kanji: "現在", hiragana: "げんざい", vietnamese: "Hiện tại" },
          { kanji: "景気", hiragana: "けいき", vietnamese: "Tình hình kinh tế" },
          { kanji: "字", hiragana: "じ", vietnamese: "Chữ viết" },
          { kanji: "人口", hiragana: "じんこう", vietnamese: "Dân số" },
          { kanji: "時間", hiragana: "じかん", vietnamese: "Thời gian" },
          { kanji: "栄養", hiragana: "えいよう", vietnamese: "Dinh dưỡng" },
          { kanji: "両方", hiragana: "りょうほう", vietnamese: "Cả hai" },
          { kanji: "都市", hiragana: "とし", vietnamese: "Thành phố, đô thị" },
          { kanji: "田舎", hiragana: "いなか", vietnamese: "Nông thôn" },
          { kanji: "年上", hiragana: "としうえ", vietnamese: "Lớn tuổi hơn" },
          { kanji: "年下", hiragana: "としした", vietnamese: "Nhỏ tuổi hơn" },
          { kanji: "同じ", hiragana: "おなじ", vietnamese: "Giống nhau, cùng" },
          { kanji: "", hiragana: "エベレスト", vietnamese: "Đỉnh Everest" },
          { kanji: "近い", hiragana: "ちかい", vietnamese: "Gần (trường)" },
          { kanji: "遠い", hiragana: "とおい", vietnamese: "Xa (trường)" },
          { kanji: "店", hiragana: "みせ", vietnamese: "Cửa hàng" },
          { kanji: "次", hiragana: "つぎ", vietnamese: "Tiếp theo" },
          { kanji: "時々", hiragana: "ときどき", vietnamese: "Đôi khi, thỉnh thoảng" },
          { kanji: "何でも", hiragana: "なんでも", vietnamese: "Bất cứ cái gì" }
        ]
      },
      {
        id: "n5_b16",
        title: "Bài 16: Động từ đời sống, Thời tiết & Cách làm (〜かた)",
        description: "Động từ khô, sống, trở thành, nhớ; thời tiết gió/mưa; phương hướng bắc/trung/nam và mẫu 〜かた",
        words: [
          { kanji: "歩く", hiragana: "あるく", vietnamese: "Đi bộ, đi", group: 1 },
          { kanji: "乾く", hiragana: "かわく", vietnamese: "(đồ giặt) Khô", group: 1 },
          { kanji: "住む", hiragana: "すむ", vietnamese: "Sinh sống, sống (ở Nhật)", group: 1 },
          { kanji: "なる", hiragana: "なる", vietnamese: "Trở thành, trở nên", group: 1 },
          { kanji: "当たる", hiragana: "あたる", vietnamese: "Trúng (xổ số)", group: 1 },
          { kanji: "変わる", hiragana: "かわる", vietnamese: "(thời tiết) Thay đổi", group: 1 },
          { kanji: "起こる", hiragana: "おこる", vietnamese: "(tai nạn) Xảy ra", group: 1 },
          { kanji: "割れる", hiragana: "われる", vietnamese: "(kính cửa sổ) Vỡ", group: 2 },
          { kanji: "覚える", hiragana: "おぼえる", vietnamese: "Nhớ, học thuộc (Hán tự)", group: 2 },
          { kanji: "長い", hiragana: "ながい", vietnamese: "Dài" },
          { kanji: "短い", hiragana: "みじかい", vietnamese: "Ngắn" },
          { kanji: "濃い", hiragana: "こい", vietnamese: "Đậm, đặc" },
          { kanji: "薄い", hiragana: "うすい", vietnamese: "Nhạt, mờ, mỏng" },
          { kanji: "丁寧", hiragana: "ていねい", vietnamese: "Lịch sự" },
          { kanji: "客", hiragana: "おきゃく", vietnamese: "Khách hàng" },
          { kanji: "半分", hiragana: "はんぶん", vietnamese: "Một nửa" },
          { kanji: "お金持ち", hiragana: "おかねもち", vietnamese: "Giàu có" },
          { kanji: "宝くじ", hiragana: "たからくじ", vietnamese: "Vé số, xổ số" },
          { kanji: "話", hiragana: "はなし", vietnamese: "Câu chuyện" },
          { kanji: "鋏", hiragana: "はさみ", vietnamese: "Cái kéo" },
          { kanji: "洗濯物", hiragana: "せんたくもの", vietnamese: "Quần áo giặt" },
          { kanji: "窓ガラス", hiragana: "まどガラス", vietnamese: "Kính cửa sổ" },
          { kanji: "風が吹く", hiragana: "かぜがふく", vietnamese: "Gió thổi", group: 1 },
          { kanji: "雨が降る", hiragana: "あめがふる", vietnamese: "Trời mưa", group: 1 },
          { kanji: "雨が止む", hiragana: "あめがやむ", vietnamese: "Tạnh mưa", group: 1 },
          { kanji: "安全", hiragana: "あんぜん", vietnamese: "An toàn" },
          { kanji: "危険", hiragana: "きけん", vietnamese: "Nguy hiểm" },
          { kanji: "一日中", hiragana: "いちにちじゅう", vietnamese: "Suốt cả ngày" },
          { kanji: "北部", hiragana: "ほくぶ", vietnamese: "Bắc bộ" },
          { kanji: "中部", hiragana: "ちゅうぶ", vietnamese: "Trung bộ" },
          { kanji: "南部", hiragana: "なんぶ", vietnamese: "Nam bộ" },
          { kanji: "首都", hiragana: "しゅと", vietnamese: "Thủ đô" },
          { kanji: "空", hiragana: "そら", vietnamese: "Bầu trời" },
          { kanji: "林", hiragana: "はやし", vietnamese: "Rừng" },
          { kanji: "読み方", hiragana: "よみかた", vietnamese: "Cách đọc" },
          { kanji: "書き方", hiragana: "かきかた", vietnamese: "Cách viết" },
          { kanji: "作り方", hiragana: "つくりかた", vietnamese: "Cách làm, nấu" },
          { kanji: "話し方", hiragana: "はなしかた", vietnamese: "Cách nói chuyện" },
          { kanji: "勉強の仕方", hiragana: "べんきょうのしかた", vietnamese: "Cách học" }
        ]
      },
      {
        id: "n5_b17",
        title: "Bài 17: Động từ hành động & Tiếp diễn hành vi",
        description: "Bật/tắt đèn, cầm/mang, giúp đỡ, mở/đóng cửa và mẫu V-masu + はじめる / おわる / つづける",
        words: [
          { kanji: "返す", hiragana: "かえす", vietnamese: "Trả lại (sách)", group: 1 },
          { kanji: "出す", hiragana: "だす", vietnamese: "Gửi (thư), nộp, lấy", group: 1 },
          { kanji: "取る", hiragana: "とる", vietnamese: "Lấy (điện thoại), ghi chú (memo)", group: 1 },
          { kanji: "持つ", hiragana: "もつ", vietnamese: "Cầm, mang (hành lý)", group: 1 },
          { kanji: "消す", hiragana: "けす", vietnamese: "Tắt (đèn)", group: 1 },
          { kanji: "点ける", hiragana: "つける", vietnamese: "Bật (đèn)", group: 2 },
          { kanji: "勤める", hiragana: "つとめる", vietnamese: "Làm việc (cho công ty)", group: 2 },
          { kanji: "助ける", hiragana: "たすける", vietnamese: "Giúp đỡ (người khác)", group: 2 },
          { kanji: "浴びる", hiragana: "あびる", vietnamese: "Tắm (vòi sen)", group: 2 },
          { kanji: "閉める", hiragana: "しめる", vietnamese: "Đóng (cửa)", group: 2 },
          { kanji: "開ける", hiragana: "あける", vietnamese: "Mở (cửa)", group: 2 },
          { kanji: "参加する", hiragana: "さんかする", vietnamese: "Tham gia (cuộc thi)", group: 3 },
          { kanji: "実家", hiragana: "じっか", vietnamese: "Quê nhà, nhà bố mẹ" },
          { kanji: "海外旅行", hiragana: "かいがいりょこう", vietnamese: "Du lịch nước ngoài" },
          { kanji: "体験", hiragana: "たいけん", vietnamese: "Trải nghiệm" },
          { kanji: "寮", hiragana: "りょう", vietnamese: "Ký túc xá" },
          { kanji: "", hiragana: "シャワー", vietnamese: "Vòi sen" },
          { kanji: "", hiragana: "コンテスト", vietnamese: "Cuộc thi" },
          { kanji: "遊ぶ", hiragana: "あそぶ", vietnamese: "Chơi, vui đùa", group: 1 },
          { kanji: "迎える", hiragana: "むかえる", vietnamese: "Đón, tiếp đón", group: 2 },
          { kanji: "始めます", hiragana: "～はじめる", vietnamese: "Bắt đầu làm ~" },
          { kanji: "終わります", hiragana: "～おわる", vietnamese: "Làm ~ xong" },
          { kanji: "続けます", hiragana: "～つづける", vietnamese: "Tiếp tục làm ~" },
          { kanji: "文学", hiragana: "ぶんがく", vietnamese: "Văn học" },
          { kanji: "楽しみ", hiragana: "たのしみ", vietnamese: "Mong đợi, mong chờ" },
          { kanji: "皿", hiragana: "おさら", vietnamese: "Đĩa" },
          { kanji: "提灯", hiragana: "ちょうちん", vietnamese: "Đèn lồng" },
          { kanji: "", hiragana: "バーベキュー", vietnamese: "Tiệc nướng ngoài trời" }
        ]
      },
      {
        id: "n5_b18",
        title: "Bài 18: Động từ công việc, Nấu ăn & Trạng từ thứ tự",
        description: "Làm việc ở ngân hàng, hoa nở, rút tiền, làm mất, nướng bánh, các phó từ まず/つぎに/さいごに",
        words: [
          { kanji: "働く", hiragana: "はたらく", vietnamese: "Làm việc (ở ngân hàng)", group: 1 },
          { kanji: "咲く", hiragana: "さく", vietnamese: "Hoa nở", group: 1 },
          { kanji: "剥く", hiragana: "むく", vietnamese: "Gọt vỏ", group: 1 },
          { kanji: "下ろす", hiragana: "おろす", vietnamese: "Rút tiền", group: 1 },
          { kanji: "無くす", hiragana: "なくす", vietnamese: "Làm mất (tài liệu)", group: 1 },
          { kanji: "呼ぶ", hiragana: "よぶ", vietnamese: "Gọi (taxi)", group: 1 },
          { kanji: "知る", hiragana: "しる", vietnamese: "Biết (số điện thoại)", group: 1 },
          { kanji: "やる", hiragana: "やる", vietnamese: "Chơi bóng chày, làm", group: 1 },
          { kanji: "投げる", hiragana: "なげる", vietnamese: "Ném (đá)", group: 2 },
          { kanji: "忘れる", hiragana: "わすれる", vietnamese: "Quên (ngày sinh nhật)", group: 2 },
          { kanji: "止める", hiragana: "とめる", vietnamese: "Dừng xe", group: 2 },
          { kanji: "経営する", hiragana: "けいえいする", vietnamese: "Kinh doanh (công ty)", group: 3 },
          { kanji: "心配する", hiragana: "しんぱいする", vietnamese: "Lo lắng (chuyện của tôi)", group: 3 },
          { kanji: "返事する", hiragana: "へんじする", vietnamese: "Trả lời, đáp lại", group: 3 },
          { kanji: "練習する", hiragana: "れんしゅうする", vietnamese: "Luyện tập", group: 3 },
          { kanji: "大切", hiragana: "たいせつ", vietnamese: "Quan trọng, cần thiết" },
          { kanji: "大丈夫", hiragana: "だいじょうぶ", vietnamese: "Không vấn đề gì!" },
          { kanji: "邪魔", hiragana: "じゃま", vietnamese: "Cản trở, phiền hà" },
          { kanji: "電子辞書", hiragana: "でんしじしょ", vietnamese: "Từ điển điện tử" },
          { kanji: "資料", hiragana: "しりょう", vietnamese: "Tài liệu, tư liệu" },
          { kanji: "石", hiragana: "いし", vietnamese: "Hòn đá" },
          { kanji: "言葉", hiragana: "ことば", vietnamese: "Ngôn ngữ, từ" },
          { kanji: "皮", hiragana: "かわ", vietnamese: "Vỏ, da" },
          { kanji: "", hiragana: "センター", vietnamese: "Trung tâm" },
          { kanji: "", hiragana: "プール", vietnamese: "Hồ bơi" },
          { kanji: "", hiragana: "カタログ", vietnamese: "Ca-ta-lô" },
          { kanji: "ゆっくり", hiragana: "ゆっくり", vietnamese: "Từ từ, thong thả" },
          { kanji: "どうやって", hiragana: "どうやって", vietnamese: "Bằng cách nào" },
          { kanji: "～のこと", hiragana: "～のこと", vietnamese: "Chuyện (của ~)" },
          { kanji: "焼く", hiragana: "やく", vietnamese: "Nướng (bánh)", group: 1 },
          { kanji: "混ぜる", hiragana: "まぜる", vietnamese: "Trộn (trứng và bột)", group: 2 },
          { kanji: "眠い", hiragana: "ねむい", vietnamese: "Buồn ngủ" },
          { kanji: "凄い", hiragana: "すごい", vietnamese: "Siêu thế, ghê gớm" },
          { kanji: "うるさい", hiragana: "うるさい", vietnamese: "Ồn ào" },
          { kanji: "独身", hiragana: "どくしん", vietnamese: "Độc thân" },
          { kanji: "粉", hiragana: "こな", vietnamese: "Bột mì, bột" },
          { kanji: "砂糖", hiragana: "さとう", vietnamese: "Đường ăn" },
          { kanji: "", hiragana: "オーブン", vietnamese: "Lò nướng bánh" },
          { kanji: "お大事に", hiragana: "おだいじに", vietnamese: "Hãy bảo trọng sức khỏe!" },
          { kanji: "随分", hiragana: "ずいぶん", vietnamese: "Khá là" },
          { kanji: "まず", hiragana: "まず", vietnamese: "Trước hết, trước tiên" },
          { kanji: "次に", hiragana: "つぎに", vietnamese: "Kế tiếp" },
          { kanji: "最後に", hiragana: "さいごに", vietnamese: "Sau cùng" },
          { kanji: "途中に", hiragana: "とちゅうに", vietnamese: "Nửa chừng" },
          { kanji: "出来上がり", hiragana: "できあがり", vietnamese: "Hoàn thành, làm xong" }
        ]
      },
      {
        id: "n5_b19",
        title: "Bài 19: Quy tắc, Giấy tờ, Đồ dùng & Hành động",
        description: "Nhận, vội vàng, chạm vào, tuân thủ quy tắc, vứt rác, đồng phục, bảo hiểm và hạn chót 〜までに",
        words: [
          { kanji: "貰う", hiragana: "もらう", vietnamese: "Nhận (bướm quảng cáo)", group: 1 },
          { kanji: "置く", hiragana: "おく", vietnamese: "Đặt, để (hành lý)", group: 1 },
          { kanji: "急ぐ", hiragana: "いそぐ", vietnamese: "Vội vàng", group: 1 },
          { kanji: "殺す", hiragana: "ころす", vietnamese: "Sát hại, giết (động vật)", group: 1 },
          { kanji: "触る", hiragana: "さわる", vietnamese: "Chạm, đụng (máy ảnh)", group: 1 },
          { kanji: "守る", hiragana: "まもる", vietnamese: "Tuân thủ (nội quy)", group: 1 },
          { kanji: "捨てる", hiragana: "すてる", vietnamese: "Vứt (rác), bỏ", group: 2 },
          { kanji: "着る", hiragana: "きる", vietnamese: "Mặc (đồng phục)", group: 2 },
          { kanji: "残業する", hiragana: "ざんぎょうする", vietnamese: "Tăng ca", group: 3 },
          { kanji: "ひどい", hiragana: "ひどい", vietnamese: "Kinh khủng, khủng khiếp" },
          { kanji: "工場", hiragana: "こうじょう", vietnamese: "Nhà máy, xưởng" },
          { kanji: "動物", hiragana: "どうぶつ", vietnamese: "Động vật" },
          { kanji: "病気", hiragana: "びょうき", vietnamese: "Đau bệnh" },
          { kanji: "禁煙", hiragana: "きんえん", vietnamese: "Việc cấm hút thuốc" },
          { kanji: "制服", hiragana: "せいふく", vietnamese: "Đồng phục" },
          { kanji: "荷物", hiragana: "にもつ", vietnamese: "Hành lý, đồ đạc" },
          { kanji: "声", hiragana: "こえ", vietnamese: "Tiếng, giọng nói" },
          { kanji: "～までに", hiragana: "～までに", vietnamese: "Trước, chậm nhất là ~" },
          { kanji: "払う", hiragana: "はらう", vietnamese: "Trả tiền, thanh toán", group: 1 },
          { kanji: "持って行く", hiragana: "もっていく", vietnamese: "Mang theo (hộ chiếu)", group: 1 },
          { kanji: "連れて行く", hiragana: "つれていく", vietnamese: "Dẫn đi (chó)", group: 1 },
          { kanji: "運ぶ", hiragana: "はこぶ", vietnamese: "Khuân, vác (hành lý)", group: 1 },
          { kanji: "被る", hiragana: "かぶる", vietnamese: "Đội (nón bảo hiểm)", group: 1 },
          { kanji: "締める", hiragana: "ネクタイをしめる", vietnamese: "Đeo cà vạt", group: 2 },
          { kanji: "安心する", hiragana: "あんしんする", vietnamese: "Yên tâm, an tâm", group: 3 },
          { kanji: "注意する", hiragana: "ちゅういする", vietnamese: "Chú ý (sức khỏe)", group: 3 },
          { kanji: "入社する", hiragana: "にゅうしゃする", vietnamese: "Vào làm ở công ty", group: 3 },
          { kanji: "新鮮", hiragana: "しんせん", vietnamese: "Tươi" },
          { kanji: "番号", hiragana: "ばんごう", vietnamese: "Số (điện thoại, thứ tự...)" },
          { kanji: "結婚式", hiragana: "けっこんしき", vietnamese: "Lễ cưới, lễ kết hôn" },
          { kanji: "学生証", hiragana: "がくせいしょう", vietnamese: "Thẻ học sinh" },
          { kanji: "保険証", hiragana: "ほけんしょう", vietnamese: "Thẻ bảo hiểm, sổ bảo hiểm" },
          { kanji: "健康", hiragana: "けんこう", vietnamese: "Sức khỏe" },
          { kanji: "必ず", hiragana: "かならず", vietnamese: "Nhất định" },
          { kanji: "", hiragana: "ルール", vietnamese: "Luật lệ" },
          { kanji: "", hiragana: "ゴミ", vietnamese: "Rác, bụi" },
          { kanji: "", hiragana: "パンフレット", vietnamese: "Bướm quảng cáo" },
          { kanji: "", hiragana: "エアコン", vietnamese: "Máy điều hòa" },
          { kanji: "", hiragana: "アパート", vietnamese: "Căn hộ" },
          { kanji: "", hiragana: "ヨーロッパ", vietnamese: "Châu Âu" },
          { kanji: "", hiragana: "ヘルメット", vietnamese: "Nón bảo hiểm" },
          { kanji: "", hiragana: "ノート", vietnamese: "Tập vở" },
          { kanji: "", hiragana: "ネクタイ", vietnamese: "Cà vạt" },
          { kanji: "", hiragana: "スーツ", vietnamese: "Đồ vét" }
        ]
      },
      {
        id: "n5_b21",
        title: "Bài 21: Cuộc sống, Đo lường & Tính chất",
        description: "Hài hước, đo chiều dài, trễ giờ học, tham dự họp, cuộc sống, trà đạo, chiều cao/dài/nặng và tháp Skytree",
        words: [
          { kanji: "ユーモアがある", hiragana: "ユーモアがある", vietnamese: "Có tính hài hước", group: 1 },
          { kanji: "測る", hiragana: "はかる", vietnamese: "Đo (chiều dài)", group: 1 },
          { kanji: "乗る", hiragana: "のる", vietnamese: "Cưỡi ngựa", group: 1 },
          { kanji: "登る", hiragana: "のぼる", vietnamese: "Leo núi Phú Sĩ", group: 1 },
          { kanji: "遅れる", hiragana: "おくれる", vietnamese: "Trễ (giờ học)", group: 2 },
          { kanji: "出席する", hiragana: "しゅっせきする", vietnamese: "Tham dự (buổi họp)", group: 3 },
          { kanji: "外食する", hiragana: "がいしょくする", vietnamese: "Đi ăn ngoài", group: 3 },
          { kanji: "生活", hiragana: "せいかつ", vietnamese: "Cuộc sống" },
          { kanji: "一度", hiragana: "いちど", vietnamese: "Một lần" },
          { kanji: "旅館", hiragana: "りょかん", vietnamese: "Lữ quán, nhà trọ" },
          { kanji: "茶道", hiragana: "さどう", vietnamese: "Trà đạo" },
          { kanji: "お弁当", hiragana: "おべんとう", vietnamese: "Cơm hộp" },
          { kanji: "本当", hiragana: "ほんとう", vietnamese: "Sự thật" },
          { kanji: "彼", hiragana: "かれ", vietnamese: "Anh ấy" },
          { kanji: "彼女", hiragana: "かのじょ", vietnamese: "Cô ấy, bạn gái" },
          { kanji: "答え", hiragana: "こたえ", vietnamese: "Câu trả lời" },
          { kanji: "時々", hiragana: "ときどき", vietnamese: "Thỉnh thoảng" },
          { kanji: "着物", hiragana: "きもの", vietnamese: "Đồ Kimono" },
          { kanji: "高さ", hiragana: "たかさ", vietnamese: "Độ cao" },
          { kanji: "長さ", hiragana: "ながさ", vietnamese: "Độ dài" },
          { kanji: "重さ", hiragana: "おもさ", vietnamese: "Độ nặng" },
          { kanji: "東京スカイツリー", hiragana: "とうきょうスカイツリー", vietnamese: "Tòa tháp Tokyo Sky Tree" },
          { kanji: "", hiragana: "キログラム", vietnamese: "Kilôgam" },
          { kanji: "", hiragana: "インドネシア", vietnamese: "Indonesia" },
          { kanji: "～について", hiragana: "～について", vietnamese: "Về, đến..." },
          { kanji: "多分", hiragana: "たぶん", vietnamese: "Có lẽ" }
        ]
      },
      {
        id: "n5_b22",
        title: "Bài 22: Giao tiếp, Nơi chốn & Chào hỏi hàng ngày",
        description: "Nói lời cảm ơn, cười, khóc, nhận ra đồ quên, tra từ điển, cắm hoa, lời chào đi - về - ăn cơm",
        words: [
          { kanji: "お礼を言う", hiragana: "おれいをいう", vietnamese: "Nói lời cảm ơn", group: 1 },
          { kanji: "笑う", hiragana: "わらう", vietnamese: "Cười", group: 1 },
          { kanji: "泣く", hiragana: "なく", vietnamese: "Khóc", group: 1 },
          { kanji: "開く", hiragana: "あく", vietnamese: "(cửa) Mở", group: 1 },
          { kanji: "閉まる", hiragana: "しまる", vietnamese: "(cửa) Đóng", group: 1 },
          { kanji: "着く", hiragana: "つく", vietnamese: "Đến, tới (nhà ga)", group: 1 },
          { kanji: "落とす", hiragana: "おとす", vietnamese: "Đánh rơi (ví)", group: 1 },
          { kanji: "気が付く", hiragana: "きがつく", vietnamese: "Nhận ra (bỏ quên đồ)", group: 1 },
          { kanji: "気を付ける", hiragana: "きをつける", vietnamese: "Chú ý, cẩn thận (xe cộ)", group: 2 },
          { kanji: "出かける", hiragana: "でかける", vietnamese: "Đi ra ngoài", group: 2 },
          { kanji: "辞める", hiragana: "やめる", vietnamese: "Nghỉ, bỏ (việc)", group: 2 },
          { kanji: "調べる", hiragana: "しらべる", vietnamese: "Tìm kiếm, tìm hiểu (thông tin), tra từ điển", group: 2 },
          { kanji: "鍵を掛ける", hiragana: "かぎをかける", vietnamese: "Khóa cửa", group: 2 },
          { kanji: "降りる", hiragana: "おりる", vietnamese: "Xuống (xe bus)", group: 2 },
          { kanji: "予約する", hiragana: "よやくする", vietnamese: "Đặt trước (khách sạn)", group: 3 },
          { kanji: "復習する", hiragana: "ふくしゅうする", vietnamese: "Ôn tập (văn phạm)", group: 3 },
          { kanji: "見学する", hiragana: "けんがくする", vietnamese: "Tham quan học tập", group: 3 },
          { kanji: "留学する", hiragana: "りゅうがくする", vietnamese: "Du học (Nhật Bản)", group: 3 },
          { kanji: "安定する", hiragana: "あんていする", vietnamese: "(công việc) Ổn định", group: 3 },
          { kanji: "連絡する", hiragana: "れんらくする", vietnamese: "Liên lạc (với tôi)", group: 3 },
          { kanji: "挨拶をする", hiragana: "あいさつをする", vietnamese: "Chào hỏi", group: 3 },
          { kanji: "寂しい", hiragana: "さびしい", vietnamese: "Buồn, cô đơn" },
          { kanji: "必要", hiragana: "ひつよう", vietnamese: "Cấp thiết, cần thiết" },
          { kanji: "本社", hiragana: "ほんしゃ", vietnamese: "Công ty mẹ" },
          { kanji: "支社", hiragana: "ししゃ", vietnamese: "Công ty chi nhánh" },
          { kanji: "単語", hiragana: "たんご", vietnamese: "Từ vựng" },
          { kanji: "服", hiragana: "ふく", vietnamese: "Quần áo" },
          { kanji: "体の調子", hiragana: "からだのちょうし", vietnamese: "Tình trạng cơ thể" },
          { kanji: "郊外", hiragana: "こうがい", vietnamese: "Ngoại thành" },
          { kanji: "祖母", hiragana: "そぼ", vietnamese: "Bà tôi" },
          { kanji: "祖父", hiragana: "そふ", vietnamese: "Ông tôi" },
          { kanji: "生け花", hiragana: "いけばな", vietnamese: "Cắm hoa" },
          { kanji: "田舎", hiragana: "いなか", vietnamese: "Nông thôn, vùng quê" },
          { kanji: "忘れ物", hiragana: "わすれもの", vietnamese: "Đồ bị bỏ quên" },
          { kanji: "お祈り", hiragana: "おいのり", vietnamese: "Việc cầu nguyện" },
          { kanji: "", hiragana: "プレゼント", vietnamese: "Quà tặng" },
          { kanji: "", hiragana: "クリスマス", vietnamese: "Giáng sinh" },
          { kanji: "", hiragana: "パスポート", vietnamese: "Hộ chiếu" },
          { kanji: "", hiragana: "ゲーム", vietnamese: "Trò chơi" },
          { kanji: "", hiragana: "アルバイト", vietnamese: "Làm thêm" },
          { kanji: "", hiragana: "オーストラリア", vietnamese: "Nước Úc" },
          { kanji: "行って来ます", hiragana: "いってきます", vietnamese: "Tôi đi đây (chào khi ra khỏi nhà)" },
          { kanji: "行ってらっしゃい", hiragana: "いってらっしゃい", vietnamese: "Đi cẩn thận nhé (người ở nhà chào)" },
          { kanji: "ただいま", hiragana: "ただいま", vietnamese: "Tôi đã về (chào khi về nhà)" },
          { kanji: "お帰りなさい", hiragana: "おかえりなさい", vietnamese: "Bạn đã về đấy à" },
          { kanji: "いただきます", hiragana: "いただきます", vietnamese: "Mời dùng bữa (trước khi ăn)" },
          { kanji: "ご馳走様でした", hiragana: "ごちそうさまでした", vietnamese: "Cảm ơn vì bữa ăn ngon (sau khi ăn)" }
        ]
      },
      {
        id: "n5_b23",
        title: "Bài 23: Tặng nhận, Tiền bối & Quà tặng sự kiện",
        description: "Động từ cho/nhận (あげる, もらう, くれる, いただく, くださる, さしあげる), lễ tốt nghiệp và quà kỷ niệm",
        words: [
          { kanji: "手伝う", hiragana: "てつだう", vietnamese: "Phụ giúp (chuyển nhà)", group: 1 },
          { kanji: "いただく", hiragana: "いただく", vietnamese: "Nhận (kính ngữ của もらう)", group: 1 },
          { kanji: "貰う", hiragana: "もらう", vietnamese: "Nhận (khăn tay)", group: 1 },
          { kanji: "くださる", hiragana: "くださる", vietnamese: "Cho tôi, tặng tôi (kính ngữ của くれる)", group: 1 },
          { kanji: "くれる", hiragana: "くれる", vietnamese: "Cho tôi, tặng tôi", group: 2 },
          { kanji: "差し上げる", hiragana: "さしあげる", vietnamese: "Biếu, tặng (kính ngữ của あげる)", group: 2 },
          { kanji: "あげる", hiragana: "あげる", vietnamese: "Cho, tặng (quà)", group: 2 },
          { kanji: "紹介する", hiragana: "しょうかいする", vietnamese: "Giới thiệu (bạn bè)", group: 3 },
          { kanji: "連れて来る", hiragana: "つれてくる", vietnamese: "Dẫn đến (đây)", group: 3 },
          { kanji: "持って来る", hiragana: "もってくる", vietnamese: "Mang đến, mang theo (hành lý)", group: 3 },
          { kanji: "先輩", hiragana: "せんぱい", vietnamese: "Tiền bối, người đi trước" },
          { kanji: "後輩", hiragana: "こうはい", vietnamese: "Hậu bối, đàn em" },
          { kanji: "友人", hiragana: "ゆうじん", vietnamese: "Người bạn" },
          { kanji: "親友", hiragana: "しんゆう", vietnamese: "Bạn thân" },
          { kanji: "卒業式", hiragana: "そつぎょうしき", vietnamese: "Lễ tốt nghiệp" },
          { kanji: "お礼", hiragana: "おれい", vietnamese: "Quà cảm ơn, lời cảm ơn" },
          { kanji: "日本酒", hiragana: "にほんしゅ", vietnamese: "Rượu Nhật" },
          { kanji: "人形", hiragana: "にんぎょう", vietnamese: "Búp bê" },
          { kanji: "携帯電話", hiragana: "けいたいでんわ", vietnamese: "Điện thoại di động" },
          { kanji: "奨学金", hiragana: "しょうがくきん", vietnamese: "Học bổng" },
          { kanji: "香水", hiragana: "こうすい", vietnamese: "Nước hoa" },
          { kanji: "写真立て", hiragana: "しゃしんたて", vietnamese: "Khung ảnh" },
          { kanji: "腕時計", hiragana: "うでどけい", vietnamese: "Đồng hồ đeo tay" },
          { kanji: "お祝い", hiragana: "おいわい", vietnamese: "Quà mừng, lời chúc mừng" },
          { kanji: "お土産", hiragana: "おみやげ", vietnamese: "Quà lưu niệm, đặc sản" },
          { kanji: "花束", hiragana: "はなたば", vietnamese: "Bó hoa" },
          { kanji: "指輪", hiragana: "ゆびわ", vietnamese: "Nhẫn" },
          { kanji: "漫画", hiragana: "まんが", vietnamese: "Truyện tranh" },
          { kanji: "", hiragana: "ぬいぐるみ", vietnamese: "Gấu bông, thú nhồi bông" },
          { kanji: "", hiragana: "おもちゃ", vietnamese: "Đồ chơi" },
          { kanji: "お粥", hiragana: "おかゆ", vietnamese: "Cháo" },
          { kanji: "お強", hiragana: "おこわ", vietnamese: "Cơm nếp, xôi" },
          { kanji: "餌", hiragana: "えさ", vietnamese: "Mồi, thức ăn cho động vật" },
          { kanji: "", hiragana: "ノーベル賞", vietnamese: "Giải thưởng Nobel" },
          { kanji: "", hiragana: "マザーテレサ", vietnamese: "Đức Mẹ Teresa" },
          { kanji: "", hiragana: "バレンタインデー", vietnamese: "Ngày lễ tình nhân" },
          { kanji: "", hiragana: "ケーキ", vietnamese: "Bánh kem" },
          { kanji: "", hiragana: "チョコレート", vietnamese: "Sô cô la" },
          { kanji: "", hiragana: "セーター", vietnamese: "Áo len" },
          { kanji: "", hiragana: "ハンカチ", vietnamese: "Khăn tay" },
          { kanji: "", hiragana: "マフラー・スカーフ", vietnamese: "Khăn choàng" },
          { kanji: "", hiragana: "スカート", vietnamese: "Váy" },
          { kanji: "", hiragana: "ジュエリー", vietnamese: "Trang sức" },
          { kanji: "", hiragana: "ピアス", vietnamese: "Bông tai" },
          { kanji: "", hiragana: "ハイヒール", vietnamese: "Giày cao gót" }
        ]
      },
      {
        id: "n5_b24",
        title: "Bài 24: Lời mời, Dự định, Tương lai & Giao tiếp",
        description: "Rủ rê, xỏ giày, so sánh xưa nay, số thứ tự, tương lai và các phó từ giao tiếp",
        words: [
          { kanji: "誘う", hiragana: "さそう", vietnamese: "Mời, rủ rê", group: 1 },
          { kanji: "履く", hiragana: "はく", vietnamese: "Mang (giày), mặc (quần)", group: 1 },
          { kanji: "無くす", hiragana: "なくす", vietnamese: "Làm mất (cây dù)", group: 1 },
          { kanji: "勝つ", hiragana: "かつ", vietnamese: "Thắng (đội Anh thắng)", group: 1 },
          { kanji: "泊まる", hiragana: "とまる", vietnamese: "Trọ lại, ở lại (khách sạn)", group: 1 },
          { kanji: "勤める", hiragana: "つとめる", vietnamese: "Làm việc (cho công ty)", group: 2 },
          { kanji: "比べる", hiragana: "くらべる", vietnamese: "So sánh, so với (ngày xưa)", group: 2 },
          { kanji: "眼鏡を掛ける", hiragana: "めがねをかける", vietnamese: "Đeo kính", group: 2 },
          { kanji: "着る", hiragana: "きる", vietnamese: "Mặc áo", group: 2 },
          { kanji: "～番目", hiragana: "～ばんめ", vietnamese: "Số thứ ~" },
          { kanji: "未来", hiragana: "みらい", vietnamese: "Tương lai" },
          { kanji: "約束", hiragana: "やくそく", vietnamese: "Lời hứa, hẹn" },
          { kanji: "残念", hiragana: "ざんねん", vietnamese: "Sự đáng tiếc" },
          { kanji: "", hiragana: "インスタントフォー", vietnamese: "Phở ăn liền" },
          { kanji: "", hiragana: "バインミー", vietnamese: "Bánh mì" },
          { kanji: "", hiragana: "パーセント", vietnamese: "Phần trăm (%)" },
          { kanji: "久しぶり", hiragana: "ひさしぶり", vietnamese: "Đã lâu rồi không (gặp)" },
          { kanji: "もちろん", hiragana: "もちろん", vietnamese: "Tất nhiên rồi, đương nhiên rồi" },
          { kanji: "そろそろ", hiragana: "そろそろ", vietnamese: "Đã đến lúc" },
          { kanji: "初めて", hiragana: "はじめて", vietnamese: "Lần đầu tiên" }
        ]
      }
    ]
  },
  N4: {
    levelName: "N4 — Sơ Trung Cấp",
    lessons: [
      {
        id: "n4_b1",
        title: "Bài 1: Ý chí & Kế hoạch (て形・意向形)",
        description: "Các động từ thể ý chí và dự định",
        words: [
          { kanji: "選ぶ", hiragana: "えらぶ", vietnamese: "Lựa chọn" },
          { kanji: "通う", hiragana: "かよう", vietnamese: "Đi lại (đi học, đi làm)" },
          { kanji: "申し込む", hiragana: "もうしこむ", vietnamese: "Đăng ký" },
          { kanji: "参加する", hiragana: "さんかする", vietnamese: "Tham gia" },
          { kanji: "計画", hiragana: "けいかく", vietnamese: "Kế hoạch" },
          { kanji: "準備", hiragana: "じゅんび", vietnamese: "Chuẩn bị" },
          { kanji: "予定", hiragana: "よてい", vietnamese: "Dự định" }
        ]
      }
    ]
  },
  N3: {
    levelName: "N3 — Trung Cấp",
    lessons: [
      {
        id: "n3_b1",
        title: "Bài 1: Cuộc sống & Xã hội",
        description: "Từ vựng sinh hoạt thường ngày và quan hệ xã hội",
        words: [
          { kanji: "解決", hiragana: "かいけつ", vietnamese: "Giải quyết" },
          { kanji: "経験", hiragana: "けいけん", vietnamese: "Kinh nghiệm" },
          { kanji: "印象", hiragana: "いんしょう", vietnamese: "Ấn tượng" },
          { kanji: "影響", hiragana: "えいきょう", vietnamese: "Ảnh hưởng" },
          { kanji: "複雑", hiragana: "ふくざつ", vietnamese: "Phức tạp" }
        ]
      }
    ]
  },
  N2: {
    levelName: "N2 — Trung Cao Cấp",
    lessons: [
      {
        id: "n2_b1",
        title: "Bài 1: Kinh tế & Công việc",
        description: "Từ vựng chuyên ngành công sở và báo chí",
        words: [
          { kanji: "景気", hiragana: "けいき", vietnamese: "Tình hình kinh tế" },
          { kanji: "効率", hiragana: "こうりつ", vietnamese: "Hiệu suất" },
          { kanji: "成果", hiragana: "せいか", vietnamese: "Thành quả" },
          { kanji: "組織", hiragana: "そしき", vietnamese: "Tổ chức" }
        ]
      }
    ]
  },
  N1: {
    levelName: "N1 — Cao Cấp",
    lessons: [
      {
        id: "n1_b1",
        title: "Bài 1: Triết học & Học thuật",
        description: "Từ vựng hàn lâm, chính trị, triết học",
        words: [
          { kanji: "概念", hiragana: "がいねん", vietnamese: "Khái niệm" },
          { kanji: "抽象的", hiragana: "ちゅうしょうてき", vietnamese: "Trừu tượng" },
          { kanji: "画期的", hiragana: "かっきてき", vietnamese: "Tính bước ngoặt" }
        ]
      }
    ]
  }
};

const VERB_CONJUGATION_DATA = {
  forms: [
    { id: "group", name: "Xác định Nhóm Động Từ (Group 1 / 2 / 3)", suffix: "", example: "Nhóm 1" },
    { id: "nai", name: "Phủ định (Không ~)", suffix: "ない", example: "いかない" },
    { id: "masu", name: "Lễ phép", suffix: "ます", example: "いきます" },
    { id: "dictionary", name: "Nguyên thể (V-u / Thể từ điển)", suffix: "", example: "いく" },
    { id: "potential", name: "Có thể ~ (Thể Khả năng)", suffix: "える/られる", example: "いける" },
    { id: "ba", name: "Nếu ~", suffix: "えば/れば", example: "いけば" },
    { id: "volitional", name: "~ thôi (Thể Ý chí)", suffix: "おう/よう", example: "いこう" },
    { id: "te", name: "Thể て", suffix: "て/で", example: "いって" },
    { id: "te_iru", name: "Đang ~", suffix: "ている", example: "いっている" },
    { id: "te_kudasai", name: "Hãy ~", suffix: "てください", example: "いってください" },
    { id: "ta", name: "Thể た (Thể Đã)", suffix: "た/だ", example: "いった" }
  ],
  verbs: [
    // Group 1
    {
      dictionary: "いく", kanji: "行く", vietnamese: "Đi", group: 1,
      forms: {
        nai: "いかない", masu: "いきます", dictionary: "いく", potential: "いける", ba: "いけば", volitional: "いこう", te: "いって", te_iru: "いっている", te_kudasai: "いってください", ta: "いった"
      },
      note: "Ngoại lệ: Thể て/た của いく là いって / いった (không dùng いいて)."
    },
    {
      dictionary: "はなす", kanji: "話す", vietnamese: "Nói chuyện", group: 1,
      forms: {
        nai: "はなさない", masu: "はなします", dictionary: "はなす", potential: "はなせる", ba: "はなせば", volitional: "はなそう", te: "はなして", te_iru: "はなしている", te_kudasai: "はなしてください", ta: "はなした"
      }
    },
    {
      dictionary: "あらう", kanji: "洗う", vietnamese: "Rửa", group: 1,
      forms: {
        nai: "あらわない", masu: "あらいます", dictionary: "あらう", potential: "あらえる", ba: "あらえば", volitional: "あらおう", te: "あらって", te_iru: "あらっている", te_kudasai: "あらってください", ta: "あらった"
      },
      note: "Động từ tận cùng う khi chia thể ない đổi う ➔ わ + ない (あらわない)."
    },
    {
      dictionary: "ならう", kanji: "習う", vietnamese: "Học", group: 1,
      forms: {
        nai: "ならわない", masu: "ならいます", dictionary: "ならう", potential: "ならえる", ba: "ならえば", volitional: "ならおう", te: "ならって", te_iru: "ならっている", te_kudasai: "ならってください", ta: "ならった"
      }
    },
    {
      dictionary: "あう", kanji: "会う", vietnamese: "Gặp", group: 1,
      forms: {
        nai: "あわない", masu: "あいます", dictionary: "あう", potential: "あえる", ba: "あえば", volitional: "あおう", te: "あって", te_iru: "あっている", te_kudasai: "あってください", ta: "あった"
      }
    },
    {
      dictionary: "かう", kanji: "買う", vietnamese: "Mua", group: 1,
      forms: {
        nai: "かわない", masu: "かいます", dictionary: "かう", potential: "かえる", ba: "かえば", volitional: "かおう", te: "かって", te_iru: "かっている", te_kudasai: "かってください", ta: "かった"
      }
    },
    {
      dictionary: "かく", kanji: "書く", vietnamese: "Viết", group: 1,
      forms: {
        nai: "かかない", masu: "かきます", dictionary: "かく", potential: "かける", ba: "かけば", volitional: "かこう", te: "かいて", te_iru: "かいている", te_kudasai: "かいてください", ta: "かいた"
      }
    },
    {
      dictionary: "きく", kanji: "聞く", vietnamese: "Nghe", group: 1,
      forms: {
        nai: "きかない", masu: "ききます", dictionary: "きく", potential: "きける", ba: "きけば", volitional: "きこう", te: "きいて", te_iru: "きいている", te_kudasai: "きいてください", ta: "きいた"
      }
    },
    {
      dictionary: "およぐ", kanji: "泳ぐ", vietnamese: "Bơi", group: 1,
      forms: {
        nai: "およがない", masu: "およぎます", dictionary: "およぐ", potential: "およげる", ba: "およげば", volitional: "およごう", te: "およいで", te_iru: "およいでいる", te_kudasai: "およいでください", ta: "およいだ"
      }
    },
    {
      dictionary: "まつ", kanji: "待つ", vietnamese: "Chờ, đợi", group: 1,
      forms: {
        nai: "またない", masu: "まちます", dictionary: "まつ", potential: "まてる", ba: "まてば", volitional: "まとう", te: "まって", te_iru: "まっている", te_kudasai: "まってください", ta: "まった"
      }
    },
    {
      dictionary: "あそぶ", kanji: "遊ぶ", vietnamese: "Chơi", group: 1,
      forms: {
        nai: "あそばない", masu: "あそびます", dictionary: "あそぶ", potential: "あそべる", ba: "あそべば", volitional: "あそぼう", te: "あそんで", te_iru: "あそんでいる", te_kudasai: "あそんでください", ta: "あそんだ"
      }
    },
    {
      dictionary: "よむ", kanji: "読む", vietnamese: "Đọc", group: 1,
      forms: {
        nai: "よまない", masu: "よみます", dictionary: "よむ", potential: "よめる", ba: "よめば", volitional: "よもう", te: "よんで", te_iru: "よんでいる", te_kudasai: "よんでください", ta: "よんだ"
      }
    },
    {
      dictionary: "のむ", kanji: "飲む", vietnamese: "Uống", group: 1,
      forms: {
        nai: "のまない", masu: "のみます", dictionary: "のむ", potential: "のめる", ba: "のめば", volitional: "のもう", te: "のんで", te_iru: "のんでいる", te_kudasai: "のんでください", ta: "のんだ"
      }
    },
    {
      dictionary: "やすむ", kanji: "休む", vietnamese: "Nghỉ ngơi", group: 1,
      forms: {
        nai: "やすまない", masu: "やすみます", dictionary: "やすむ", potential: "やすめる", ba: "やすめば", volitional: "やすもう", te: "やすんで", te_iru: "やすんでいる", te_kudasai: "やすんでください", ta: "やすんだ"
      }
    },
    {
      dictionary: "つくる", kanji: "作る", vietnamese: "Nấu ăn, làm ra", group: 1,
      forms: {
        nai: "つくらない", masu: "つくります", dictionary: "つくる", potential: "つくれる", ba: "つくれば", volitional: "つくろう", te: "つくって", te_iru: "つくっている", te_kudasai: "つくってください", ta: "つくった"
      }
    },
    {
      dictionary: "かえる", kanji: "帰る", vietnamese: "Về, quay về", group: 1,
      forms: {
        nai: "かえらない", masu: "かえります", dictionary: "かえる", potential: "かえれる", ba: "かえれば", volitional: "かえろう", te: "かえって", te_iru: "かえっている", te_kudasai: "かえってください", ta: "かえった"
      }
    },
    {
      dictionary: "もどる", kanji: "戻る", vietnamese: "Quay lại", group: 1,
      forms: {
        nai: "もどらない", masu: "もどります", dictionary: "もどる", potential: "もどれる", ba: "もどれば", volitional: "もどろう", te: "もどって", te_iru: "もどっている", te_kudasai: "もどってください", ta: "もどった"
      }
    },
    // Group 2
    {
      dictionary: "たべる", kanji: "食べる", vietnamese: "Ăn", group: 2,
      forms: {
        nai: "たべない", masu: "たべます", dictionary: "たべる", potential: "たべられる", ba: "たべれば", volitional: "たべよう", te: "たべて", te_iru: "たべている", te_kudasai: "たべてください", ta: "たべた"
      }
    },
    {
      dictionary: "ねる", kanji: "寝る", vietnamese: "Ngủ", group: 2,
      forms: {
        nai: "ねない", masu: "ねます", dictionary: "ねる", potential: "ねられる", ba: "ねれば", volitional: "ねよう", te: "ねて", te_iru: "ねている", te_kudasai: "ねてください", ta: "ねた"
      }
    },
    {
      dictionary: "おしえる", kanji: "教える", vietnamese: "Chỉ, dạy", group: 2,
      forms: {
        nai: "おしえない", masu: "おしえます", dictionary: "おしえる", potential: "おしえられる", ba: "おしえれば", volitional: "おしえよう", te: "おしえて", te_iru: "おしえている", te_kudasai: "おしえてください", ta: "おしえた"
      }
    },
    {
      dictionary: "みる", kanji: "見る", vietnamese: "Xem, nhìn", group: 2,
      forms: {
        nai: "みない", masu: "みます", dictionary: "みる", potential: "みられる", ba: "みれば", volitional: "みよう", te: "みて", te_iru: "みている", te_kudasai: "みてください", ta: "みた"
      }
    },
    {
      dictionary: "おきる", kanji: "起きる", vietnamese: "Thức, ngủ dậy", group: 2,
      forms: {
        nai: "おきない", masu: "おきます", dictionary: "おきる", potential: "おきられる", ba: "おきれば", volitional: "おきよう", te: "おきて", te_iru: "おきている", te_kudasai: "おきてください", ta: "おきた"
      }
    },
    // Group 3
    {
      dictionary: "くる", kanji: "来る", vietnamese: "Đến", group: 3,
      forms: {
        nai: "こない", masu: "きます", dictionary: "くる", potential: "こられる", ba: "くれば", volitional: "こよう", te: "きて", te_iru: "きている", te_kudasai: "きてください", ta: "きた"
      }
    },
    {
      dictionary: "する", kanji: "する", vietnamese: "Làm", group: 3,
      forms: {
        nai: "しない", masu: "します", dictionary: "する", potential: "できる", ba: "すれば", volitional: "しよう", te: "して", te_iru: "している", te_kudasai: "してください", ta: "した"
      }
    },
    {
      dictionary: "はいる", kanji: "入る", vietnamese: "Vào", group: 1,
      forms: {
        nai: "はいらない", masu: "はいります", dictionary: "はいる", potential: "はいれる", ba: "はいれば", volitional: "はいろう", te: "はいって", te_iru: "はいっている", te_kudasai: "はいってください", ta: "はいった"
      }
    },
    {
      dictionary: "のる", kanji: "乗る", vietnamese: "Lên xe, cưỡi", group: 1,
      forms: {
        nai: "のらない", masu: "のります", dictionary: "のる", potential: "のれる", ba: "のれば", volitional: "のろう", te: "のって", te_iru: "のっている", te_kudasai: "のってください", ta: "のった"
      }
    },
    {
      dictionary: "のぼる", kanji: "登る", vietnamese: "Leo (núi)", group: 1,
      forms: {
        nai: "のぼらない", masu: "のぼります", dictionary: "のぼる", potential: "のぼれる", ba: "のぼれば", volitional: "のぼろう", te: "のぼって", te_iru: "のぼっている", te_kudasai: "のぼってください", ta: "のぼった"
      }
    },
    {
      dictionary: "つく", kanji: "着く", vietnamese: "Đến (nơi)", group: 1,
      forms: {
        nai: "つかない", masu: "つきます", dictionary: "つく", potential: "つける", ba: "つけば", volitional: "つこう", te: "ついて", te_iru: "ついている", te_kudasai: "ついてください", ta: "ついた"
      }
    },
    {
      dictionary: "とぶ", kanji: "飛ぶ", vietnamese: "Bay", group: 1,
      forms: {
        nai: "とばない", masu: "とびます", dictionary: "とぶ", potential: "とべる", ba: "とべば", volitional: "とぼう", te: "とんで", te_iru: "とんでいる", te_kudasai: "とんでください", ta: "とんだ"
      }
    },
    {
      dictionary: "はしる", kanji: "走る", vietnamese: "Chạy", group: 1,
      forms: {
        nai: "はしらない", masu: "はしります", dictionary: "はしる", potential: "はしれる", ba: "はしれば", volitional: "はしろう", te: "はしって", te_iru: "はしっている", te_kudasai: "はしってください", ta: "はしった"
      }
    },
    {
      dictionary: "とおる", kanji: "通る", vietnamese: "Đi qua", group: 1,
      forms: {
        nai: "とおらない", masu: "とおります", dictionary: "とおる", potential: "とおれる", ba: "とおれば", volitional: "とおろう", te: "とおって", te_iru: "とおっている", te_kudasai: "とおってください", ta: "とおった"
      }
    },
    {
      dictionary: "わたる", kanji: "渡る", vietnamese: "Băng qua", group: 1,
      forms: {
        nai: "わたらない", masu: "わたります", dictionary: "わたる", potential: "わたれる", ba: "わたれば", volitional: "わたろう", te: "わたって", te_iru: "わたっている", te_kudasai: "わたってください", ta: "わたった"
      }
    },
    {
      dictionary: "あるく", kanji: "歩く", vietnamese: "Đi bộ", group: 1,
      forms: {
        nai: "あるかない", masu: "あるきます", dictionary: "あるく", potential: "あるける", ba: "あるけば", volitional: "あるこう", te: "あるいて", te_iru: "あるいている", te_kudasai: "あるいてください", ta: "あるいた"
      }
    },
    {
      dictionary: "たつ", kanji: "立つ", vietnamese: "Đứng", group: 1,
      forms: {
        nai: "たたない", masu: "たちます", dictionary: "たつ", potential: "たてる", ba: "たてば", volitional: "たとう", te: "たって", te_iru: "たっている", te_kudasai: "たってください", ta: "たった"
      }
    },
    {
      dictionary: "すわる", kanji: "座る", vietnamese: "Ngồi", group: 1,
      forms: {
        nai: "すわらない", masu: "すわります", dictionary: "すわる", potential: "すわれる", ba: "すわれば", volitional: "すわろう", te: "すわって", te_iru: "すわっている", te_kudasai: "すわってください", ta: "すわった"
      }
    },
    {
      dictionary: "とまる", kanji: "泊まる", vietnamese: "Trọ lại", group: 1,
      forms: {
        nai: "とまらない", masu: "とまります", dictionary: "とまる", potential: "とまれる", ba: "とまれば", volitional: "とまろう", te: "とまって", te_iru: "とまっている", te_kudasai: "とまってください", ta: "とまった"
      }
    },
    {
      dictionary: "おく", kanji: "置く", vietnamese: "Đặt, để", group: 1,
      forms: {
        nai: "おかない", masu: "おきます", dictionary: "おく", potential: "おける", ba: "おけば", volitional: "おこう", te: "おいて", te_iru: "おいている", te_kudasai: "おいてください", ta: "おいた"
      }
    },
    {
      dictionary: "はる", kanji: "貼る", vietnamese: "Dán", group: 1,
      forms: {
        nai: "はらない", masu: "はります", dictionary: "はる", potential: "はれる", ba: "はれば", volitional: "はろう", te: "はって", te_iru: "はっている", te_kudasai: "はってください", ta: "はった"
      }
    },
    {
      dictionary: "かす", kanji: "貸す", vietnamese: "Cho mượn", group: 1,
      forms: {
        nai: "かさない", masu: "かします", dictionary: "かす", potential: "かせる", ba: "かせば", volitional: "かそう", te: "かして", te_iru: "かしている", te_kudasai: "かしてください", ta: "かした"
      }
    },
    {
      dictionary: "だす", kanji: "出す", vietnamese: "Nộp, gửi, lấy", group: 1,
      forms: {
        nai: "ださない", masu: "だします", dictionary: "だす", potential: "だせる", ba: "だせば", volitional: "だそう", te: "だして", te_iru: "だしている", te_kudasai: "だしてください", ta: "だした"
      }
    },
    {
      dictionary: "かえす", kanji: "返す", vietnamese: "Trả lại", group: 1,
      forms: {
        nai: "かえさない", masu: "かえします", dictionary: "かえす", potential: "かえせる", ba: "かえせば", volitional: "かえそう", te: "かえして", te_iru: "かえしている", te_kudasai: "かえしてください", ta: "かえした"
      }
    },
    {
      dictionary: "おくる", kanji: "送る", vietnamese: "Gửi", group: 1,
      forms: {
        nai: "おくらない", masu: "おくります", dictionary: "おくる", potential: "おくれる", ba: "おくれば", volitional: "おくろう", te: "おくって", te_iru: "おくっている", te_kudasai: "おくってください", ta: "おくった"
      }
    },
    {
      dictionary: "かかる", kanji: "掛かる", vietnamese: "Tốn (thời gian, tiền)", group: 1,
      forms: {
        nai: "かからない", masu: "かかります", dictionary: "かかる", potential: "かかれる", ba: "かかれば", volitional: "かかろう", te: "かかって", te_iru: "かかっている", te_kudasai: "かかってください", ta: "かかった"
      }
    },
    {
      dictionary: "はじまる", kanji: "始まる", vietnamese: "Bắt đầu", group: 1,
      forms: {
        nai: "はじまらない", masu: "はじまります", dictionary: "はじまる", potential: "はじまれる", ba: "はじまれば", volitional: "はじまろう", te: "はじまって", te_iru: "はじまっている", te_kudasai: "はじまってください", ta: "はじまった"
      }
    },
    {
      dictionary: "おわる", kanji: "終わる", vietnamese: "Kết thúc", group: 1,
      forms: {
        nai: "おわらない", masu: "おわります", dictionary: "おわる", potential: "おわれる", ba: "おわれば", volitional: "おわろう", te: "おわって", te_iru: "おわっている", te_kudasai: "おわってください", ta: "おわった"
      }
    },
    {
      dictionary: "みがく", kanji: "磨く", vietnamese: "Đánh (răng)", group: 1,
      forms: {
        nai: "みがかない", masu: "みがきます", dictionary: "みがく", potential: "みがける", ba: "みがけば", volitional: "みがこう", te: "みがいて", te_iru: "みがいている", te_kudasai: "みがいてください", ta: "みがいた"
      }
    },
    {
      dictionary: "かわく", kanji: "乾く", vietnamese: "Khô", group: 1,
      forms: {
        nai: "かわかない", masu: "かわきます", dictionary: "かわく", potential: "かわける", ba: "かわけば", volitional: "かわこう", te: "かわいて", te_iru: "かわいている", te_kudasai: "かわいてください", ta: "かわいた"
      }
    },
    {
      dictionary: "すむ", kanji: "住む", vietnamese: "Sinh sống", group: 1,
      forms: {
        nai: "すまない", masu: "すみます", dictionary: "すむ", potential: "すめる", ba: "すめば", volitional: "すめう", te: "すんで", te_iru: "すんでいる", te_kudasai: "すんでください", ta: "すんだ"
      }
    },
    {
      dictionary: "なる", kanji: "成る", vietnamese: "Trở thành", group: 1,
      forms: {
        nai: "ならない", masu: "なります", dictionary: "なる", potential: "なれる", ba: "なれば", volitional: "なろう", te: "なって", te_iru: "なっている", te_kudasai: "なってください", ta: "なった"
      }
    },
    {
      dictionary: "あたる", kanji: "当たる", vietnamese: "Trúng (số)", group: 1,
      forms: {
        nai: "あたらない", masu: "あたります", dictionary: "あたる", potential: "あたれる", ba: "あたれば", volitional: "あたろう", te: "あたって", te_iru: "あたっている", te_kudasai: "あたってください", ta: "あたった"
      }
    },
    {
      dictionary: "かわる", kanji: "変わる", vietnamese: "Thay đổi", group: 1,
      forms: {
        nai: "かわらない", masu: "かわります", dictionary: "かわる", potential: "かわれる", ba: "かわれば", volitional: "かわろう", te: "かわって", te_iru: "かわっている", te_kudasai: "かわってください", ta: "かわった"
      }
    },
    {
      dictionary: "おこる", kanji: "起こる", vietnamese: "Xảy ra", group: 1,
      forms: {
        nai: "おこらない", masu: "おこります", dictionary: "おこる", potential: "おこれる", ba: "おこれば", volitional: "おころう", te: "おこって", te_iru: "おこっている", te_kudasai: "おこってください", ta: "おこった"
      }
    },
    {
      dictionary: "もつ", kanji: "持つ", vietnamese: "Cầm, mang", group: 1,
      forms: {
        nai: "もたない", masu: "もちます", dictionary: "もつ", potential: "もてる", ba: "もてば", volitional: "もとう", te: "もって", te_iru: "もっている", te_kudasai: "もってください", ta: "もった"
      }
    },
    {
      dictionary: "けす", kanji: "消す", vietnamese: "Tắt (đèn)", group: 1,
      forms: {
        nai: "けさない", masu: "けします", dictionary: "けす", potential: "けせる", ba: "けせば", volitional: "けそう", te: "けして", te_iru: "けしている", te_kudasai: "けしてください", ta: "けした"
      }
    },
    {
      dictionary: "はたらく", kanji: "働く", vietnamese: "Làm việc", group: 1,
      forms: {
        nai: "はたらかない", masu: "はたらきます", dictionary: "はたらく", potential: "はたらける", ba: "はたらけば", volitional: "はたらこう", te: "はたらいて", te_iru: "はたらいている", te_kudasai: "はたらいてください", ta: "はたらいた"
      }
    },
    {
      dictionary: "さく", kanji: "咲く", vietnamese: "Hoa nở", group: 1,
      forms: {
        nai: "さかない", masu: "さきます", dictionary: "さく", potential: "さける", ba: "さけば", volitional: "さこう", te: "さいて", te_iru: "さいている", te_kudasai: "さいてください", ta: "さいた"
      }
    },
    {
      dictionary: "むく", kanji: "剥く", vietnamese: "Gọt (vỏ)", group: 1,
      forms: {
        nai: "むかない", masu: "むきます", dictionary: "むく", potential: "むける", ba: "むけば", volitional: "むこう", te: "むいて", te_iru: "むいている", te_kudasai: "むいてください", ta: "むいた"
      }
    },
    {
      dictionary: "おろす", kanji: "下ろす", vietnamese: "Rút tiền", group: 1,
      forms: {
        nai: "おろさない", masu: "おろします", dictionary: "おろす", potential: "おろせる", ba: "おろせば", volitional: "おろそう", te: "おろして", te_iru: "おろしている", te_kudasai: "おろしてください", ta: "おろした"
      }
    },
    {
      dictionary: "なくす", kanji: "無くす", vietnamese: "Làm mất", group: 1,
      forms: {
        nai: "なくさない", masu: "なくします", dictionary: "なくす", potential: "なくせる", ba: "なくせば", volitional: "なくそう", te: "なくして", te_iru: "なくしている", te_kudasai: "なくしてください", ta: "なくした"
      }
    },
    {
      dictionary: "よぶ", kanji: "呼ぶ", vietnamese: "Gọi", group: 1,
      forms: {
        nai: "よばない", masu: "よびます", dictionary: "よぶ", potential: "よべる", ba: "よべば", volitional: "よぼう", te: "よんで", te_iru: "よんでいる", te_kudasai: "よんでください", ta: "よんだ"
      }
    },
    {
      dictionary: "しる", kanji: "知る", vietnamese: "Biết", group: 1,
      forms: {
        nai: "しらない", masu: "しります", dictionary: "しる", potential: "しれる", ba: "しれば", volitional: "しろう", te: "しって", te_iru: "しっている", te_kudasai: "しってください", ta: "しった"
      }
    },
    {
      dictionary: "やく", kanji: "焼く", vietnamese: "Nướng", group: 1,
      forms: {
        nai: "やかない", masu: "やきます", dictionary: "やく", potential: "やける", ba: "やけば", volitional: "やこう", te: "やいて", te_iru: "やいている", te_kudasai: "やいてください", ta: "やいた"
      }
    },
    {
      dictionary: "いそぐ", kanji: "急ぐ", vietnamese: "Vội vàng", group: 1,
      forms: {
        nai: "いそがない", masu: "いそぎます", dictionary: "いそぐ", potential: "いそげる", ba: "いそげば", volitional: "いそごう", te: "いそいで", te_iru: "いそいでいる", te_kudasai: "いそいでください", ta: "いそいだ"
      }
    },
    {
      dictionary: "ころす", kanji: "殺す", vietnamese: "Giết", group: 1,
      forms: {
        nai: "ころさない", masu: "ころします", dictionary: "ころす", potential: "ころせる", ba: "ころせば", volitional: "ころそう", te: "ころして", te_iru: "ころしている", te_kudasai: "ころしてください", ta: "ころした"
      }
    },
    {
      dictionary: "さわる", kanji: "触る", vietnamese: "Chạm, đụng", group: 1,
      forms: {
        nai: "さわらない", masu: "さわります", dictionary: "さわる", potential: "さわれる", ba: "さわれば", volitional: "さわろう", te: "さわって", te_iru: "さわっている", te_kudasai: "さわってください", ta: "さわった"
      }
    },
    {
      dictionary: "まもる", kanji: "守る", vietnamese: "Tuân thủ, bảo vệ", group: 1,
      forms: {
        nai: "まもらない", masu: "まもります", dictionary: "まもる", potential: "まもれる", ba: "まもれば", volitional: "まもろう", te: "まもって", te_iru: "まもっている", te_kudasai: "まもってください", ta: "まもった"
      }
    },
    {
      dictionary: "はらう", kanji: "払う", vietnamese: "Trả tiền", group: 1,
      forms: {
        nai: "はらわない", masu: "はらいます", dictionary: "はらう", potential: "はらえる", ba: "はらえば", volitional: "はらおう", te: "はらって", te_iru: "はらっている", te_kudasai: "はらってください", ta: "はらった"
      }
    },
    {
      dictionary: "はこぶ", kanji: "運ぶ", vietnamese: "Khuân vác", group: 1,
      forms: {
        nai: "はこばない", masu: "はこびます", dictionary: "はこぶ", potential: "はこべる", ba: "はこべば", volitional: "はこぼう", te: "はこんで", te_iru: "はこんでいる", te_kudasai: "はこんでください", ta: "はこんだ"
      }
    },
    {
      dictionary: "かぶる", kanji: "被る", vietnamese: "Đội (nón)", group: 1,
      forms: {
        nai: "かぶらない", masu: "かぶります", dictionary: "かぶる", potential: "かぶれる", ba: "かぶれば", volitional: "かぶろう", te: "かぶって", te_iru: "かぶっている", te_kudasai: "かぶってください", ta: "かぶった"
      }
    },
    {
      dictionary: "はかる", kanji: "測る", vietnamese: "Đo", group: 1,
      forms: {
        nai: "はからない", masu: "はかります", dictionary: "はかる", potential: "はかれる", ba: "はかれば", volitional: "はかろう", te: "はかって", te_iru: "はかっている", te_kudasai: "はかってください", ta: "はかった"
      }
    },
    {
      dictionary: "わらう", kanji: "笑う", vietnamese: "Cười", group: 1,
      forms: {
        nai: "わらわない", masu: "わらいます", dictionary: "わらう", potential: "わらえる", ba: "わらえば", volitional: "わらおう", te: "わらって", te_iru: "わらっている", te_kudasai: "わらってください", ta: "わらった"
      }
    },
    {
      dictionary: "なく", kanji: "泣く", vietnamese: "Khóc", group: 1,
      forms: {
        nai: "なかない", masu: "なきます", dictionary: "なく", potential: "なける", ba: "なけば", volitional: "なこう", te: "ないて", te_iru: "ないている", te_kudasai: "ないてください", ta: "ないた"
      }
    },
    {
      dictionary: "あく", kanji: "開く", vietnamese: "Mở (tự động từ)", group: 1,
      forms: {
        nai: "あかない", masu: "あきます", dictionary: "あく", potential: "あける", ba: "あけば", volitional: "あこう", te: "あいて", te_iru: "あいている", te_kudasai: "あいてください", ta: "あいた"
      }
    },
    {
      dictionary: "しまる", kanji: "閉まる", vietnamese: "Đóng (tự động từ)", group: 1,
      forms: {
        nai: "しまらない", masu: "しまります", dictionary: "しまる", potential: "しまれる", ba: "しまれば", volitional: "しまろう", te: "しまって", te_iru: "しまっている", te_kudasai: "しまってください", ta: "しまった"
      }
    },
    {
      dictionary: "おとす", kanji: "落とす", vietnamese: "Đánh rơi", group: 1,
      forms: {
        nai: "おとさない", masu: "おとします", dictionary: "おとす", potential: "おとせる", ba: "おとせば", volitional: "おとそう", te: "おとして", te_iru: "おとしている", te_kudasai: "おとしてください", ta: "おとした"
      }
    },
    {
      dictionary: "てつだう", kanji: "手伝う", vietnamese: "Phụ giúp", group: 1,
      forms: {
        nai: "てつだわない", masu: "てつだいます", dictionary: "てつだう", potential: "てつだえる", ba: "てつだえば", volitional: "てつだおう", te: "てつだって", te_iru: "てつだっている", te_kudasai: "てつだってください", ta: "てつだった"
      }
    },
    {
      dictionary: "さそう", kanji: "誘う", vietnamese: "Mời, rủ rê", group: 1,
      forms: {
        nai: "さそわない", masu: "さそいます", dictionary: "さそう", potential: "さそえる", ba: "さそえば", volitional: "さそおう", te: "さそって", te_iru: "さそっている", te_kudasai: "さそってください", ta: "さそった"
      }
    },
    {
      dictionary: "はく", kanji: "履く", vietnamese: "Mang (giày)", group: 1,
      forms: {
        nai: "はかない", masu: "はきます", dictionary: "はく", potential: "はける", ba: "はけば", volitional: "はこう", te: "はいて", te_iru: "はいている", te_kudasai: "はいてください", ta: "はいた"
      }
    },
    {
      dictionary: "かつ", kanji: "勝つ", vietnamese: "Thắng", group: 1,
      forms: {
        nai: "かたない", masu: "かちます", dictionary: "かつ", potential: "かてる", ba: "かてば", volitional: "かとう", te: "かって", te_iru: "かっている", te_kudasai: "かってください", ta: "かった"
      }
    },
    {
      dictionary: "でる", kanji: "出る", vietnamese: "Rời khỏi, đi ra", group: 2,
      forms: {
        nai: "でない", masu: "でます", dictionary: "でる", potential: "でられる", ba: "でれば", volitional: "でよう", te: "でて", te_iru: "でている", te_kudasai: "でてください", ta: "でた"
      }
    },
    {
      dictionary: "おりる", kanji: "降りる", vietnamese: "Xuống (xe)", group: 2,
      forms: {
        nai: "おりない", masu: "おります", dictionary: "おりる", potential: "おりられる", ba: "おりれば", volitional: "おりよう", te: "おりて", te_iru: "おりている", te_kudasai: "おりてください", ta: "おりた"
      }
    },
    {
      dictionary: "かりる", kanji: "借りる", vietnamese: "Mượn, vay", group: 2,
      forms: {
        nai: "かりない", masu: "かります", dictionary: "かりる", potential: "かりられる", ba: "かりれば", volitional: "かりよう", te: "かりて", te_iru: "かりている", te_kudasai: "かりてください", ta: "かりた"
      }
    },
    {
      dictionary: "みせる", kanji: "見せる", vietnamese: "Cho xem", group: 2,
      forms: {
        nai: "みせない", masu: "みせます", dictionary: "みせる", potential: "みせられる", ba: "みせれば", volitional: "みせよう", te: "みせて", te_iru: "みせている", te_kudasai: "みせてください", ta: "みせた"
      }
    },
    {
      dictionary: "いれる", kanji: "入れる", vietnamese: "Bỏ vào", group: 2,
      forms: {
        nai: "いれない", masu: "いれます", dictionary: "いれる", potential: "いれられる", ba: "いれれば", volitional: "いれよう", te: "いれて", te_iru: "いれている", te_kudasai: "いれてください", ta: "いれた"
      }
    },
    {
      dictionary: "かける", kanji: "掛ける", vietnamese: "Treo, gọi (điện)", group: 2,
      forms: {
        nai: "かけない", masu: "かけます", dictionary: "かける", potential: "かけられる", ba: "かければ", volitional: "かけよう", te: "かけて", te_iru: "かけている", te_kudasai: "かけてください", ta: "かけた"
      }
    },
    {
      dictionary: "こたえる", kanji: "答える", vietnamese: "Trả lời", group: 2,
      forms: {
        nai: "こたえない", masu: "こたえます", dictionary: "こたえる", potential: "こたえられる", ba: "こたえれば", volitional: "こたえよう", te: "こたえて", te_iru: "こたえている", te_kudasai: "こたえてください", ta: "こたえた"
      }
    },
    {
      dictionary: "わかれる", kanji: "別れる", vietnamese: "Chia tay", group: 2,
      forms: {
        nai: "わかれない", masu: "わかれます", dictionary: "わかれる", potential: "わかれられる", ba: "わかれれば", volitional: "わかれよう", te: "わかれて", te_iru: "わかれている", te_kudasai: "わかれてください", ta: "わかれた"
      }
    },
    {
      dictionary: "あつめる", kanji: "集める", vietnamese: "Thu thập", group: 2,
      forms: {
        nai: "あつめない", masu: "あつめます", dictionary: "あつめる", potential: "あつめられる", ba: "あつめれば", volitional: "あつめよう", te: "あつめて", te_iru: "あつめている", te_kudasai: "あつめてください", ta: "あつめた"
      }
    },
    {
      dictionary: "おくれる", kanji: "遅れる", vietnamese: "Trễ, muộn", group: 2,
      forms: {
        nai: "おくれない", masu: "おくれます", dictionary: "おくれる", potential: "おくれられる", ba: "おくれれば", volitional: "おくれよう", te: "おくれて", te_iru: "おくれている", te_kudasai: "おくれてください", ta: "おくれた"
      }
    },
    {
      dictionary: "でかける", kanji: "出かける", vietnamese: "Ra ngoài", group: 2,
      forms: {
        nai: "でかけない", masu: "でかけます", dictionary: "でかける", potential: "でかけられる", ba: "でかければ", volitional: "でかけよう", te: "でかけて", te_iru: "でかけている", te_kudasai: "でかけてください", ta: "でかけた"
      }
    },
    {
      dictionary: "できる", kanji: "出来る", vietnamese: "Có thể", group: 2,
      forms: {
        nai: "できない", masu: "できます", dictionary: "できる", potential: "できられる", ba: "できれば", volitional: "できよう", te: "できて", te_iru: "できている", te_kudasai: "できてください", ta: "できた"
      }
    },
    {
      dictionary: "つかれる", kanji: "疲れる", vietnamese: "Mệt", group: 2,
      forms: {
        nai: "つかれない", masu: "つかれます", dictionary: "つかれる", potential: "つかれられる", ba: "つかれれば", volitional: "つかれよう", te: "つかれて", te_iru: "つかれている", te_kudasai: "つかれてください", ta: "つかれた"
      }
    },
    {
      dictionary: "われる", kanji: "割れる", vietnamese: "Bị vỡ", group: 2,
      forms: {
        nai: "われない", masu: "われます", dictionary: "われる", potential: "われられる", ba: "われれば", volitional: "われよう", te: "われて", te_iru: "われている", te_kudasai: "われてください", ta: "われた"
      }
    },
    {
      dictionary: "おぼえる", kanji: "覚える", vietnamese: "Nhớ, học thuộc", group: 2,
      forms: {
        nai: "おぼえない", masu: "おぼえます", dictionary: "おぼえる", potential: "おぼえられる", ba: "おぼえれば", volitional: "おぼえよう", te: "おぼえて", te_iru: "おぼえている", te_kudasai: "おぼえてください", ta: "おぼえた"
      }
    },
    {
      dictionary: "つける", kanji: "点ける", vietnamese: "Bật (đèn)", group: 2,
      forms: {
        nai: "つけない", masu: "つけます", dictionary: "つける", potential: "つけられる", ba: "つければ", volitional: "つけよう", te: "つけて", te_iru: "つけている", te_kudasai: "つけてください", ta: "つけた"
      }
    },
    {
      dictionary: "つとめる", kanji: "勤める", vietnamese: "Làm việc", group: 2,
      forms: {
        nai: "つとめない", masu: "つとめます", dictionary: "つとめる", potential: "つとめられる", ba: "つとめれば", volitional: "つとめよう", te: "つとめて", te_iru: "つとめている", te_kudasai: "つとめてください", ta: "つとめた"
      }
    },
    {
      dictionary: "たすける", kanji: "助ける", vietnamese: "Giúp đỡ", group: 2,
      forms: {
        nai: "たすけない", masu: "たすけます", dictionary: "たすける", potential: "たすけられる", ba: "たすければ", volitional: "たすけよう", te: "たすけて", te_iru: "たすけている", te_kudasai: "たすけてください", ta: "たすけた"
      }
    },
    {
      dictionary: "あびる", kanji: "浴びる", vietnamese: "Tắm (vòi sen)", group: 2,
      forms: {
        nai: "あびない", masu: "あびます", dictionary: "あびる", potential: "あびられる", ba: "あびれば", volitional: "あびよう", te: "あびて", te_iru: "あびている", te_kudasai: "あびてください", ta: "あびた"
      }
    },
    {
      dictionary: "しめる", kanji: "閉める", vietnamese: "Đóng (tha động từ)", group: 2,
      forms: {
        nai: "しめない", masu: "しめます", dictionary: "しめる", potential: "しめられる", ba: "しめれば", volitional: "しめよう", te: "しめて", te_iru: "しめている", te_kudasai: "しめてください", ta: "しめた"
      }
    },
    {
      dictionary: "あける", kanji: "開ける", vietnamese: "Mở (tha động từ)", group: 2,
      forms: {
        nai: "あけない", masu: "あけます", dictionary: "あける", potential: "あけられる", ba: "あければ", volitional: "あけよう", te: "あけて", te_iru: "あけている", te_kudasai: "あけてください", ta: "あけた"
      }
    },
    {
      dictionary: "むかえる", kanji: "迎える", vietnamese: "Đón tiếp", group: 2,
      forms: {
        nai: "むかえない", masu: "むかえます", dictionary: "むかえる", potential: "むかえられる", ba: "むかえれば", volitional: "むかえよう", te: "むかえて", te_iru: "むかえている", te_kudasai: "むかえてください", ta: "むかえた"
      }
    },
    {
      dictionary: "なげる", kanji: "投げる", vietnamese: "Ném", group: 2,
      forms: {
        nai: "なげない", masu: "なげます", dictionary: "なげる", potential: "なげられる", ba: "なげれば", volitional: "なげよう", te: "なげて", te_iru: "なげている", te_kudasai: "なげてください", ta: "なげた"
      }
    },
    {
      dictionary: "わすれる", kanji: "忘れる", vietnamese: "Quên", group: 2,
      forms: {
        nai: "わすれない", masu: "わすれます", dictionary: "わすれる", potential: "わすれられる", ba: "わすれれば", volitional: "わすれよう", te: "わすれて", te_iru: "わすれている", te_kudasai: "わすれてください", ta: "わすれた"
      }
    },
    {
      dictionary: "とめる", kanji: "止める", vietnamese: "Dừng (xe)", group: 2,
      forms: {
        nai: "とめない", masu: "とめます", dictionary: "とめる", potential: "とめられる", ba: "とめれば", volitional: "とめよう", te: "とめて", te_iru: "とめている", te_kudasai: "とめてください", ta: "とめた"
      }
    },
    {
      dictionary: "まぜる", kanji: "混ぜる", vietnamese: "Trộn", group: 2,
      forms: {
        nai: "まぜない", masu: "まぜます", dictionary: "まぜる", potential: "まぜられる", ba: "まぜれば", volitional: "まぜよう", te: "まぜて", te_iru: "まぜている", te_kudasai: "まぜてください", ta: "まぜた"
      }
    },
    {
      dictionary: "すてる", kanji: "捨てる", vietnamese: "Vứt bỏ", group: 2,
      forms: {
        nai: "すてない", masu: "すてます", dictionary: "すてる", potential: "すてられる", ba: "すてれば", volitional: "すてよう", te: "すてて", te_iru: "すてている", te_kudasai: "すててください", ta: "すてた"
      }
    },
    {
      dictionary: "きる", kanji: "着る", vietnamese: "Mặc", group: 2,
      forms: {
        nai: "きない", masu: "きます", dictionary: "きる", potential: "きられる", ba: "きれば", volitional: "きよう", te: "きて", te_iru: "きている", te_kudasai: "きてください", ta: "きた"
      }
    },
    {
      dictionary: "やめる", kanji: "辞める", vietnamese: "Nghỉ việc, bỏ", group: 2,
      forms: {
        nai: "やめない", masu: "やめます", dictionary: "やめる", potential: "やめられる", ba: "やめれば", volitional: "やめよう", te: "やめて", te_iru: "やめている", te_kudasai: "やめてください", ta: "やめた"
      }
    },
    {
      dictionary: "しらべる", kanji: "調べる", vietnamese: "Tìm hiểu, tra cứu", group: 2,
      forms: {
        nai: "しらべない", masu: "しらべます", dictionary: "しらべる", potential: "しらべられる", ba: "しらべれば", volitional: "しらべよう", te: "しらべて", te_iru: "しらべている", te_kudasai: "しらべてください", ta: "しらべた"
      }
    },
    {
      dictionary: "くれる", kanji: "呉れる", vietnamese: "Cho tôi", group: 2,
      forms: {
        nai: "くれない", masu: "くれます", dictionary: "くれる", potential: "くれられる", ba: "くれれば", volitional: "くれよう", te: "くれて", te_iru: "くれている", te_kudasai: "くれてください", ta: "くれた"
      }
    },
    {
      dictionary: "あげる", kanji: "上げる", vietnamese: "Cho, tặng", group: 2,
      forms: {
        nai: "あげない", masu: "あげます", dictionary: "あげる", potential: "あげられる", ba: "あげれば", volitional: "あげよう", te: "あげて", te_iru: "あげている", te_kudasai: "あげてください", ta: "あげた"
      }
    },
    {
      dictionary: "くらべる", kanji: "比べる", vietnamese: "So sánh", group: 2,
      forms: {
        nai: "くらべない", masu: "くらべます", dictionary: "くらべる", potential: "くらべられる", ba: "くらべれば", volitional: "くらべよう", te: "くらべて", te_iru: "くらべている", te_kudasai: "くらべてください", ta: "くらべた"
      }
    },
    {
      dictionary: "れんしゅうする", kanji: "練習する", vietnamese: "Luyện tập", group: 3,
      forms: {
        nai: "れんしゅうしない", masu: "れんしゅうします", dictionary: "れんしゅうする", potential: "れんしゅうできる", ba: "れんしゅうすれば", volitional: "れんしゅうしよう", te: "れんしゅうして", te_iru: "れんしゅうしている", te_kudasai: "れんしゅうしてください", ta: "れんしゅうした"
      }
    },
    {
      dictionary: "べんきょうする", kanji: "勉強する", vietnamese: "Học", group: 3,
      forms: {
        nai: "べんきょうしない", masu: "べんきょうします", dictionary: "べんきょうする", potential: "べんきょうできる", ba: "べんきょうすれば", volitional: "べんきょうしよう", te: "べんきょうして", te_iru: "べんきょうしている", te_kudasai: "べんきょうしてください", ta: "べんきょうした"
      }
    },
    {
      dictionary: "さんぽする", kanji: "散歩する", vietnamese: "Đi dạo", group: 3,
      forms: {
        nai: "さんぽしない", masu: "さんぽします", dictionary: "さんぽする", potential: "さんぽできる", ba: "さんぽすれば", volitional: "さんぽしよう", te: "さんぽして", te_iru: "さんぽしている", te_kudasai: "さんぽしてください", ta: "さんぽした"
      }
    },
    {
      dictionary: "りょこうする", kanji: "旅行する", vietnamese: "Du lịch", group: 3,
      forms: {
        nai: "りょこうしない", masu: "りょこうします", dictionary: "りょこうする", potential: "りょこうできる", ba: "りょこうすれば", volitional: "りょこうしよう", te: "りょこうして", te_iru: "りょこうしている", te_kudasai: "りょこうしてください", ta: "りょこうした"
      }
    },
    {
      dictionary: "けっこんする", kanji: "結婚する", vietnamese: "Kết hôn", group: 3,
      forms: {
        nai: "けっこんしない", masu: "けっこんします", dictionary: "けっこんする", potential: "けっこんできる", ba: "けっこんすれば", volitional: "けっこんしよう", te: "けっこんして", te_iru: "けっこんしている", te_kudasai: "けっこんしてください", ta: "けっこんした"
      }
    },
    {
      dictionary: "よやくする", kanji: "予約する", vietnamese: "Đặt trước", group: 3,
      forms: {
        nai: "よやくしない", masu: "よやくします", dictionary: "よやくする", potential: "よやくできる", ba: "よやくすれば", volitional: "よやくしよう", te: "よやくして", te_iru: "よやくしている", te_kudasai: "よやくしてください", ta: "よやくした"
      }
    },
    {
      dictionary: "ざんぎょうする", kanji: "残業する", vietnamese: "Tăng ca", group: 3,
      forms: {
        nai: "ざんぎょうしない", masu: "ざんぎょうします", dictionary: "ざんぎょうする", potential: "ざんぎょうできる", ba: "ざんぎょうすれば", volitional: "ざんぎょうしよう", te: "ざんぎょうして", te_iru: "ざんぎょうしている", te_kudasai: "ざんぎょうしてください", ta: "ざんぎょうした"
      }
    },
    {
      dictionary: "あんしんする", kanji: "安心する", vietnamese: "An tâm", group: 3,
      forms: {
        nai: "あんしんしない", masu: "あんしんします", dictionary: "あんしんする", potential: "あんしんできる", ba: "あんしんすれば", volitional: "あんしんしよう", te: "あんしんして", te_iru: "あんしんしている", te_kudasai: "あんしんしてください", ta: "あんしんした"
      }
    },
    {
      dictionary: "ちゅういする", kanji: "注意する", vietnamese: "Chú ý", group: 3,
      forms: {
        nai: "ちゅういしない", masu: "ちゅういします", dictionary: "ちゅういする", potential: "ちゅういできる", ba: "ちゅういすれば", volitional: "ちゅういしよう", te: "ちゅういして", te_iru: "ちゅういしている", te_kudasai: "ちゅういしてください", ta: "ちゅういした"
      }
    },
    {
      dictionary: "しょうかいする", kanji: "紹介する", vietnamese: "Giới thiệu", group: 3,
      forms: {
        nai: "しょうかいしない", masu: "しょうかいします", dictionary: "しょうかいする", potential: "しょうかいできる", ba: "しょうかいすれば", volitional: "しょうかいしよう", te: "しょうかいして", te_iru: "しょうかいしている", te_kudasai: "しょうかいしてください", ta: "しょうかいした"
      }
    },
    {
      dictionary: "ふくしゅうする", kanji: "復習する", vietnamese: "Ôn tập", group: 3,
      forms: {
        nai: "ふくしゅうしない", masu: "ふくしゅうします", dictionary: "ふくしゅうする", potential: "ふくしゅうできる", ba: "ふくしゅうすれば", volitional: "ふくしゅうしよう", te: "ふくしゅうして", te_iru: "ふくしゅうしている", te_kudasai: "ふくしゅうしてください", ta: "ふくしゅうした"
      }
    }
  ]
};

