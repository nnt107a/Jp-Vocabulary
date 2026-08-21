# -*- coding: utf-8 -*-
import json

# Define the 4 exercise sets: 50 Particle Fill, 50 Interrogative Fill, 50 Sentence Translation, 50 Error Correction.

particle_fill_list = [
  # 1-10: Sơ cấp 1 - Trang 80 & Trang 87-88 (いく/くる/かえる/もどる + に/へ, を)
  {"id": "pf_01", "sentence": "わたしは まいにち バス（　　）がっこうへ いきます。", "options": ["で", "に", "を", "へ"], "correct": 0, "particle": "で", "explanation": "Phương tiện di chuyển dùng trợ từ「で」: バスで (bằng xe buýt).", "pdfSource": "2.pdf"},
  {"id": "pf_02", "sentence": "あした ともだち（　　）えいがを みます。", "options": ["と", "に", "で", "を"], "correct": 0, "particle": "と", "explanation": "Làm cùng với ai đó dùng trợ từ「と」: ともだちと (cùng với bạn).", "pdfSource": "2.pdf, 9.pdf"},
  {"id": "pf_03", "sentence": "毎朝 7時（　　）おきます。", "options": ["に", "で", "を", "へ"], "correct": 0, "particle": "に", "explanation": "Thời điểm xác định có con số dùng trợ từ「に」: 7じに (lúc 7 giờ).", "pdfSource": "2.pdf"},
  {"id": "pf_04", "sentence": "しょくどう（　　）ひるごはんを たべます。", "options": ["で", "に", "を", "へ"], "correct": 0, "particle": "で", "explanation": "Hành động ăn diễn ra tại nhà ăn, dùng trợ từ「で」: しょくどうで.", "pdfSource": "7.pdf"},
  {"id": "pf_05", "sentence": "ナムさんは としょかん（　　）いきます。", "options": ["へ", "で", "を", "と"], "correct": 0, "particle": "へ", "explanation": "Chỉ hướng đi/nơi tới dùng trợ từ「へ」hoặc「に」.", "pdfSource": "5.pdf"},
  {"id": "pf_06", "sentence": "まいにち にほんご（　　）ならいます。", "options": ["を", "で", "に", "が"], "correct": 0, "particle": "を", "explanation": "Tân ngữ trực tiếp của động từ ならいます (học) dùng trợ từ「を」.", "pdfSource": "6.pdf"},
  {"id": "pf_07", "sentence": "あさ おきて かお（　　）あらいます。", "options": ["を", "に", "で", "と"], "correct": 0, "particle": "を", "explanation": "Rửa mặt: かおを あらいます.", "pdfSource": "6.pdf"},
  {"id": "pf_08", "sentence": "きっさてんで コーヒー（　　）のみます。", "options": ["を", "で", "に", "へ"], "correct": 0, "particle": "を", "explanation": "Uống cà phê: コーヒーを のみます.", "pdfSource": "7.pdf"},
  {"id": "pf_09", "sentence": "ミンくんは へや（　　）もどります。", "options": ["に", "で", "を", "と"], "correct": 0, "particle": "に", "explanation": "Quay lại phòng (nơi đến) dùng「に」hoặc「へ」: へやにもどります.", "pdfSource": "5.pdf, 6.pdf"},
  {"id": "pf_10", "sentence": "アミットさんは くに（　　）かえります。", "options": ["へ", "で", "を", "と"], "correct": 0, "particle": "へ", "explanation": "Về nước dùng「へ」hoặc「に」.", "pdfSource": "5.pdf"},

  # 11-20: Phương tiện, công cụ, ngôn ngữ (で) & Cùng ai (と)
  {"id": "pf_11", "sentence": "はしと スプーン（　　）ごはんを たべます。", "options": ["で", "に", "を", "へ"], "correct": 0, "particle": "で", "explanation": "Dụng cụ ăn uống dùng「で」: はしとスプーンで (bằng đũa và thìa).", "pdfSource": "8.pdf"},
  {"id": "pf_12", "sentence": "えんぴつ（　　）にほんごを かきます。", "options": ["で", "に", "を", "と"], "correct": 0, "particle": "で", "explanation": "Viết bằng bút chì: えんぴつで.", "pdfSource": "8.pdf"},
  {"id": "pf_13", "sentence": "えいご（　　）レポートを かきます。", "options": ["で", "を", "に", "へ"], "correct": 0, "particle": "で", "explanation": "Viết báo cáo bằng tiếng Anh (ngôn ngữ): えいごで.", "pdfSource": "8.pdf"},
  {"id": "pf_14", "sentence": "ひこうき（　　）ニャチャンへ いきます。", "options": ["で", "に", "を", "と"], "correct": 0, "particle": "で", "explanation": "Đi Nha Trang bằng máy bay (phương tiện): ひこうきで.", "pdfSource": "8.pdf"},
  {"id": "pf_15", "sentence": "こいびと（　　）いなかへ かえります。", "options": ["と", "に", "で", "を"], "correct": 0, "particle": "と", "explanation": "Về quê cùng người yêu (cùng với ai): こいびとと.", "pdfSource": "8.pdf"},
  {"id": "pf_16", "sentence": "こうえんで かいしゃの ひと（　　）テニスを します。", "options": ["と", "に", "で", "を"], "correct": 0, "particle": "と", "explanation": "Chơi tennis cùng người ở công ty: ひとと.", "pdfSource": "9.pdf"},
  {"id": "pf_17", "sentence": "きのう （　　）スーパーに いきました。", "options": ["ひとりで", "ひとりと", "ひとりに", "ひとりでと"], "correct": 0, "particle": "ひとりで", "explanation": "Đi một mình là「ひとりで」, không bao giờ dùng と.", "pdfSource": "9.pdf"},
  {"id": "pf_18", "sentence": "ナイフ（　　）フォークで にくを たべます。", "options": ["と", "に", "で", "を"], "correct": 0, "particle": "と", "explanation": "Nối 2 danh từ dao và nĩa: ナイフとフォーク.", "pdfSource": "8.pdf"},
  {"id": "pf_19", "sentence": "スーパーで はな（　　）くだものを かいました。", "options": ["と", "に", "で", "へ"], "correct": 0, "particle": "と", "explanation": "Mua hoa và trái cây: はなとくだもの.", "pdfSource": "7.pdf"},
  {"id": "pf_20", "sentence": "コンビニ（　　）アルバイトを します。", "options": ["で", "に", "を", "へ"], "correct": 0, "particle": "で", "explanation": "Làm thêm tại cửa hàng tiện lợi (địa điểm hành động): コンビニで.", "pdfSource": "7.pdf"},

  # 21-30: から, まで, も, の, は phủ định
  {"id": "pf_21", "sentence": "うち（　　）がっこうまで あるいて いきます。", "options": ["から", "まで", "に", "で"], "correct": 0, "particle": "から", "explanation": "Đi từ nhà: うちから.", "pdfSource": "2.pdf"},
  {"id": "pf_22", "sentence": "8じから 10じ（　　）サッカーを します。", "options": ["まで", "から", "に", "で"], "correct": 0, "particle": "まで", "explanation": "Đến 10 giờ: 10じまで.", "pdfSource": "2.pdf"},
  {"id": "pf_23", "sentence": "タンさんも いきます。わたし（　　）いきます。", "options": ["も", "は", "が", "を"], "correct": 0, "particle": "も", "explanation": "Biểu thị sự đồng nhất (cũng đi): わたしも.", "pdfSource": "2.pdf"},
  {"id": "pf_24", "sentence": "「にほんごを はなしますか」「いいえ、にほんご（　　）はなしません。」", "options": ["は", "を", "が", "に"], "correct": 0, "particle": "は", "explanation": "Phủ định đối tượng chuyển を thành は để nhấn mạnh sự tương phản.", "pdfSource": "1.pdf, 7.pdf"},
  {"id": "pf_25", "sentence": "「テレビで みますか」「いいえ、テレビ（　　）みません。」", "options": ["では", "に", "を", "と"], "correct": 0, "particle": "では", "explanation": "Phủ định phương tiện: テレビでは みません.", "pdfSource": "2.pdf"},
  {"id": "pf_26", "sentence": "これは わたし（　　）ほんです。", "options": ["の", "に", "で", "と"], "correct": 0, "particle": "の", "explanation": "Sách của tôi: わたしの ほん.", "pdfSource": "9.pdf"},
  {"id": "pf_27", "sentence": "きのう どこ（　　）いきませんでした。", "options": ["へも", "へ", "で", "を"], "correct": 0, "particle": "へも", "explanation": "Phủ định hoàn toàn: どこへも / どこも (không đi đâu cả).", "pdfSource": "2.pdf"},
  {"id": "pf_28", "sentence": "けさ なに（　　）たべませんでした。", "options": ["も", "を", "に", "で"], "correct": 0, "particle": "も", "explanation": "Phủ định hoàn toàn: なにも たべませんでした (không ăn gì cả).", "pdfSource": "2.pdf"},
  {"id": "pf_29", "sentence": "きょうしつに がくせい（　　）5にん います。", "options": ["が", "を", "は", "で"], "correct": 0, "particle": "が", "explanation": "Chỉ sự hiện diện/tồn tại dùng trợ từ「が います」.", "pdfSource": "6.pdf"},
  {"id": "pf_30", "sentence": "わたしは えいが（　　）すきです。", "options": ["が", "を", "に", "で"], "correct": 0, "particle": "が", "explanation": "Đối tượng yêu thích với すき dùng「が」.", "pdfSource": "1.pdf"},

  # 31-40: Vị trí, thời gian, sự phân biệt に và で
  {"id": "pf_31", "sentence": "つくえの うえ（　　）ペンが あります。", "options": ["に", "で", "を", "へ"], "correct": 0, "particle": "に", "explanation": "Tồn tại ở vị trí nào dùng「〜に あります」.", "pdfSource": "2.pdf"},
  {"id": "pf_32", "sentence": "へや（　　）ほんを よみます。", "options": ["で", "に", "へ", "を"], "correct": 0, "particle": "で", "explanation": "Hành động đọc sách diễn ra trong phòng, dùng「で」.", "pdfSource": "7.pdf"},
  {"id": "pf_33", "sentence": "らいしゅう とうきょう（　　）いきます。", "options": ["に", "で", "を", "から"], "correct": 0, "particle": "に", "explanation": "Đích đến di chuyển: とうきょうに いきます.", "pdfSource": "1.pdf, 6.pdf"},
  {"id": "pf_34", "sentence": "ぎんこうは 9じ（　　）はじまります。", "options": ["に", "で", "を", "へ"], "correct": 0, "particle": "に", "explanation": "Mốc thời gian cụ thể: 9じに.", "pdfSource": "2.pdf"},
  {"id": "pf_35", "sentence": "ともだち（　　）でんわを かけます。", "options": ["に", "で", "を", "へ"], "correct": 0, "particle": "に", "explanation": "Đối tượng nhận cuộc gọi dùng「に」: ともだちに.", "pdfSource": "1.pdf"},
  {"id": "pf_36", "sentence": "駅（　　）ともだちを まちます。", "options": ["で", "に", "へ", "を"], "correct": 0, "particle": "で", "explanation": "Đợi bạn tại ga (hành động chờ đợi tại nơi chốn): えきで.", "pdfSource": "8.pdf"},
  {"id": "pf_37", "sentence": "わたしは きのう パン（　　）たまごを たべました。", "options": ["と", "に", "で", "へ"], "correct": 0, "particle": "と", "explanation": "Nối danh từ: bánh mì và trứng (パンとたまご).", "pdfSource": "7.pdf"},
  {"id": "pf_38", "sentence": "にほんご（　　）てがみを かきます。", "options": ["で", "を", "に", "へ"], "correct": 0, "particle": "で", "explanation": "Viết thư bằng tiếng Nhật (ngôn ngữ/công cụ): にほんごで.", "pdfSource": "8.pdf"},
  {"id": "pf_39", "sentence": "あした がっこう（　　）くるんですか。", "options": ["に", "で", "を", "と"], "correct": 0, "particle": "に", "explanation": "Đến trường học: がっこうに きます.", "pdfSource": "1.pdf, 5.pdf"},
  {"id": "pf_40", "sentence": "せんせい（　　）にほんごを おしえます。", "options": ["は", "に", "で", "と"], "correct": 0, "particle": "は", "explanation": "Chủ đề câu: せんせいは にほんごを おしえます (Giáo viên thì dạy tiếng Nhật).", "pdfSource": "6.pdf"},

  # 41-50: Tương phản, nâng cao, tổng hợp
  {"id": "pf_41", "sentence": "こうえん（　　）さんぽします。", "options": ["を", "で", "に", "へ"], "correct": 0, "particle": "を", "explanation": "Chuyển động qua lại trong một không gian mở (đi dạo công viên): こうえんを さんぽします.", "pdfSource": "JLPT N5"},
  {"id": "pf_42", "sentence": "みず（　　）いっぱいいかがですか。", "options": ["を", "で", "に", "と"], "correct": 0, "particle": "を", "explanation": "Mời nước uống (tân ngữ): おみずを.", "pdfSource": "JLPT N5"},
  {"id": "pf_43", "sentence": "えいがかんで こいびと（　　）えいがを みます。", "options": ["と", "に", "で", "へ"], "correct": 0, "particle": "と", "explanation": "Xem phim cùng người yêu: こいびとと.", "pdfSource": "9.pdf"},
  {"id": "pf_44", "sentence": "とうきょう（　　）きょうとまで しんかんせんで いきます。", "options": ["から", "まで", "に", "で"], "correct": 0, "particle": "から", "explanation": "Từ Tokyo: とうきょうから.", "pdfSource": "2.pdf"},
  {"id": "pf_45", "sentence": "まいばん 11じ（　　）ねます。", "options": ["に", "で", "を", "へ"], "correct": 0, "particle": "に", "explanation": "Ngủ lúc 11 giờ: 11じに.", "pdfSource": "2.pdf"},
  {"id": "pf_46", "sentence": "ドンズーがっこう（　　）べんきょうします。", "options": ["で", "に", "へ", "を"], "correct": 0, "particle": "で", "explanation": "Học tại trường Đông Du: ドンズーがっこうで.", "pdfSource": "7.pdf"},
  {"id": "pf_47", "sentence": "「にっきを かきますか」「いいえ、にっき（　　）かきません。」", "options": ["は", "を", "で", "に"], "correct": 0, "particle": "は", "explanation": "Phủ định tân ngữ đổi thành「は」.", "pdfSource": "6.pdf"},
  {"id": "pf_48", "sentence": "やまかせんせいは ベトナム（　　）きます。", "options": ["へ", "で", "を", "と"], "correct": 0, "particle": "へ", "explanation": "Đến Việt Nam: ベトナムへ きます.", "pdfSource": "5.pdf"},
  {"id": "pf_49", "sentence": "タンさんは ごはん（　　）たべます。", "options": ["を", "に", "で", "へ"], "correct": 0, "particle": "を", "explanation": "Ăn cơm: ごはんを たべます.", "pdfSource": "6.pdf"},
  {"id": "pf_50", "sentence": "じてんしゃ（　　）がっこうに きます。", "options": ["で", "に", "を", "と"], "correct": 0, "particle": "で", "explanation": "Đến trường bằng xe đạp: じてんしゃで.", "pdfSource": "8.pdf"}
]

interrogative_fill_list = [
  # 1-10: どこ, なに, だれ, いつ, なんじ (Trang 82 - Bảng nghi vấn từ)
  {"id": "if_01", "sentence": "（　　）に いくんですか。― こうこうに いきます。", "options": ["どこ", "なに", "だれ", "いつ"], "correct": 0, "interrogative": "どこ", "explanation": "Trả lời là địa điểm (こうこう: trường cấp 3) nên hỏi bằng「どこ」.", "pdfSource": "3.pdf"},
  {"id": "if_02", "sentence": "（　　）を はなすんですか。― えいごを はなします。", "options": ["なに", "どこ", "だれ", "いつ"], "correct": 0, "interrogative": "なに", "explanation": "Trả lời là ngôn ngữ (えいご: tiếng Anh) nên hỏi bằng「なに」.", "pdfSource": "3.pdf"},
  {"id": "if_03", "sentence": "（　　）と すしを たべるんですか。― ははと たべます。", "options": ["だれ", "どこ", "なに", "いつ"], "correct": 0, "interrogative": "だれ", "explanation": "Trả lời là người (はは: mẹ) nên hỏi bằng「だれ」.", "pdfSource": "3.pdf"},
  {"id": "if_04", "sentence": "（　　）だいがくに いくんですか。― 9がつ 4かに いきます。", "options": ["いつ", "どこ", "なに", "だれ"], "correct": 0, "interrogative": "いつ", "explanation": "Trả lời là ngày tháng (ngày 4/9) nên hỏi thời gian bằng「いつ」.", "pdfSource": "3.pdf"},
  {"id": "if_05", "sentence": "（　　）に いくんですか。― 3じに いきます。", "options": ["なんじ", "なに", "どこ", "いつ"], "correct": 0, "interrogative": "なんじ", "explanation": "Trả lời là giờ cụ thể (3じ: 3 giờ) đi với「に」nên dùng「なんじ」.", "pdfSource": "3.pdf"},
  {"id": "if_06", "sentence": "（　　）で だいがくに いくんですか。― でんしゃで いきます。", "options": ["なに", "どこ", "だれ", "いつ"], "correct": 0, "interrogative": "なに", "explanation": "Hỏi phương tiện đi lại bằng gì:「なにで」.", "pdfSource": "4.pdf"},
  {"id": "if_07", "sentence": "（　　）で ステーキを たべるんですか。― フォークとスプーンで たべます。", "options": ["なに", "どこ", "だれ", "いつ"], "correct": 0, "interrogative": "なに", "explanation": "Hỏi bằng dụng cụ gì:「なにで」.", "pdfSource": "4.pdf"},
  {"id": "if_08", "sentence": "（　　）で すしを たべるんですか。― レストランで たべます。", "options": ["どこ", "なに", "だれ", "いつ"], "correct": 0, "interrogative": "どこ", "explanation": "Trả lời nơi chốn hành động (レストラン: nhà hàng) nên dùng「どこで」.", "pdfSource": "4.pdf"},
  {"id": "if_09", "sentence": "（　　）しゅくだいを するんですか。― 30ぷんぐらい します。", "options": ["どのぐらい", "いつ", "なんじ", "どこ"], "correct": 0, "interrogative": "どのぐらい", "explanation": "Hỏi khoảng thời gian bao lâu dùng「どのくらい / どのぐらい」.", "pdfSource": "4.pdf"},
  {"id": "if_10", "sentence": "（　　）から どこまで いくんですか。― うちから がっこうまで いきます。", "options": ["どこ", "なに", "いつ", "だれ"], "correct": 0, "interrogative": "どこ", "explanation": "Hỏi xuất phát từ đâu:「どこから」.", "pdfSource": "2.pdf"},

  # 11-20: Q&A Thực tế bài 7-8
  {"id": "if_11", "sentence": "（　　）を ならうんですか。― りょうりを ならいます。", "options": ["なに", "どこ", "だれ", "いつ"], "correct": 0, "interrogative": "なに", "explanation": "Học cái gì (học nấu ăn): なにを ならうんですか.", "pdfSource": "7.pdf"},
  {"id": "if_12", "sentence": "（　　）を きくんですか。― おんがくを ききます。", "options": ["なに", "どこ", "だれ", "いつ"], "correct": 0, "interrogative": "なに", "explanation": "Nghe cái gì (nghe nhạc): なにを きくんですか.", "pdfSource": "7.pdf"},
  {"id": "if_13", "sentence": "（　　）を かうんですか。― はなと くだものを かいます。", "options": ["なに", "どこ", "だれ", "いつ"], "correct": 0, "interrogative": "なに", "explanation": "Mua cái gì: なにを かうんですか.", "pdfSource": "7.pdf"},
  {"id": "if_14", "sentence": "にちようび （　　）を するんですか。― サッカーを します。", "options": ["なに", "どこ", "だれ", "いつ"], "correct": 0, "interrogative": "なに", "explanation": "Chủ nhật bạn làm cái gì: なにを するんですか.", "pdfSource": "7.pdf"},
  {"id": "if_15", "sentence": "（　　）で えいがを みるんですか。― えいがかんで みます。", "options": ["どこ", "なに", "だれ", "いつ"], "correct": 0, "interrogative": "どこ", "explanation": "Xem phim ở đâu (tại rạp): どこで.", "pdfSource": "7.pdf"},
  {"id": "if_16", "sentence": "（　　）で コーヒーを のむんですか。― きっさてんで のみます。", "options": ["どこ", "なに", "だれ", "いつ"], "correct": 0, "interrogative": "どこ", "explanation": "Uống cà phê ở đâu: どこで.", "pdfSource": "7.pdf"},
  {"id": "if_17", "sentence": "（　　）で ばんごはんを たべるんですか。― うちで たべます。", "options": ["どこ", "なに", "だれ", "いつ"], "correct": 0, "interrogative": "どこ", "explanation": "Ăn cơm tối ở đâu: どこで.", "pdfSource": "8.pdf"},
  {"id": "if_18", "sentence": "きっさてんで （　　）を するんですか。― こいびとを まちます。", "options": ["なに", "どこ", "だれ", "いつ"], "correct": 0, "interrogative": "なに", "explanation": "Làm gì ở quán nước: なにを するんですか.", "pdfSource": "8.pdf"},
  {"id": "if_19", "sentence": "（　　）で ニャチャンへ いくんですか。― ひこうきで いきます。", "options": ["なに", "どこ", "だれ", "いつ"], "correct": 0, "interrogative": "なに", "explanation": "Đi Nha Trang bằng phương tiện gì: なにで.", "pdfSource": "8.pdf"},
  {"id": "if_20", "sentence": "（　　）で ごはんを たべるんですか。― はしで たべます。", "options": ["なに", "どこ", "だれ", "いつ"], "correct": 0, "interrogative": "なに", "explanation": "Ăn cơm bằng dụng cụ gì: なにで.", "pdfSource": "8.pdf"},

  # 21-30: だれと, だれが, どちら, いくら
  {"id": "if_21", "sentence": "（　　）と がっこうに くるんですか。― タンさんと きます。", "options": ["だれ", "どこ", "なに", "いつ"], "correct": 0, "interrogative": "だれ", "explanation": "Đến trường cùng ai: だれと.", "pdfSource": "9.pdf"},
  {"id": "if_22", "sentence": "がっこうで （　　）と にほんごを はなすんですか。― せんせいと はなします。", "options": ["だれ", "どこ", "なに", "いつ"], "correct": 0, "interrogative": "だれ", "explanation": "Nói tiếng Nhật với ai: だれと.", "pdfSource": "9.pdf"},
  {"id": "if_23", "sentence": "よく （　　）と えいがを みるんですか。― こいびとと みます。", "options": ["だれ", "どこ", "なに", "いつ"], "correct": 0, "interrogative": "だれ", "explanation": "Hay xem phim với ai: だれと.", "pdfSource": "9.pdf"},
  {"id": "if_24", "sentence": "この かさは （　　）のですか。― わたしのです。", "options": ["だれ", "どこ", "なに", "どれ"], "correct": 0, "interrogative": "だれ", "explanation": "Cây dù của ai: だれの.", "pdfSource": "JLPT N5"},
  {"id": "if_25", "sentence": "この りんごは （　　）ですか。― 100えんです。", "options": ["いくら", "いくつ", "どのくらい", "なんじ"], "correct": 0, "interrogative": "いくら", "explanation": "Hỏi giá tiền dùng「いくら」.", "pdfSource": "JLPT N5"},
  {"id": "if_26", "sentence": "みかんを （　　）かいましたか。― 3つ かいました。", "options": ["いくつ", "いくら", "どのくらい", "なに"], "correct": 0, "interrogative": "いくつ", "explanation": "Hỏi số lượng đồ vật nhỏ dùng「いくつ」.", "pdfSource": "JLPT N5"},
  {"id": "if_27", "sentence": "（　　）から （　　）まで サッカーを しますか。― 8じから 10じまでです。", "options": ["なんじ／なんじ", "いつ／いつ", "どこ／どこ", "なに／なに"], "correct": 0, "interrogative": "なんじ", "explanation": "Từ mấy giờ đến mấy giờ: なんじから なんじまで.", "pdfSource": "2.pdf"},
  {"id": "if_28", "sentence": "（　　）へ いくんですか。― コンビニへ いきます。", "options": ["どこ", "なに", "だれ", "いつ"], "correct": 0, "interrogative": "どこ", "explanation": "Đi về hướng nào/đâu: どこへ.", "pdfSource": "5.pdf"},
  {"id": "if_29", "sentence": "（　　）が きますか。― やまだせんせいが きます。", "options": ["だれ", "どこ", "なに", "いつ"], "correct": 0, "interrogative": "だれ", "explanation": "Ai đến vậy (hỏi chủ ngữ): だれが.", "pdfSource": "1.pdf"},
  {"id": "if_30", "sentence": "にほんの たべものは （　　）ですか。― おいしいです。", "options": ["どう", "なに", "どこ", "どれ"], "correct": 0, "interrogative": "どう", "explanation": "Hỏi cảm nhận thế nào: どうですか.", "pdfSource": "JLPT N5"},

  # 31-40: どんな, どちら, どうして, どの, いくつ
  {"id": "if_31", "sentence": "あした （　　）へ いきますか。― スーパーへ いきます。", "options": ["どこ", "なに", "だれ", "いつ"], "correct": 0, "interrogative": "どこ", "explanation": "Hỏi nơi đi: どこへ.", "pdfSource": "5.pdf"},
  {"id": "if_32", "sentence": "きょう （　　）を たべましたか。― ラーメンを たべました。", "options": ["なに", "どこ", "だれ", "いつ"], "correct": 0, "interrogative": "なに", "explanation": "Ăn cái gì: なにを.", "pdfSource": "6.pdf"},
  {"id": "if_33", "sentence": "（　　）して きのう がっこうを やすみましたか。― びょうきでしたから。", "options": ["どう", "なに", "なぜ", "いつ"], "correct": 0, "interrogative": "どうして", "explanation": "Hỏi lý do tại sao: どうして (trả lời 〜から).", "pdfSource": "JLPT N5"},
  {"id": "if_34", "sentence": "（　　）まちに すんでいますか。― しずかな まちです。", "options": ["どんな", "どう", "どれ", "どの"], "correct": 0, "interrogative": "どんな", "explanation": "Hỏi tính chất của danh từ (thành phố như thế nào): どんな + N.", "pdfSource": "JLPT N5"},
  {"id": "if_35", "sentence": "コーヒーと おちゃと （　　）が すきですか。", "options": ["どちら", "どれ", "なに", "どこ"], "correct": 0, "interrogative": "どちら", "explanation": "So sánh lựa chọn giữa 2 đối tượng dùng「どちら」.", "pdfSource": "JLPT N5"},
  {"id": "if_36", "sentence": "あなたの かさは （　　）ですか。― あの あおい かさです。", "options": ["どれ", "どこ", "なに", "どちら"], "correct": 0, "interrogative": "どれ", "explanation": "Chọn 1 trong nhiều cái: どれ.", "pdfSource": "JLPT N5"},
  {"id": "if_37", "sentence": "たんじょうびは （　　）ですか。― 5がつ 10かです。", "options": ["いつ", "なんじ", "どこ", "なに"], "correct": 0, "interrogative": "いつ", "explanation": "Sinh nhật khi nào: いつ.", "pdfSource": "3.pdf"},
  {"id": "if_38", "sentence": "きょうしつに がくせいが （　　）いますか。― 10にん います。", "options": ["なんにん", "いくら", "いくつ", "どのくらい"], "correct": 0, "interrogative": "なんにん", "explanation": "Hỏi bao nhiêu người dùng「なんにん」.", "pdfSource": "JLPT N5"},
  {"id": "if_39", "sentence": "うちから えきまで （　　）かかりますか。― あるいて 10ぷん かかります。", "options": ["どのくらい", "いくら", "なんじ", "いつ"], "correct": 0, "interrogative": "どのくらい", "explanation": "Hỏi thời gian mất bao lâu: どのくらい.", "pdfSource": "4.pdf"},
  {"id": "if_40", "sentence": "しゅうまつ （　　）を しましたか。― えいがを みました。", "options": ["なに", "どこ", "だれ", "いつ"], "correct": 0, "interrogative": "なに", "explanation": "Đã làm gì cuối tuần: なにを しましたか.", "pdfSource": "7.pdf"},

  # 41-50: Nghi vấn từ nâng cao & Tổng hợp
  {"id": "if_41", "sentence": "（　　）で にほんごを べんきょうするんですか。― パソコンで します。", "options": ["なに", "どこ", "だれ", "いつ"], "correct": 0, "interrogative": "なに", "explanation": "Học bằng phương tiện gì: なにで.", "pdfSource": "4.pdf"},
  {"id": "if_42", "sentence": "あの ひとは （　　）ですか。― たなかさんです。", "options": ["だれ", "なに", "どこ", "どれ"], "correct": 0, "interrogative": "だれ", "explanation": "Người kia là ai: だれ.", "pdfSource": "3.pdf"},
  {"id": "if_43", "sentence": "あのかたは （　　）ですか。― やまだせんせいです。", "options": ["どなた", "だれ", "なに", "どれ"], "correct": 0, "interrogative": "どなた", "explanation": "Kính ngữ của だれ khi đi với あのかた là「どなた」.", "pdfSource": "1.pdf"},
  {"id": "if_44", "sentence": "まいあさ （　　）に おきますか。― 6じはんに おきます。", "options": ["なんじ", "いつ", "なに", "どこ"], "correct": 0, "interrogative": "なんじ", "explanation": "Mấy giờ dậy: なんじに.", "pdfSource": "2.pdf"},
  {"id": "if_45", "sentence": "（　　）ほんを よみましたか。― おもしろい ほんです。", "options": ["どんな", "どう", "どれ", "なに"], "correct": 0, "interrogative": "どんな", "explanation": "Đọc loại sách như thế nào: どんな ほん.", "pdfSource": "JLPT N5"},
  {"id": "if_46", "sentence": "（　　）に いきますか。― ぎんこうに いきます。", "options": ["どこ", "なに", "だれ", "いつ"], "correct": 0, "interrogative": "どこ", "explanation": "Đi đâu vậy: どこに.", "pdfSource": "6.pdf"},
  {"id": "if_47", "sentence": "（　　）と テニスを しますか。― かいしゃの ひとと します。", "options": ["だれ", "どこ", "なに", "いつ"], "correct": 0, "interrogative": "だれ", "explanation": "Chơi tennis với ai: だれと.", "pdfSource": "9.pdf"},
  {"id": "if_48", "sentence": "国は （　　）ですか。― ベトナムです。", "options": ["どちら", "どれ", "だれ", "なん"], "correct": 0, "interrogative": "どちら", "explanation": "Hỏi xuất xứ/đất nước một cách lịch sự dùng「どちら / どこ」.", "pdfSource": "1.pdf"},
  {"id": "if_49", "sentence": "りんごが （　　）ありますか。― 4つ あります。", "options": ["いくつ", "いくら", "なんにん", "どのくらい"], "correct": 0, "interrogative": "いくつ", "explanation": "Đếm quả/đồ vật: いくつ.", "pdfSource": "JLPT N5"},
  {"id": "if_50", "sentence": "（　　）で がっこうに くるんですか。― バスで きます。", "options": ["なに", "どこ", "だれ", "いつ"], "correct": 0, "interrogative": "なに", "explanation": "Đến trường bằng gì: なにで.", "pdfSource": "8.pdf"}
]

sentence_translation_list = [
  # 1-10: Các mẫu câu cơ bản từ sách
  {
    "id": "st_01",
    "vietnamese": "Tôi đi đến trường học bằng xe buýt.",
    "options": [
      "わたしは バスで がっこうへ いきます。",
      "わたしは バスに がっこうを いきます。",
      "わたしは バスを がっこうで いきます。",
      "わたしは バスへ がっこうに いきます。"
    ],
    "correct": 0,
    "explanation": "Phương tiện di chuyển dùng「で」, hướng đi/đích đến dùng「へ / に」."
  },
  {
    "id": "st_02",
    "vietnamese": "Tôi ăn sushi cùng với gia đình tại nhà hàng.",
    "options": [
      "レストランで かぞくと すしを たべます。",
      "レストランに かぞくで すしに たべます。",
      "レストランへ かぞくを すしと たべます。",
      "レストランを かぞくに すしで たべます。"
    ],
    "correct": 0,
    "explanation": "Địa điểm hành động「で」, cùng ai「と」, tân ngữ món ăn「を」."
  },
  {
    "id": "st_03",
    "vietnamese": "Tôi thức dậy vào lúc 7 giờ mỗi sáng.",
    "options": [
      "まいあさ 7じに おきます。",
      "まいあさに 7じで おきます。",
      "まいあさを 7じへ おきます。",
      "まいあさで 7じを おきます。"
    ],
    "correct": 0,
    "explanation": "Thời gian chung (まいあさ) không dùng に, mốc giờ (7じ) dùng「に」."
  },
  {
    "id": "st_04",
    "vietnamese": "Tôi viết báo cáo bằng tiếng Anh bằng bút chì.",
    "options": [
      "えんぴつで えいごで レポートを かきます。",
      "えんぴつに えいごに レポートで かきます。",
      "えんぴつを えいごを レポートに かきます。",
      "えんぴつへ えいごへ レポートを かきます。"
    ],
    "correct": 0,
    "explanation": "Dụng cụ và ngôn ngữ đều dùng trợ từ「で」, tân ngữ báo cáo dùng「を」."
  },
  {
    "id": "st_05",
    "vietnamese": "Tôi đi từ nhà đến trường bằng cách đi bộ.",
    "options": [
      "うちから がっこうまで あるいて いきます。",
      "うちまで がっこうから あるいてで いきます。",
      "うちに がっこうへ あるきで いきます。",
      "うちで がっこうに あるいてを いきます。"
    ],
    "correct": 0,
    "explanation": "Từ ~ Đến:「から 〜 まで」. Đi bộ dùng「あるいて」, không có で."
  },
  {
    "id": "st_06",
    "vietnamese": "Bạn tôi cũng cùng đi đến công viên.",
    "options": [
      "ともだちも いっしょに こうえんへ いきます。",
      "ともだちとは いっしょで こうえんを いきます。",
      "ともだちに いっしょに こうえんで いきます。",
      "ともだちを いっしょへ こうえんに いきます。"
    ],
    "correct": 0,
    "explanation": "Sự đồng nhất (cũng) dùng「も」, hướng đến dùng「へ / に」."
  },
  {
    "id": "st_07",
    "vietnamese": "Không, tôi không viết nhật ký.",
    "options": [
      "いいえ、にっきは かきません。",
      "いいえ、にっきを かきません。",
      "いいえ、にっきで かきません。",
      "いいえ、にっきに かきません。"
    ],
    "correct": 0,
    "explanation": "Khi trả lời phủ định, người Nhật đổi tân ngữ を thành「は」để nhấn mạnh."
  },
  {
    "id": "st_08",
    "vietnamese": "Thầy Yamada đến Việt Nam.",
    "options": [
      "やまだせんせいは ベトナムへ きます。",
      "やまだせんせいに ベトナムで きます。",
      "やまだせんせいで ベトナムを きます。",
      "やまだせんせいを ベトナムに きます。"
    ],
    "correct": 0,
    "explanation": "Chủ đề「は」, đích đến「へ / に きます」."
  },
  {
    "id": "st_09",
    "vietnamese": "Tôi đi siêu thị một mình.",
    "options": [
      "ひとりで スーパーに いきます。",
      "ひとりと スーパーで いきます。",
      "ひとりに スーパーを いきます。",
      "ひとりで スーパーを いきます。"
    ],
    "correct": 0,
    "explanation": "Làm một mình dùng「ひとりで」, đích đến dùng「に」."
  },
  {
    "id": "st_10",
    "vietnamese": "Tôi uống cà phê cùng bạn ở quán nước.",
    "options": [
      "きっさてんで ともだちと コーヒーを のみます。",
      "きっさてんに ともだちで コーヒーに のみます。",
      "きっさてんへ ともだちを コーヒーで のみます。",
      "きっさてんを ともだちへ コーヒーと のみます。"
    ],
    "correct": 0,
    "explanation": "Nơi hành động「で」, cùng ai「と」, thức uống「を」."
  },

  # 11-20
  {
    "id": "st_11",
    "vietnamese": "Tôi học tiếng Nhật ở trường Đông Du.",
    "options": [
      "ドンズーがっこうで にほんごを ならいます。",
      "ドンズーがっこうに にほんごに ならいます。",
      "ドンズーがっこうへ にほんごで ならいます。",
      "ドンズーがっこうを にほんごへ ならいます。"
    ],
    "correct": 0,
    "explanation": "Học ở đâu dùng「で」, học môn gì dùng「を」."
  },
  {
    "id": "st_12",
    "vietnamese": "Tôi ăn thịt bằng dao và nĩa.",
    "options": [
      "ナイフと フォークで にくを たべます。",
      "ナイフで フォークに にくで たべます。",
      "ナイフを フォークと にくに たべます。",
      "ナイフに フォークを にくへ たべます。"
    ],
    "correct": 0,
    "explanation": "Nối hai dụng cụ「と」, bằng dụng cụ「で」, tân ngữ「を」."
  },
  {
    "id": "st_13",
    "vietnamese": "Tôi về quê cùng với người yêu vào ngày 4 tháng 9.",
    "options": [
      "9がつ 4かに こいびとと いなかへ かえります。",
      "9がつ 4かで こいびとに いなかを かえります。",
      "9がつ 4かを こいびとで いなかへ かえります。",
      "9がつ 4かへ こいびとを いなかに かえります。"
    ],
    "correct": 0,
    "explanation": "Thời điểm「に」, cùng người yêu「と」, về hướng quê「へ / に」."
  },
  {
    "id": "st_14",
    "vietnamese": "Tôi chơi bóng đá từ 8 giờ đến 10 giờ.",
    "options": [
      "8じから 10じまで サッカーを します。",
      "8じまで 10じから サッカーに します。",
      "8じに 10じで サッカーで します。",
      "8じで 10じに サッカーを します。"
    ],
    "correct": 0,
    "explanation": "Từ mấy giờ đến mấy giờ:「から 〜 まで」."
  },
  {
    "id": "st_15",
    "vietnamese": "Bạn đi Nha Trang bằng phương tiện gì?",
    "options": [
      "なにで ニャチャンへ いきますか。",
      "どこで ニャチャンに いきますか。",
      "だれで ニャチャンを いきますか。",
      "いつで ニャチャンへ いきますか。"
    ],
    "correct": 0,
    "explanation": "Bằng phương tiện gì:「なにで」."
  },
  {
    "id": "st_16",
    "vietnamese": "Bạn xem phim cùng ai ở rạp chiếu phim?",
    "options": [
      "えいがかんで だれと えいがを みますか。",
      "えいがかんに だれで えいがに みますか。",
      "えいがかんで なにを えいがと みますか。",
      "えいがかんに どこで えいがを みますか。"
    ],
    "correct": 0,
    "explanation": "Tại rạp「えいがかんで」, cùng ai「だれと」, xem phim「えいがを みます」."
  },
  {
    "id": "st_17",
    "vietnamese": "Tôi mua hoa và trái cây ở siêu thị.",
    "options": [
      "スーパーで はなと くだものを かいます。",
      "スーパーに はなで くだものに かいます。",
      "スーパーへ はなを くだものと かいます。",
      "スーパーを はなに くだもので かいます。"
    ],
    "correct": 0,
    "explanation": "Mua ở đâu「で」, hoa và trái cây「はなと くだもの」, tân ngữ「を」."
  },
  {
    "id": "st_18",
    "vietnamese": "Hôm qua tôi không đi đâu cả.",
    "options": [
      "きのう どこへも いきませんでした。",
      "きのう どこで いきませんでした。",
      "きのう どこを いきませんでした。",
      "きのう どこにを いきませんでした。"
    ],
    "correct": 0,
    "explanation": "Phủ định hoàn toàn điểm đến:「どこへも / どこも」."
  },
  {
    "id": "st_19",
    "vietnamese": "Tôi chơi tennis với người ở công ty tại công viên.",
    "options": [
      "こうえんで かいしゃの ひとと テニスを します。",
      "こうえんに かいしゃで ひとに テニスで します。",
      "こうえんへ かいしゃを ひとと テニスに します。",
      "こうえんで かいしゃに ひとで テニスを します。"
    ],
    "correct": 0,
    "explanation": "Ở công viên「で」, người của công ty「かいしゃの ひと」, cùng ai「と」."
  },
  {
    "id": "st_20",
    "vietnamese": "Bạn làm bài tập về nhà trong bao lâu?",
    "options": [
      "どのくらい しゅくだいを しますか。",
      "いつで しゅくだいに しますか。",
      "なんじを しゅくだいで しますか。",
      "どこから しゅくだいを しますか。"
    ],
    "correct": 0,
    "explanation": "Bao lâu:「どのくらい / どのぐらい」."
  },

  # 21-30
  {
    "id": "st_21",
    "vietnamese": "Anh Tân ăn cơm trưa ở nhà ăn.",
    "options": [
      "タンさんは しょくどうで ひるごはんを たべます。",
      "タンさんに しょくどうに ひるごはんで たべます。",
      "タンさんで しょくどうへ ひるごはんを たべます。",
      "タンさんを しょくどうで ひるごはんに たべます。"
    ],
    "correct": 0,
    "explanation": "Chủ đề「は」, nơi ăn「で」, tân ngữ「を」."
  },
  {
    "id": "st_22",
    "vietnamese": "Chị Lan xem tivi ở phòng.",
    "options": [
      "ランさんは へやで テレビを みます。",
      "ランさんに へやに テレビで みます。",
      "ランさんで へやへ テレビに みます。",
      "ランさんを へやで テレビを みます。"
    ],
    "correct": 0,
    "explanation": "Xem tivi trong phòng:「へやで テレビを みます」."
  },
  {
    "id": "st_23",
    "vietnamese": "Thầy Kim dạy tiếng Nhật cho học sinh.",
    "options": [
      "キムせんせいは がくせいに にほんごを おしえます。",
      "キムせんせいで がくせいで にほんごに おしえます。",
      "キムせんせいに がくせいを にほんごで おしえます。",
      "キムせんせいを がくせいに にほんごへ おしえます。"
    ],
    "correct": 0,
    "explanation": "Dạy cho ai「に」, dạy môn gì「を」."
  },
  {
    "id": "st_24",
    "vietnamese": "Tôi làm thêm ở cửa hàng tiện lợi vào buổi tối.",
    "options": [
      "よる コンビニで アルバイトを します。",
      "よるに コンビニに アルバイトで します。",
      "よるで コンビニへ アルバイトを します。",
      "よるを コンビニで アルバイトに します。"
    ],
    "correct": 0,
    "explanation": "Làm việc tại cửa hàng tiện lợi:「コンビニで」."
  },
  {
    "id": "st_25",
    "vietnamese": "Tôi đợi người yêu ở quán giải khát.",
    "options": [
      "きっさてんで こいびとを まちます。",
      "きっさてんに こいびとに まちます。",
      "きっさてんへ こいびとで まちます。",
      "きっさてんを こいびとへ まちます。"
    ],
    "correct": 0,
    "explanation": "Đợi ai ở đâu:「きっさてんで こいびとを まちます」."
  },
  {
    "id": "st_26",
    "vietnamese": "Bạn đi đến trường đại học vào lúc mấy giờ?",
    "options": [
      "なんじに だいがくへ いきますか。",
      "いつに だいがくで いきますか。",
      "どこに だいがくを いきますか。",
      "なにに だいがくへ いきますか。"
    ],
    "correct": 0,
    "explanation": "Mấy giờ:「なんじに」, đến trường đại học「だいがくへ / に」."
  },
  {
    "id": "st_27",
    "vietnamese": "Tôi đến trường bằng tàu điện.",
    "options": [
      "でんしゃで がっこうに きます。",
      "でんしゃに がっこうで きます。",
      "でんしゃを がっこうへ きます。",
      "でんしゃへ がっこうを きます。"
    ],
    "correct": 0,
    "explanation": "Đi bằng tàu:「でんしゃで」, đến trường「がっこうに きます」."
  },
  {
    "id": "st_28",
    "vietnamese": "Tôi ăn cơm tối ở nhà cùng gia đình.",
    "options": [
      "うちで かぞくと ばんごはんを たべます。",
      "うちに かぞくで ばんごはんに たべます。",
      "うちへ かぞくを ばんごはんで たべます。",
      "うちを かぞくに ばんごはんへ たべます。"
    ],
    "correct": 0,
    "explanation": "Ở nhà「うちで」, cùng gia đình「かぞくと」, ăn tối「ばんごはんを たべます」."
  },
  {
    "id": "st_29",
    "vietnamese": "Hôm qua bạn đã ăn cái gì vậy?",
    "options": [
      "きのう なにを たべましたか。",
      "きのう どこを たべましたか。",
      "きのう だれを たべましたか。",
      "きのう いつを たべましたか。"
    ],
    "correct": 0,
    "explanation": "Đã ăn gì:「なにを たべましたか」."
  },
  {
    "id": "st_30",
    "vietnamese": "Tôi không nói tiếng Nhật, tôi nói tiếng Anh.",
    "options": [
      "にほんごは はなしません。えいごを はなします。",
      "にほんごを はなしません。えいごは はなします。",
      "にほんごで はなしません。えいごに はなします。",
      "にほんごに はなしません。えいごで はなします。"
    ],
    "correct": 0,
    "explanation": "Nhấn mạnh tương phản:「にほんごは はなしません」."
  },

  # 31-40
  {
    "id": "st_31",
    "vietnamese": "Tôi quay trở về phòng của mình.",
    "options": [
      "へやに もどります。",
      "へやで もどります。",
      "へやを もどります。",
      "へやからもどります。"
    ],
    "correct": 0,
    "explanation": "Quay lại nơi nào (đích đến):「へやに もどります」."
  },
  {
    "id": "st_32",
    "vietnamese": "Tôi rửa mặt vào mỗi buổi sáng.",
    "options": [
      "まいあさ かおを あらいます。",
      "まいあさ かおで あらいます。",
      "まいあさ かおに あらいます。",
      "まいあさ かおへ あらいます。"
    ],
    "correct": 0,
    "explanation": "Rửa mặt (tân ngữ):「かおを あらいます」."
  },
  {
    "id": "st_33",
    "vietnamese": "Tôi viết thư cho người yêu.",
    "options": [
      "こいびとに てがみを かきます。",
      "こいびとで てがみで かきます。",
      "こいびとを てがみに かきます。",
      "こいびとへ てがみで かきます。"
    ],
    "correct": 0,
    "explanation": "Viết thư cho ai「に」, viết thư「てがみを かきます」."
  },
  {
    "id": "st_34",
    "vietnamese": "Bạn học tiếng Nhật bằng cái gì?",
    "options": [
      "なにで にほんごを べんきょうしますか。",
      "どこで にほんごに べんきょうしますか。",
      "だれで にほんごで べんきょうしますか。",
      "いつで にほんごを べんきょうしますか。"
    ],
    "correct": 0,
    "explanation": "Học bằng phương tiện/công cụ gì:「なにで」."
  },
  {
    "id": "st_35",
    "vietnamese": "Tôi học tiếng Nhật bằng máy tính.",
    "options": [
      "パソコンで にほんごを べんきょうします。",
      "パソコンに にほんごに べんきょうします。",
      "パソコンを にほんごで べんきょうします。",
      "パソコンへ にほんごを べんきょうします。"
    ],
    "correct": 0,
    "explanation": "Bằng máy tính (công cụ):「パソコンで」."
  },
  {
    "id": "st_36",
    "vietnamese": "Bạn đi Tokyo từ đâu?",
    "options": [
      "どこから とうきょうへ いきますか。",
      "どこまで とうきょうに いきますか。",
      "どこで とうきょうを いきますか。",
      "どこに とうきょうで いきますか。"
    ],
    "correct": 0,
    "explanation": "Từ đâu:「どこから」."
  },
  {
    "id": "st_37",
    "vietnamese": "Ngân hàng mở cửa từ 9 giờ đến 5 giờ.",
    "options": [
      "ぎんこうは 9じから 5じまでです。",
      "ぎんこうは 9じまで 5じからです。",
      "ぎんこうは 9じに 5じでです。",
      "ぎんこうは 9じで 5じにです。"
    ],
    "correct": 0,
    "explanation": "Từ mấy giờ đến mấy giờ:「9じから 5じまで」."
  },
  {
    "id": "st_38",
    "vietnamese": "Tôi cũng là sinh viên.",
    "options": [
      "わたしも だいがくせいです。",
      "わたしは だいがくせいもです。",
      "わたしが だいがくせいとです。",
      "わたしに だいがくせいでです。"
    ],
    "correct": 0,
    "explanation": "Tôi cũng:「わたしも」."
  },
  {
    "id": "st_39",
    "vietnamese": "Tôi nấu ăn cùng gia đình ở nhà vào cuối tuần.",
    "options": [
      "しゅうまつ うちで かぞくと りょうりを つくります。",
      "しゅうまつ うちに かぞくで りょうりに つくります。",
      "しゅうまつ うちへ かぞくを りょうりで つくります。",
      "しゅうまつ うちを かぞくに りょうりへ つくります。"
    ],
    "correct": 0,
    "explanation": "Ở nhà「で」, cùng gia đình「と」, nấu món ăn「りょうりを つくります」."
  },
  {
    "id": "st_40",
    "vietnamese": "Tôi nói tiếng Nhật với thầy cô và bạn bè.",
    "options": [
      "せんせいと ともだちと にほんごを はなします。",
      "せんせいで ともだちで にほんごに はなします。",
      "せんせいに ともだちに にほんごで はなします。",
      "せんせいを ともだちを にほんごへ はなします。"
    ],
    "correct": 0,
    "explanation": "Nói chuyện cùng ai:「〜と 〜と」."
  },

  # 41-50
  {
    "id": "st_41",
    "vietnamese": "Tôi uống trà và đọc báo vào buổi sáng.",
    "options": [
      "あさ おちゃを のんで しんぶんを よみます。",
      "あさ おちゃでのんで しんぶんに よみます。",
      "あさ おちゃにのんで しんぶんで よみます。",
      "あさ おちゃとのんで しんぶんへ よみます。"
    ],
    "correct": 0,
    "explanation": "Tân ngữ trà「おちゃを」, tân ngữ báo「しんぶんを」."
  },
  {
    "id": "st_42",
    "vietnamese": "Bạn uống cà phê ở đâu?",
    "options": [
      "どこで コーヒーを のみますか。",
      "どこに コーヒーに のみますか。",
      "どこへ コーヒーで のみますか。",
      "どこを コーヒーへ のみますか。"
    ],
    "correct": 0,
    "explanation": "Uống ở đâu:「どこで」."
  },
  {
    "id": "st_43",
    "vietnamese": "Bạn mua cái gì ở siêu thị?",
    "options": [
      "スーパーで なにを かいましたか。",
      "スーパーに なにに かいましたか。",
      "スーパーへ なにで かいましたか。",
      "スーパーを なにへ かいましたか。"
    ],
    "correct": 0,
    "explanation": "Mua ở đâu「で」, mua cái gì「なにを」."
  },
  {
    "id": "st_44",
    "vietnamese": "Tôi về nhà bằng xe máy.",
    "options": [
      "オートバイで うちへ かえります。",
      "オートバイに うちで かえります。",
      "オートバイを うちに かえります。",
      "オートバイへ うちを かえります。"
    ],
    "correct": 0,
    "explanation": "Bằng xe máy「オートバイで」, về nhà「うちへ かえります」."
  },
  {
    "id": "st_45",
    "vietnamese": "Tôi đến trường lúc 7 giờ sáng.",
    "options": [
      "あさ 7じに がっこうへ きます。",
      "あさに 7じで がっこうを きます。",
      "あさで 7じへ がっこうに きます。",
      "あさを 7じに がっこうで きます。"
    ],
    "correct": 0,
    "explanation": "Lúc 7 giờ「7じに」, đến trường「がっこうへ きます」."
  },
  {
    "id": "st_46",
    "vietnamese": "Tôi đá bóng cùng bạn bè ở sân vận động.",
    "options": [
      "スタジアムで ともだちと サッカーを します。",
      "スタジアムに ともだちで サッカーに します。",
      "スタジアムへ ともだちを サッカーで します。",
      "スタジアムを ともだちへ サッカーと します。"
    ],
    "correct": 0,
    "explanation": "Tại sân vận động「で」, cùng bạn「と」, đá bóng「サッカーを します」."
  },
  {
    "id": "st_47",
    "vietnamese": "Tôi thích phim hoạt hình Nhật Bản.",
    "options": [
      "わたしは にほんのアニメが すきです。",
      "わたしは にほんのアニメを すきです。",
      "わたしに にほんのアニメで すきです。",
      "わたしで にほんのアニメに すきです。"
    ],
    "correct": 0,
    "explanation": "Đối tượng thích với すき dùng trợ từ「が」."
  },
  {
    "id": "st_48",
    "vietnamese": "Trên bàn có quyển từ điển tiếng Nhật.",
    "options": [
      "つくえの うえに にほんごの じしょが あります。",
      "つくえの うえで にほんごの じしょを あります。",
      "つくえの うえへ にほんごの じしょに あります。",
      "つくえの うえを にほんごの じしょで あります。"
    ],
    "correct": 0,
    "explanation": "Tồn tại ở đâu dùng「〜に あります」, chủ ngữ vật dùng「が」."
  },
  {
    "id": "st_49",
    "vietnamese": "Tôi gọi điện thoại cho gia đình vào mỗi tối.",
    "options": [
      "まいばん かぞくに でんわを かけます。",
      "まいばんに かぞくで でんわに かけます。",
      "まいばんで かぞくへ でんわで かけます。",
      "まいばんを かぞくを でんわへ かけます。"
    ],
    "correct": 0,
    "explanation": "Gọi điện cho ai dùng「〜に でんわを かけます」."
  },
  {
    "id": "st_50",
    "vietnamese": "Hôm nay tôi đã không ăn gì cả.",
    "options": [
      "きょう なにも たべませんでした。",
      "きょう なにを たべませんでした。",
      "きょう なにに たべませんでした。",
      "きょう なにで たべませんでした。"
    ],
    "correct": 0,
    "explanation": "Phủ định hoàn toàn:「なにも たべませんでした」."
  }
]

error_correction_list = [
  # 1-10: Các lỗi sai trợ từ phổ biến
  {
    "id": "ec_01",
    "sentence": "わたしは バスに がっこうへ いきます。",
    "wrongParticle": "に",
    "correctParticle": "で",
    "correctedSentence": "わたしは バスで がっこうへ いきます。",
    "explanation": "Phương tiện di chuyển dùng trợ từ「で」 (バスで), không dùng「に」."
  },
  {
    "id": "ec_02",
    "sentence": "レストランに すしを たべます。",
    "wrongParticle": "に",
    "correctParticle": "で",
    "correctedSentence": "レストランで すしを たべます。",
    "explanation": "Địa điểm thực hiện hành động ăn sushi phải dùng「で」, không dùng「に」."
  },
  {
    "id": "ec_03",
    "sentence": "あした ともだちで えいがを みます。",
    "wrongParticle": "で",
    "correctParticle": "と",
    "correctedSentence": "あした ともだちと えいがを みます。",
    "explanation": "Cùng làm hành động với người khác phải dùng trợ từ「と」 (ともだちと), không dùng「で」."
  },
  {
    "id": "ec_04",
    "sentence": "まいあさ 7じで おきます。",
    "wrongParticle": "で",
    "correctParticle": "に",
    "correctedSentence": "まいあさ 7じに おきます。",
    "explanation": "Thời điểm cụ thể có con số phải đi với trợ từ「に」 (7じに), không dùng「で」."
  },
  {
    "id": "ec_05",
    "sentence": "きのう ひとりと スーパーへ いきました。",
    "wrongParticle": "と",
    "correctParticle": "で",
    "correctedSentence": "きのう ひとりで スーパーへ いきました。",
    "explanation": "Hành động một mình phải nói là「ひとりで」, không bao giờ dùng「ひとりと」."
  },
  {
    "id": "ec_06",
    "sentence": "えんぴつに てがみを かきます。",
    "wrongParticle": "に",
    "correctParticle": "で",
    "correctedSentence": "えんぴつで てがみを かきます。",
    "explanation": "Công cụ viết bằng bút chì dùng「で」 (えんぴつで), không dùng「に」."
  },
  {
    "id": "ec_07",
    "sentence": "わたしは にほんごを すきです。",
    "wrongParticle": "を",
    "correctParticle": "が",
    "correctedSentence": "わたしは にほんごが すきです。",
    "explanation": "Tính từ chỉ sở thích「すき」phải đi với trợ từ「が」, không dùng「を」."
  },
  {
    "id": "ec_08",
    "sentence": "うちから がっこうに あるいてで いきます。",
    "wrongParticle": "で",
    "correctParticle": "",
    "correctedSentence": "うちから がっこうへ あるいて いきます。",
    "explanation": "「あるいて」 (đi bộ) là thể て của động từ, bản thân nó đã là phương thức nên không thêm trợ từ「で」."
  },
  {
    "id": "ec_09",
    "sentence": "つくえの うえで ほんが あります。",
    "wrongParticle": "で",
    "correctParticle": "に",
    "correctedSentence": "つくえの うえに ほんが あります。",
    "explanation": "Vị trí tồn tại của đồ vật đi với「あります」phải dùng trợ từ「に」, không dùng「で」."
  },
  {
    "id": "ec_10",
    "sentence": "きのう なにを たべませんでした。",
    "wrongParticle": "を",
    "correctParticle": "も",
    "correctedSentence": "きのう なにも たべませんでした。",
    "explanation": "Phủ định hoàn toàn (không ăn gì cả) phải dùng「なにも」, không dùng「なにを」."
  },

  # 11-20
  {
    "id": "ec_11",
    "sentence": "ドンズーがっこうに にほんごを ならいます。",
    "wrongParticle": "に",
    "correctParticle": "で",
    "correctedSentence": "ドンズーがっこうで にほんごを ならいます。",
    "explanation": "Học tiếng Nhật là hành động diễn ra tại trường nên dùng「で」, không dùng「に」."
  },
  {
    "id": "ec_12",
    "sentence": "はしに ごはんを たべます。",
    "wrongParticle": "に",
    "correctParticle": "で",
    "correctedSentence": "はしで ごはんを たべます。",
    "explanation": "Dụng cụ ăn bằng đũa dùng「で」, không dùng「に」."
  },
  {
    "id": "ec_13",
    "sentence": "えいごに レポートを かきます。",
    "wrongParticle": "に",
    "correctParticle": "で",
    "correctedSentence": "えいごで レポートを かきます。",
    "explanation": "Viết báo cáo bằng tiếng Anh (ngôn ngữ) dùng「で」."
  },
  {
    "id": "ec_14",
    "sentence": "こいびとで いなかへ かえります。",
    "wrongParticle": "で",
    "correctParticle": "と",
    "correctedSentence": "こいびとと いなかへ かえります。",
    "explanation": "Về quê cùng người yêu dùng「と」, không dùng「で」."
  },
  {
    "id": "ec_15",
    "sentence": "ひこうきに ニャチャンへ いきます。",
    "wrongParticle": "に",
    "correctParticle": "で",
    "correctedSentence": "ひこうきで ニャチャンへ いきます。",
    "explanation": "Đi bằng máy bay dùng「で」, không dùng「に」."
  },
  {
    "id": "ec_16",
    "sentence": "きょうしつで がくせいが います。",
    "wrongParticle": "で",
    "correctParticle": "に",
    "correctedSentence": "きょうしつに がくせいが います。",
    "explanation": "Nơi có người hiện diện「います」dùng trợ từ「に」, không dùng「で」."
  },
  {
    "id": "ec_17",
    "sentence": "きのう どこを いきませんでした。",
    "wrongParticle": "を",
    "correctParticle": "へも",
    "correctedSentence": "きのう どこへも いきませんでした。",
    "explanation": "Không đi đâu cả dùng「どこへも / どこも」, không dùng「どこを」."
  },
  {
    "id": "ec_18",
    "sentence": "ともだちを でんわを かけます。",
    "wrongParticle": "を",
    "correctParticle": "に",
    "correctedSentence": "ともだちに でんわを かけます。",
    "explanation": "Gọi điện thoại cho ai dùng「〜に でんわを かけます」, không dùng 2 trợ từ を liên tiếp."
  },
  {
    "id": "ec_19",
    "sentence": "8じに 10じまで サッカーを します。",
    "wrongParticle": "に",
    "correctParticle": "から",
    "correctedSentence": "8じから 10じまで サッカーを します。",
    "explanation": "Khoảng thời gian từ ~ đến phải dùng cặp「から 〜 まで」."
  },
  {
    "id": "ec_20",
    "sentence": "コンビニに しごとを します。",
    "wrongParticle": "に",
    "correctParticle": "で",
    "correctedSentence": "コンビニで しごとを します。",
    "explanation": "Làm việc tại cửa hàng tiện lợi dùng「で」, không dùng「に」."
  },

  # 21-30
  {
    "id": "ec_21",
    "sentence": "えいがかんに えいがを みます。",
    "wrongParticle": "に",
    "correctParticle": "で",
    "correctedSentence": "えいがかんで えいがを みます。",
    "explanation": "Hành động xem phim tại rạp dùng「で」."
  },
  {
    "id": "ec_22",
    "sentence": "きっさてんに コーヒーを のみます。",
    "wrongParticle": "に",
    "correctParticle": "で",
    "correctedSentence": "きっさてんで コーヒーを のみます。",
    "explanation": "Uống nước tại quán dùng「で」."
  },
  {
    "id": "ec_23",
    "sentence": "うちへ ばんごはんを たべます。",
    "wrongParticle": "へ",
    "correctParticle": "で",
    "correctedSentence": "うちで ばんごはんを たべます。",
    "explanation": "Ăn cơm ở nhà dùng「で」, không dùng「へ」."
  },
  {
    "id": "ec_24",
    "sentence": "じてんしゃに がっこうに きます。",
    "wrongParticle": "に",
    "correctParticle": "で",
    "correctedSentence": "じてんしゃで がっこうに きます。",
    "explanation": "Đến trường bằng xe đạp dùng「で」."
  },
  {
    "id": "ec_25",
    "sentence": "「にほんごを はなしますか」「いいえ、にほんごに はなしません。」",
    "wrongParticle": "に",
    "correctParticle": "は",
    "correctedSentence": "いいえ、にほんごは はなしません。",
    "explanation": "Phủ định đối tượng chuyển thành「は」, không dùng「に」."
  },
  {
    "id": "ec_26",
    "sentence": "「テレビで みますか」「いいえ、テレビを みません。」",
    "wrongParticle": "を",
    "correctParticle": "では",
    "correctedSentence": "いいえ、テレビでは みません。",
    "explanation": "Phủ định phương tiện đổi で thành「では」."
  },
  {
    "id": "ec_27",
    "sentence": "こうえんへ かいしゃの ひとで テニスを します。",
    "wrongParticle": "で",
    "correctParticle": "と",
    "correctedSentence": "こうえんで かいしゃの ひとと テニスを します。",
    "explanation": "Chơi cùng ai dùng「と」, tại công viên dùng「で」."
  },
  {
    "id": "ec_28",
    "sentence": "わたしは くるまを ほしいです。",
    "wrongParticle": "を",
    "correctParticle": "が",
    "correctedSentence": "わたしは くるまが ほしいです。",
    "explanation": "Muốn có cái gì dùng「〜が ほしいです」, không dùng「を」."
  },
  {
    "id": "ec_29",
    "sentence": "あめを ふります。",
    "wrongParticle": "を",
    "correctParticle": "が",
    "correctedSentence": "あめが ふります。",
    "explanation": "Hiện tượng tự nhiên trời mưa dùng trợ từ「が」, không dùng「を」."
  },
  {
    "id": "ec_30",
    "sentence": "じかんを あります。",
    "wrongParticle": "を",
    "correctParticle": "が",
    "correctedSentence": "じかんが あります。",
    "explanation": "Có thời gian đi với あります dùng「が」."
  },

  # 31-40
  {
    "id": "ec_31",
    "sentence": "かいしゃで いきます。",
    "wrongParticle": "で",
    "correctParticle": "に",
    "correctedSentence": "かいしゃに いきます。",
    "explanation": "Đi đến công ty (đích đến) dùng「に / へ」, không dùng「で」."
  },
  {
    "id": "ec_32",
    "sentence": "へやで もどります。",
    "wrongParticle": "で",
    "correctParticle": "に",
    "correctedSentence": "へやに もどります。",
    "explanation": "Quay lại phòng (đích đến) dùng「に / へ」."
  },
  {
    "id": "ec_33",
    "sentence": "かおに あらいます。",
    "wrongParticle": "に",
    "correctParticle": "を",
    "correctedSentence": "かおを あらいます。",
    "explanation": "Rửa mặt (tân ngữ) dùng「を」."
  },
  {
    "id": "ec_34",
    "sentence": "おんがくに ききます。",
    "wrongParticle": "に",
    "correctParticle": "を",
    "correctedSentence": "おんがくを ききます。",
    "explanation": "Nghe nhạc (tân ngữ) dùng「を」."
  },
  {
    "id": "ec_35",
    "sentence": "しんぶんで よみます。",
    "wrongParticle": "で",
    "correctParticle": "を",
    "correctedSentence": "しんぶんを よみます。",
    "explanation": "Đọc báo (tân ngữ) dùng「を」."
  },
  {
    "id": "ec_36",
    "sentence": "おちゃに のみます。",
    "wrongParticle": "に",
    "correctParticle": "を",
    "correctedSentence": "おちゃを のみます。",
    "explanation": "Uống trà (tân ngữ) dùng「を」."
  },
  {
    "id": "ec_37",
    "sentence": "りょうりに つくります。",
    "wrongParticle": "に",
    "correctParticle": "を",
    "correctedSentence": "りょうりを つくります。",
    "explanation": "Nấu ăn (tân ngữ) dùng「を」."
  },
  {
    "id": "ec_38",
    "sentence": "しゅくだいに します。",
    "wrongParticle": "に",
    "correctParticle": "を",
    "correctedSentence": "しゅくだいを します。",
    "explanation": "Làm bài tập (tân ngữ) dùng「を」."
  },
  {
    "id": "ec_39",
    "sentence": "はなで くだものを かいます。",
    "wrongParticle": "で",
    "correctParticle": "と",
    "correctedSentence": "はなと くだものを かいます。",
    "explanation": "Nối hai danh từ hoa VÀ trái cây dùng「と」."
  },
  {
    "id": "ec_40",
    "sentence": "きっさてんで こいびとで まちます。",
    "wrongParticle": "で",
    "correctParticle": "を",
    "correctedSentence": "きっさてんで こいびとを まちます。",
    "explanation": "Đợi người yêu (tân ngữ người) dùng「を」."
  },

  # 41-50
  {
    "id": "ec_41",
    "sentence": "オートバイに がっこうに きます。",
    "wrongParticle": "に",
    "correctParticle": "で",
    "correctedSentence": "オートバイで がっこうに きます。",
    "explanation": "Đến trường bằng xe máy dùng「で」."
  },
  {
    "id": "ec_42",
    "sentence": "ナイフに フォークで にくを たべます。",
    "wrongParticle": "に",
    "correctParticle": "と",
    "correctedSentence": "ナイフと フォークで にくを たべます。",
    "explanation": "Dao VÀ nĩa dùng「と」."
  },
  {
    "id": "ec_43",
    "sentence": "スプーンに スープを のみます。",
    "wrongParticle": "に",
    "correctParticle": "で",
    "correctedSentence": "スプーンで スープを のみます。",
    "explanation": "Uống súp bằng thìa dùng「で」."
  },
  {
    "id": "ec_44",
    "sentence": "タンさんと がっこうに きます。",
    "wrongParticle": "",
    "correctParticle": "",
    "correctedSentence": "タンさんと がっこうに きます。",
    "explanation": "Câu này hoàn toàn chính xác: Đến trường cùng bạn Tân."
  },
  {
    "id": "ec_45",
    "sentence": "まいばん 11じで ねます。",
    "wrongParticle": "で",
    "correctParticle": "に",
    "correctedSentence": "まいばん 11じに ねます。",
    "explanation": "Ngủ lúc 11 giờ dùng「に」."
  },
  {
    "id": "ec_46",
    "sentence": "にちようびで サッカーを します。",
    "wrongParticle": "で",
    "correctParticle": "に",
    "correctedSentence": "にちようびに サッカーを します。",
    "explanation": "Ngày trong tuần dùng「に」 (にちようびに)."
  },
  {
    "id": "ec_47",
    "sentence": "とうきょうまで おおさかから しんかんせんで いきます。",
    "wrongParticle": "",
    "correctParticle": "",
    "correctedSentence": "とうきょうから おおさかまで しんかんせんで いきます。",
    "explanation": "Thứ tự hợp lý từ Tokyo đến Osaka: とうきょうから おおさかまで."
  },
  {
    "id": "ec_48",
    "sentence": "きのう わたしは パンに たまごを たべました。",
    "wrongParticle": "に",
    "correctParticle": "と",
    "correctedSentence": "きのう わたしは パンと たまごを たべました。",
    "explanation": "Ăn bánh mì VÀ trứng dùng「と」."
  },
  {
    "id": "ec_49",
    "sentence": "わたしは えいごを わかります。",
    "wrongParticle": "を",
    "correctParticle": "が",
    "correctedSentence": "わたしは えいごが わかります。",
    "explanation": "Động từ năng lực/hiểu biết「わかります」dùng「が」, không dùng「を」."
  },
  {
    "id": "ec_50",
    "sentence": "あした がっこうで くるんですか。",
    "wrongParticle": "で",
    "correctParticle": "に",
    "correctedSentence": "あした がっこうに くるんですか。",
    "explanation": "Đến trường học (đích đến) dùng「に / へ」, không dùng「で」."
  }
]

# Read existing template
with open(r"d:\CODE\Random\Jp-Vocabulary\scratch\build_grammar_data_py.py", "r", encoding="utf-8") as f:
    template = f.read().split("exercises: {")[0]

full_code = template + "exercises: {\n"
full_code += "    particle_fill: " + json.dumps(particle_fill_list, ensure_ascii=False, indent=6) + ",\n\n"
full_code += "    interrogative_fill: " + json.dumps(interrogative_fill_list, ensure_ascii=False, indent=6) + ",\n\n"
full_code += "    sentence_translation: " + json.dumps(sentence_translation_list, ensure_ascii=False, indent=6) + ",\n\n"
full_code += "    error_correction: " + json.dumps(error_correction_list, ensure_ascii=False, indent=6) + "\n"
full_code += "  }\n};\n"

with open(r"d:\CODE\Random\Jp-Vocabulary\js\grammar_data.js", "w", encoding="utf-8") as out:
    out.write(full_code)

print("Successfully wrote js/grammar_data.js with 200 questions across 4 categories!")
