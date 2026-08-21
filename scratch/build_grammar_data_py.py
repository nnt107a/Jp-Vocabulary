import json
import re

# We will generate js/grammar_data.js with complete book data + 50 questions per exercise type (total 200 questions).

code = '''// Japanese Grammar Data (Trợ từ & Nghi vấn từ - Giáo trình Đông Du Sơ Cấp 1 & JLPT N5)
// Tích hợp từ 9 tài liệu gốc (public/Grammar/1.pdf -> 9.pdf) kèm mở rộng chuẩn ngữ pháp N5.

const GRAMMAR_DATA = {
  // ==========================================
  // PHẦN A: BẢNG TRA CỨU TRỢ TỪ (助詞 - Joshi)
  // ==========================================
  particles: [
    {
      id: "part_ni",
      particle: "に",
      romaji: "ni",
      name: "Trợ từ chỉ Nơi tới, Thời điểm, Mục đích, Đối tượng",
      color: "#38bdf8",
      pdfSource: ["1.pdf", "2.pdf", "6.pdf"],
      usages: [
        {
          label: "1. Nơi tới / Đích đến của hành động di chuyển (いく / くる / かえる / もどる)",
          formula: "Địa điểm + に + いく / くる / かえる / もどる",
          explanation: "Chỉ điểm đến cụ thể mà người hoặc vật hướng tới và kết thúc hành động tại đó.",
          examples: [
            { jp: "かいしゃに いきます。", vn: "Tôi đi đến công ty.", highlight: "に" },
            { jp: "がっこうに きます。", vn: "Tôi đến trường học.", highlight: "に" },
            { jp: "うちに かえります。", vn: "Tôi về nhà.", highlight: "に" },
            { jp: "へやに もどります。", vn: "Tôi quay lại phòng.", highlight: "に" },
            { jp: "ぎんこうに いきます。", vn: "Tôi đi ngân hàng.", highlight: "に" }
          ]
        },
        {
          label: "2. Thời điểm xác định xảy ra hành động (có con số cụ thể)",
          formula: "Thời gian có số + に + Vます",
          explanation: "Dùng sau mốc thời gian có con số (giờ, ngày, tháng, năm, thứ). Không dùng với: きょう, あした, まいにち, こんしゅう...",
          examples: [
            { jp: "7じに がっこうに いきます。", vn: "Tôi đi học lúc 7 giờ.", highlight: "に" },
            { jp: "9がつ 4かに だいがくに いきます。", vn: "Tôi đến trường đại học vào ngày 4 tháng 9.", highlight: "に" },
            { jp: "にちようびに テニスを します。", vn: "Tôi chơi tennis vào chủ nhật.", highlight: "に" }
          ]
        },
        {
          label: "3. Nơi tồn tại của người / vật (có / ở)",
          formula: "Địa điểm + に + あります / います",
          explanation: "Chỉ vị trí tồn tại cố định của đồ vật (あります) hoặc người/động vật (います).",
          examples: [
            { jp: "きょうしつに せんせいが います。", vn: "Trong lớp học có giáo viên.", highlight: "に" },
            { jp: "つくえの うえに ほんが あります。", vn: "Trên bàn có quyển sách.", highlight: "に" }
          ]
        },
        {
          label: "4. Đối tượng tiếp nhận hành động (cho, tặng, gọi điện, gặp)",
          formula: "Người + に + あいます / でんわをかけます / あげます",
          explanation: "Chỉ đối tượng mà hành động hướng tới.",
          examples: [
            { jp: "ともだちに でんわを かけます。", vn: "Tôi gọi điện thoại cho bạn.", highlight: "に" },
            { jp: "せんせいに あいます。", vn: "Tôi gặp thầy cô giáo.", highlight: "に" }
          ]
        }
      ]
    },
    {
      id: "part_he",
      particle: "へ",
      reading: "え (e)",
      romaji: "e",
      name: "Trợ từ chỉ Phương hướng chuyển động",
      color: "#818cf8",
      pdfSource: ["1.pdf", "5.pdf"],
      usages: [
        {
          label: "1. Nơi hướng về / Phương hướng di chuyển",
          formula: "Địa điểm + へ (đọc là e) + いく / くる / かえる / もどる",
          explanation: "Nhấn mạnh về hướng di chuyển (hướng về phía...). Trong văn viết và giao tiếp hiện đại có thể dùng thay thế cho に khi chỉ điểm đến.",
          examples: [
            { jp: "こうえんへ いきます。", vn: "Tôi đi về phía công viên.", highlight: "へ" },
            { jp: "コンビニへ いきます。", vn: "Tôi đi cửa hàng tiện lợi.", highlight: "へ" },
            { jp: "スーパーへ いきます。", vn: "Tôi đi siêu thị.", highlight: "へ" },
            { jp: "ナムさんは としょかんへ いきます。", vn: "Anh Nam đi thư viện.", highlight: "へ" },
            { jp: "やまだせんせいは ベトナムへ きます。", vn: "Thầy Yamada đến Việt Nam.", highlight: "へ" },
            { jp: "アミットさんは くにへ かえります。", vn: "Anh Amit về nước.", highlight: "へ" }
          ]
        }
      ]
    },
    {
      id: "part_wo",
      particle: "を",
      reading: "お (o)",
      romaji: "o",
      name: "Trợ từ chỉ Đối tượng tác động trực tiếp (Tân ngữ)",
      color: "#ec4899",
      pdfSource: ["1.pdf", "6.pdf", "7.pdf"],
      usages: [
        {
          label: "1. Đối tượng tác động trực tiếp của ngoại động từ",
          formula: "Danh từ (Vật / Việc) + を + Tha động từ (Vます)",
          explanation: "Biểu thị tân ngữ trực tiếp chịu sự tác động của hành động (ăn cơm, uống nước, xem phim, học tiếng Nhật...).",
          examples: [
            { jp: "にほんごを ならいます。", vn: "Tôi học tiếng Nhật.", highlight: "を" },
            { jp: "かおを あらいます。", vn: "Tôi rửa mặt.", highlight: "を" },
            { jp: "てがみを かきます。", vn: "Tôi viết thư.", highlight: "を" },
            { jp: "おんがくを ききます。", vn: "Tôi nghe nhạc.", highlight: "を" },
            { jp: "しんぶんを よみます。", vn: "Tôi đọc báo.", highlight: "を" },
            { jp: "おちゃを のみます。", vn: "Tôi uống trà.", highlight: "を" },
            { jp: "りょうりを つくります。", vn: "Tôi nấu ăn.", highlight: "を" },
            { jp: "ごはんを たべます。", vn: "Tôi ăn cơm.", highlight: "を" },
            { jp: "テレビを みます。", vn: "Tôi xem tivi.", highlight: "を" },
            { jp: "しゅくだいを します。", vn: "Tôi làm bài tập về nhà.", highlight: "を" }
          ]
        },
        {
          label: "2. Chuyển thành 「は」 khi phủ định hoặc đưa lên làm chủ đề tương phản",
          formula: "Danh từ + は + Phủ định (Vません)",
          explanation: "Khi trả lời phủ định, người Nhật thường đổi tân ngữ を thành は để nhấn mạnh sự phủ định/tương phản.",
          examples: [
            { jp: "いいえ、にほんごは はなしません。", vn: "Không, tiếng Nhật thì tôi không nói.", highlight: "は" },
            { jp: "いいえ、にっきは かきません。", vn: "Không, nhật ký thì tôi không viết.", highlight: "は" },
            { jp: "いいえ、おさけは のみません。", vn: "Không, rượu thì tôi không uống.", highlight: "は" }
          ]
        }
      ]
    },
    {
      id: "part_de",
      particle: "で",
      romaji: "de",
      name: "Trợ từ chỉ Địa điểm xảy ra hành động, Phương tiện, Công cụ, Nguyên liệu",
      color: "#10b981",
      pdfSource: ["2.pdf", "7.pdf", "8.pdf"],
      usages: [
        {
          label: "1. Địa điểm nơi hành động diễn ra",
          formula: "Địa điểm + で + Hành động (Vます)",
          explanation: "Chỉ nơi chốn mà tại đó một hành động đang được thực hiện (học ở trường, ăn ở nhà hàng, làm việc tại công ty...).",
          examples: [
            { jp: "ドンズーがっこうで にほんごを ならいます。", vn: "Tôi học tiếng Nhật ở trường Đông Du.", highlight: "で" },
            { jp: "しょくどうで ひるごはんを たべます。", vn: "Tôi ăn cơm trưa ở nhà ăn.", highlight: "で" },
            { jp: "コンビニで しごとを します。", vn: "Tôi làm việc ở cửa hàng tiện lợi.", highlight: "で" },
            { jp: "えいがかんで えいがを みます。", vn: "Tôi xem phim ở rạp chiếu phim.", highlight: "で" },
            { jp: "きっさてんで コーヒーを のみます。", vn: "Tôi uống cà phê ở quán giải khát.", highlight: "で" },
            { jp: "うちで ばんごはんを たべます。", vn: "Tôi ăn cơm tối ở nhà.", highlight: "で" }
          ]
        },
        {
          label: "2. Phương tiện di chuyển, giao thông",
          formula: "Phương tiện + で + いく / くる / かえる",
          explanation: "Chỉ phương tiện dùng để đi lại (bằng xe đạp, xe buýt, máy bay, tàu điện...). *Lưu ý: Đi bộ dùng「あるいて」, không dùng「で」.",
          examples: [
            { jp: "じてんしゃで がっこうに きます。", vn: "Tôi đến trường bằng xe đạp.", highlight: "で" },
            { jp: "バスで がっこうに きます。", vn: "Tôi đến trường bằng xe buýt.", highlight: "で" },
            { jp: "オートバイで がっこうに きます。", vn: "Tôi đến trường bằng xe máy.", highlight: "で" },
            { jp: "ひこうきで ニャチャンへ いきます。", vn: "Tôi đi Nha Trang bằng máy bay.", highlight: "で" },
            { jp: "でんしゃで だいがくに いきます。", vn: "Tôi đi đến trường đại học bằng tàu điện.", highlight: "で" }
          ]
        },
        {
          label: "3. Công cụ, dụng cụ, ngôn ngữ, phương thức",
          formula: "Công cụ / Ngôn ngữ + で + Vます",
          explanation: "Chỉ công cụ hoặc ngôn ngữ dùng để thực hiện hành động (bằng bút chì, bằng đũa, bằng tiếng Nhật, bằng máy tính...).",
          examples: [
            { jp: "えんぴつで にほんごを かきます。", vn: "Tôi viết tiếng Nhật bằng bút chì.", highlight: "で" },
            { jp: "えいごで レポートを かきます。", vn: "Tôi viết báo cáo bằng tiếng Anh.", highlight: "で" },
            { jp: "はしと スプーンで ごはんを たべます。", vn: "Tôi ăn cơm bằng đũa và thìa.", highlight: "で" },
            { jp: "ナイフと フォークで にくを たべます。", vn: "Tôi ăn thịt bằng dao và nĩa.", highlight: "で" },
            { jp: "パソコンで べんきょうします。", vn: "Tôi học bằng máy vi tính.", highlight: "で" }
          ]
        }
      ]
    },
    {
      id: "part_to",
      particle: "と",
      romaji: "to",
      name: "Trợ từ chỉ Cùng với ai, Và (Liệt kê danh từ)",
      color: "#f59e0b",
      pdfSource: ["2.pdf", "8.pdf", "9.pdf"],
      usages: [
        {
          label: "1. Cùng làm việc gì đó với ai (Đối tượng đồng hành)",
          formula: "Người + と + (いっしょに) + Vます",
          explanation: "Chỉ người hoặc động vật cùng thực hiện hành động với mình. *Lưu ý: Làm một mình dùng「ひとりで」, KHÔNG dùng「ひとりと」.",
          examples: [
            { jp: "かぞくと すしを たべます。", vn: "Tôi ăn sushi cùng với gia đình.", highlight: "と" },
            { jp: "こいびとと いなかへ かえります。", vn: "Tôi về quê cùng với người yêu.", highlight: "と" },
            { jp: "ともだちと サッカーを します。", vn: "Tôi đá bóng cùng với bạn.", highlight: "と" },
            { jp: "せんせいと ともだちと にほんごを はなします。", vn: "Tôi nói tiếng Nhật với thầy cô và bạn bè.", highlight: "と" },
            { jp: "ひとりで スーパーに いきます。", vn: "Tôi đi siêu thị một mình. (Không dùng と)", highlight: "ひとりで" }
          ]
        },
        {
          label: "2. Liệt kê toàn bộ các danh từ (Và)",
          formula: "Danh từ 1 + と + Danh từ 2",
          explanation: "Dùng để nối các danh từ mang nghĩa 'và', liệt kê đầy đủ tất cả các đối tượng.",
          examples: [
            { jp: "はなと くだものを かいます。", vn: "Tôi mua hoa và trái cây.", highlight: "と" },
            { jp: "フォークと スプーンで たべます。", vn: "Tôi ăn bằng nĩa và thìa.", highlight: "と" },
            { jp: "りんごと みかんを たべました。", vn: "Tôi đã ăn táo và quýt.", highlight: "と" }
          ]
        }
      ]
    },
    {
      id: "part_mo",
      particle: "も",
      romaji: "mo",
      name: "Trợ từ chỉ Sự tương đồng (Cũng / Cả...)",
      color: "#a855f7",
      pdfSource: ["2.pdf"],
      usages: [
        {
          label: "1. Nhấn mạnh sự tương đồng (Cũng)",
          formula: "Danh từ + も + Vます / です",
          explanation: "Thay thế cho trợ từ は, が, を khi sự việc/đặc điểm tương tự như điều đã nêu trước đó.",
          examples: [
            { jp: "ともだちも いっしょに いきます。", vn: "Bạn tôi cũng cùng đi.", highlight: "も" },
            { jp: "わたしも ベトナムじんです。", vn: "Tôi cũng là người Việt Nam.", highlight: "も" },
            { jp: "これも おいしいです。", vn: "Cái này cũng ngon.", highlight: "も" }
          ]
        },
        {
          label: "2. Phủ định hoàn toàn (Cũng không...)",
          formula: "Từ để hỏi + も + V phủ định (ません)",
          explanation: "Đi với từ để hỏi và vị ngữ phủ định để biểu thị phủ định hoàn toàn: どこも (đâu cũng không), なにも (cái gì cũng không), だれも (ai cũng không).",
          examples: [
            { jp: "どこも いきません。", vn: "Tôi không đi đâu cả.", highlight: "も" },
            { jp: "なにも たべませんでした。", vn: "Tôi đã không ăn gì cả.", highlight: "も" },
            { jp: "だれも いません。", vn: "Không có ai cả.", highlight: "も" }
          ]
        }
      ]
    },
    {
      id: "part_kara_made",
      particle: "から 〜 まで",
      romaji: "kara ~ made",
      name: "Trợ từ Từ ~ Đến (Nơi chốn & Thời gian)",
      color: "#06b6d4",
      pdfSource: ["2.pdf"],
      usages: [
        {
          label: "1. Phạm vi nơi chốn: Từ đâu đến đâu",
          formula: "Nơi chốn A + から + Nơi chốn B + まで + いく / くる",
          explanation: "Chỉ điểm xuất phát (から) và điểm kết thúc (まで) của hành trình di chuyển.",
          examples: [
            { jp: "うちから がっこうまで いきます。", vn: "Tôi đi từ nhà đến trường.", highlight: "から" },
            { jp: "とうきょうから おおさかまで しんかんせんで いきます。", vn: "Tôi đi từ Tokyo đến Osaka bằng Shinkansen.", highlight: "まで" }
          ]
        },
        {
          label: "2. Phạm vi thời gian: Từ mấy giờ đến mấy giờ",
          formula: "Thời gian A + から + Thời gian B + まで + Vます",
          explanation: "Chỉ mốc bắt đầu (から) và mốc kết thúc (まで) của một khoảng thời gian.",
          examples: [
            { jp: "8じから 10じまで サッカーを します。", vn: "Tôi đá bóng từ 8 giờ đến 10 giờ.", highlight: "から" },
            { jp: "ぎんこうは 9じから 5じまでです。", vn: "Ngân hàng mở cửa từ 9 giờ đến 5 giờ.", highlight: "まで" }
          ]
        }
      ]
    },
    {
      id: "part_wa",
      particle: "は",
      reading: "わ (wa)",
      romaji: "wa",
      name: "Trợ từ Chủ đề & Tương phản",
      color: "#f43f5e",
      pdfSource: ["1.pdf", "5.pdf"],
      usages: [
        {
          label: "1. Đánh dấu chủ đề chính của câu (Thì, là)",
          formula: "Chủ đề (Danh từ) + は + Thông tin thuyết minh",
          explanation: "Đưa một sự vật/người lên làm chủ đề để giải thích hoặc cung cấp thông tin.",
          examples: [
            { jp: "わたしは がくせいです。", vn: "Tôi là học sinh.", highlight: "は" },
            { jp: "ナムさんは としょかんへ いきます。", vn: "Anh Nam thì đi đến thư viện.", highlight: "は" },
            { jp: "やまかせんせいは ベトナムへ きます。", vn: "Thầy Yamada thì đến Việt Nam.", highlight: "は" }
          ]
        },
        {
          label: "2. Biểu thị sự tương phản / nhấn mạnh phủ định",
          formula: "Danh từ + は + Vphủ định (thay thế cho を / に / で)",
          explanation: "Khi phủ định một phần hoặc nhấn mạnh đối tượng riêng biệt trong câu trả lời.",
          examples: [
            { jp: "がっこうには いきません。", vn: "(Nơi khác thì đi nhưng) trường học thì tôi không đến.", highlight: "は" },
            { jp: "テレビでは みません。", vn: "(Phương tiện khác thì xem nhưng) tivi thì không xem.", highlight: "は" },
            { jp: "ともだちとは たべません。", vn: "(Người khác thì ăn nhưng) bạn bè thì tôi không ăn cùng.", highlight: "は" }
          ]
        }
      ]
    },
    {
      id: "part_ga",
      particle: "が",
      romaji: "ga",
      name: "Trợ từ Chủ ngữ ngữ pháp & Đối tượng của Tính từ / Tự động từ",
      color: "#14b8a6",
      pdfSource: ["2.pdf", "6.pdf"],
      usages: [
        {
          label: "1. Chủ ngữ thực hiện hành động (nhấn mạnh chủ ngữ)",
          formula: "Chủ ngữ + が + Tự động từ (Vます)",
          explanation: "Chỉ người hoặc vật thực hiện hành động tự nhiên, hoặc nhấn mạnh chính xác chủ thể (ai làm).",
          examples: [
            { jp: "あめが ふります。", vn: "Trời mưa.", highlight: "が" },
            { jp: "だれが いきますか。", vn: "Ai sẽ đi vậy?", highlight: "が" }
          ]
        },
        {
          label: "2. Đối tượng của tính từ, sở thích, năng lực (すき, きらい, じょうず, ほしい, あります)",
          formula: "Danh từ + が + すき / きらい / ほしい / あります / います",
          explanation: "Đánh dấu đối tượng được yêu thích, ghét, mong muốn hoặc sở hữu/tồn tại.",
          examples: [
            { jp: "わたしは にほんごが すきです。", vn: "Tôi thích tiếng Nhật.", highlight: "が" },
            { jp: "くるまが ほしいです。", vn: "Tôi muốn có ô tô.", highlight: "が" },
            { jp: "じかんが あります。", vn: "Tôi có thời gian.", highlight: "が" }
          ]
        }
      ]
    },
    {
      id: "part_no",
      particle: "の",
      romaji: "no",
      name: "Trợ từ Sở hữu, Xuất xứ & Bổ nghĩa cho danh từ",
      color: "#eab308",
      pdfSource: ["9.pdf"],
      usages: [
        {
          label: "1. Sở hữu hoặc quan hệ thuộc về (Của)",
          formula: "Danh từ 1 + の + Danh từ 2",
          explanation: "Nối 2 danh từ với nhau: N1 bổ nghĩa hoặc sở hữu N2 (người của công ty, sách của tôi, xe của Nhật...).",
          examples: [
            { jp: "かいしゃの ひとと テニスを します。", vn: "Tôi chơi tennis với người của công ty.", highlight: "の" },
            { jp: "わたしの ほんです。", vn: "Đó là quyển sách của tôi.", highlight: "の" },
            { jp: "にほんの くるまです。", vn: "Đó là xe ô tô của Nhật Bản.", highlight: "の" }
          ]
        }
      ]
    }
  ],

  // ==========================================
  // PHẦN B: BẢNG TRA CỨU NGHI VẤN TỪ (疑問詞)
  // ==========================================
  interrogatives: [
    {
      id: "int_doko",
      word: "どこ",
      romaji: "doko",
      meaningVn: "Ở đâu? / Chỗ nào?",
      pdfSource: ["3.pdf", "4.pdf", "5.pdf", "7.pdf", "8.pdf"],
      combos: [
        {
          pattern: "どこへ / どこに いきますか。",
          meaning: "Đi đâu vậy?",
          exampleQ: "どこに いきますか。",
          exampleA: "こうこうに いきます。(Tôi đi đến trường cấp 3.)"
        },
        {
          pattern: "どこで Vますか。",
          meaning: "Làm hành động ở đâu?",
          exampleQ: "どこで えいがを みるんですか。",
          exampleA: "えいがかんで えいがを みます。(Xem ở rạp chiếu phim.)"
        },
        {
          pattern: "どこから どこまで いきますか。",
          meaning: "Đi từ đâu đến đâu?",
          exampleQ: "どこから どこまで いくんですか。",
          exampleA: "うちから がっこうまで いきます。(Từ nhà đến trường.)"
        }
      ]
    },
    {
      id: "int_nani",
      word: "なに / なん",
      romaji: "nani / nan",
      meaningVn: "Cái gì?",
      pdfSource: ["3.pdf", "4.pdf", "7.pdf", "8.pdf", "9.pdf"],
      combos: [
        {
          pattern: "なにを Vますか。",
          meaning: "Làm cái gì? / Ăn/Uống/Học cái gì?",
          exampleQ: "なにを ならうんですか。",
          exampleA: "りょうりを ならいます。(Tôi học nấu ăn.)"
        },
        {
          pattern: "なにで Vますか。",
          meaning: "Bằng cái gì? (Phương tiện / Dụng cụ)",
          exampleQ: "なにで だいがくに いくんですか。",
          exampleA: "でんしゃで いきます。(Tôi đi bằng tàu điện.)"
        },
        {
          pattern: "なんじに Vますか。",
          meaning: "Vào lúc mấy giờ?",
          exampleQ: "なんじに いくんですか。",
          exampleA: "3じに いきます。(Tôi đi lúc 3 giờ.)"
        },
        {
          pattern: "なんじから なんじまで Vますか。",
          meaning: "Từ mấy giờ đến mấy giờ?",
          exampleQ: "なんじから なんじまで サッカーを しますか。",
          exampleA: "8じから 10じまで します。(Từ 8h đến 10h.)"
        }
      ]
    },
    {
      id: "int_dare",
      word: "だれ / どなた",
      romaji: "dare / donata",
      meaningVn: "Ai? / Vị nào?",
      pdfSource: ["3.pdf", "8.pdf", "9.pdf"],
      combos: [
        {
          pattern: "だれと Vますか。",
          meaning: "Làm cùng với ai?",
          exampleQ: "だれと レストランで すしを たべるんですか。",
          exampleA: "ははと たべます。(Tôi ăn cùng với mẹ.)"
        },
        {
          pattern: "だれが Vますか。",
          meaning: "Ai làm hành động đó?",
          exampleQ: "だれが がっこうに きますか。",
          exampleA: "タンさんが きます。(Anh Tân sẽ đến.)"
        }
      ]
    },
    {
      id: "int_itsu",
      word: "いつ",
      romaji: "itsu",
      meaningVn: "Khi nào? / Bao giờ?",
      pdfSource: ["3.pdf"],
      combos: [
        {
          pattern: "いつ Vますか。",
          meaning: "Khi nào thì làm? (Không dùng trợ từ に sau いつ)",
          exampleQ: "いつ だいがくに いくんですか。",
          exampleA: "9がつ 4かに いきます。(Tôi đi vào ngày 4 tháng 9.)"
        }
      ]
    },
    {
      id: "int_donokurai",
      word: "どのくらい / どのぐらい",
      romaji: "donokurai / donogurai",
      meaningVn: "Khoảng bao lâu? / Mất bao nhiêu?",
      pdfSource: ["3.pdf", "4.pdf"],
      combos: [
        {
          pattern: "どのくらい Vますか。",
          meaning: "Làm việc đó trong bao lâu?",
          exampleQ: "どのぐらい しゅくだいを するんですか。",
          exampleA: "30ぷんぐらい します。(Tôi làm khoảng 30 phút.)"
        }
      ]
    },
    {
      id: "int_dou",
      word: "どう / いかが",
      romaji: "dou / ikaga",
      meaningVn: "Như thế nào?",
      pdfSource: [],
      combos: [
        {
          pattern: "N は どうですか。",
          meaning: "N thì như thế nào?",
          exampleQ: "にほんの せいかつは どうですか。",
          exampleA: "とても おもしろいです。(Rất thú vị.)"
        }
      ]
    },
    {
      id: "int_doushite",
      word: "どうして / なぜ",
      romaji: "doushite / naze",
      meaningVn: "Tại sao?",
      pdfSource: [],
      combos: [
        {
          pattern: "どうして Vますか。",
          meaning: "Tại sao lại làm như vậy? (Trả lời: 〜から)",
          exampleQ: "どうして きのう やすみましたか。",
          exampleA: "あたまが いたかったですから。(Vì tôi bị đau đầu.)"
        }
      ]
    }
  ],

  // ==========================================
  // PHẦN C: NGÂN HÀNG BÀI TẬP (200 CÂU LUYỆN TẬP)
  // 50 câu cho mỗi dạng (Particle Fill, Interrogative Fill, Translation, Error Correction)
  // ==========================================
  exercises: {
'''

# Now let's generate the 4 categories of exercises (50 items each).
