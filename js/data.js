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
    { id: "nai", name: "Phủ định (V-nai / Không ~)", suffix: "ない", example: "いかない" },
    { id: "masu", name: "Lễ phép (V-masu)", suffix: "ます", example: "いきます" },
    { id: "dictionary", name: "Nguyên thể (V-u / Thể từ điển)", suffix: "", example: "いく" },
    { id: "potential", name: "Có thể ~ (Thể Khả năng)", suffix: "える/られる", example: "いける" },
    { id: "ba", name: "Nếu ~", suffix: "えば/れば", example: "いけば" },
    { id: "volitional", name: "~ thôi (Thể Ý chí V-ou)", suffix: "おう/よう", example: "いこう" },
    { id: "te", name: "Thể て (V-te)", suffix: "て/で", example: "いって" },
    { id: "te_iru", name: "Đang ~ (Thể V-te iru)", suffix: "ている", example: "いっている" },
    { id: "te_kudasai", name: "Hãy ~ (Thể V-te kudasai)", suffix: "てください", example: "いってください" },
    { id: "ta", name: "Thể た (Thể Quá khứ V-ta)", suffix: "た/だ", example: "いった" }
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
        nai: "またない", masu: "まちます", dictionary: "まつ", potential: "まてる", ba: "まてば", volitional: "またろう", te: "まって", te_iru: "まっている", te_kudasai: "まってください", ta: "まった"
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
        nai: "つくらない", masu: "つくります", dictionary: "つくる", potential: "つくれる", ba: "つければ", volitional: "つくろう", te: "つくって", te_iru: "つくっている", te_kudasai: "つくってください", ta: "つくった"
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
    }
  ]
};

