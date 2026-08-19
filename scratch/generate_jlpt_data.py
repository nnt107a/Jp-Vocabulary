# -*- coding: utf-8 -*-
import json

# We will generate jlpt_data.js with extensive question banks:
# 1. grammar_fill
# 2. sentence_arrangement
# 3. paraphrase
# 4. contextual_vocab

grammar_fill = [
    # Particles
    {
        "id": "gf_001",
        "sentence": "わたしは まいにち バス（　　）がっこうへ いきます。",
        "options": ["で", "に", "を", "へ"],
        "correct": 0,
        "explanation": "Phương tiện di chuyển dùng trợ từ「で」: バスで (bằng xe buýt)."
    },
    {
        "id": "gf_002",
        "sentence": "あした ともだち（　　）えいがを みます。",
        "options": ["と", "に", "で", "を"],
        "correct": 0,
        "explanation": "Làm cùng với ai đó dùng trợ từ「と」: ともだちと (cùng với bạn)."
    },
    {
        "id": "gf_003",
        "sentence": "つくえの うえ（　　）ほんが あります。",
        "options": ["に", "で", "を", "へ"],
        "correct": 0,
        "explanation": "Sự tồn tại ở địa điểm nào dùng「〜に あります」."
    },
    {
        "id": "gf_004",
        "sentence": "としょかん（　　）ほんを よみます。",
        "options": ["で", "に", "へ", "を"],
        "correct": 0,
        "explanation": "Hành động diễn ra tại địa điểm nào dùng trợ từ「で」."
    },
    {
        "id": "gf_005",
        "sentence": "まいあさ ７じ（　　）おきます。",
        "options": ["に", "で", "を", "が"],
        "correct": 0,
        "explanation": "Mốc thời gian cụ thể dùng trợ từ「に」: ７じに (vào lúc 7 giờ)."
    },
    {
        "id": "gf_006",
        "sentence": "きのう りんご（　　）みかんを かいました。",
        "options": ["と", "に", "で", "を"],
        "correct": 0,
        "explanation": "Liệt kê danh từ dùng trợ từ「と」: りんご と みかん (táo và quýt)."
    },
    {
        "id": "gf_007",
        "sentence": "きっさてんで コーヒー（　　）のみました。",
        "options": ["を", "に", "で", "が"],
        "correct": 0,
        "explanation": "Tân ngữ trực tiếp của tha động từ のみます dùng「を」."
    },
    {
        "id": "gf_008",
        "sentence": "とうきょう（　　）きょうとまで しんかんせんで いきます。",
        "options": ["から", "まで", "に", "で"],
        "correct": 0,
        "explanation": "Điểm xuất phát dùng「から」: Từ Tokyo đến Kyoto (とうきょうから きょうとまで)."
    },
    {
        "id": "gf_009",
        "sentence": "わたしは にほんご（　　）すきです。",
        "options": ["が", "を", "に", "で"],
        "correct": 0,
        "explanation": "Tính từ chỉ sở thích / năng lực dùng「〜が すきです」."
    },
    {
        "id": "gf_010",
        "sentence": "きょうしつに がくせいが １０にん（　　）います。",
        "options": ["", "に", "を", "で"],
        "correct": 0,
        "explanation": "Số lượng từ đứng ngay trước động từ không cần trợ từ đi kèm."
    },
    {
        "id": "gf_011",
        "sentence": "やまださんは えいご（　　）じょうずです。",
        "options": ["が", "を", "に", "で"],
        "correct": 0,
        "explanation": "Khen năng lực giỏi môn gì dùng trợ từ「が」: えいごが じょうず."
    },
    {
        "id": "gf_012",
        "sentence": "この かばんは だれ（　　）ですか。",
        "options": ["の", "に", "を", "で"],
        "correct": 0,
        "explanation": "Hỏi sở hữu của ai: だれのですか (Của ai?)."
    },
    {
        "id": "gf_013",
        "sentence": "にちようび、どこ（　　）いきませんでした。",
        "options": ["へも", "にも", "でも", "をも"],
        "correct": 0,
        "explanation": "Phủ định hoàn toàn điểm đến: どこへも いきませんでした (Không đi đâu cả)."
    },
    {
        "id": "gf_014",
        "sentence": "はさみ（　　）かみを きります。",
        "options": ["で", "に", "を", "と"],
        "correct": 0,
        "explanation": "Công cụ, phương tiện thực hiện hành động dùng trợ từ「で」: はさみで (bằng kéo)."
    },
    {
        "id": "gf_015",
        "sentence": "ちちは いま へや（　　）います。",
        "options": ["に", "で", "を", "へ"],
        "correct": 0,
        "explanation": "Vị trí có mặt của người / con vật: へやに います (ở trong phòng)."
    },
    {
        "id": "gf_016",
        "sentence": "この はなは にほんご（　　）なんですか。",
        "options": ["で", "に", "を", "と"],
        "correct": 0,
        "explanation": "Hỏi bằng ngôn ngữ gì dùng「〜で」: にほんごで (bằng tiếng Nhật)."
    },
    {
        "id": "gf_017",
        "sentence": "きのうは あめ（　　）ふりました。",
        "options": ["が", "を", "に", "で"],
        "correct": 0,
        "explanation": "Hiện tượng tự nhiên trời mưa dùng「あめが ふる」."
    },
    {
        "id": "gf_018",
        "sentence": "えき（　　）でんしゃを おりました。",
        "options": ["で", "に", "を", "から"],
        "correct": 0,
        "explanation": "Địa điểm thực hiện việc xuống tàu xe dùng「えきで」."
    },
    {
        "id": "gf_019",
        "sentence": "バス（　　）おりて、あるいて いきました。",
        "options": ["を", "に", "で", "から"],
        "correct": 0,
        "explanation": "Rời khỏi phương tiện dùng「バスを おりる」."
    },
    {
        "id": "gf_020",
        "sentence": "タクシー（　　）のります。",
        "options": ["に", "を", "で", "へ"],
        "correct": 0,
        "explanation": "Lên xe / phương tiện dùng trợ từ「に」: タクシーに のる."
    },
    # Verb conjugations & structures
    {
        "id": "gf_021",
        "sentence": "すみませんが、しゃしんを（　　）ください。",
        "options": ["とって", "とる", "とります", "とった"],
        "correct": 0,
        "explanation": "Mẫu câu yêu cầu lịch sự: V-てください (Xin hãy chụp ảnh)."
    },
    {
        "id": "gf_022",
        "sentence": "ここで タバコを（　　）はいけません。",
        "options": ["すって", "すう", "すいます", "すった"],
        "correct": 0,
        "explanation": "Mẫu cấm đoán: V-ては いけません (Không được hút thuốc ở đây)."
    },
    {
        "id": "gf_023",
        "sentence": "しゃしんを（　　）も いいですか。",
        "options": ["とっても", "とる", "とります", "とって"],
        "correct": 3,
        "explanation": "Mẫu xin phép: V-ても いいですか (Tôi có thể chụp ảnh không?)."
    },
    {
        "id": "gf_024",
        "sentence": "いま レポートを（　　）います。",
        "options": ["かいて", "かく", "かきます", "かいた"],
        "correct": 0,
        "explanation": "Diễn tả hành động đang diễn ra: V-ています (Đang viết báo cáo)."
    },
    {
        "id": "gf_025",
        "sentence": "あした がっこうへ（　　）なければ なりません。",
        "options": ["いか", "いき", "いく", "いって"],
        "correct": 0,
        "explanation": "Mẫu bắt buộc phải làm: V-なければなりません (đi từ thể ない bỏ い: いかない ➔ いかなければ)."
    },
    {
        "id": "gf_026",
        "sentence": "にちようびは はやおき（　　）なくても いいです。",
        "options": ["し", "する", "して", "した"],
        "correct": 0,
        "explanation": "Mẫu không cần phải làm: V-なくてもいいです (しなくてもいい)."
    },
    {
        "id": "gf_027",
        "sentence": "わたしは ピアノを ひく ことが（　　）。",
        "options": ["できます", "します", "あります", "います"],
        "correct": 0,
        "explanation": "Mẫu khả năng: V-る ことが できます (Có thể chơi đàn piano)."
    },
    {
        "id": "gf_028",
        "sentence": "ごはんを（　　）まえに、てを あらいます。",
        "options": ["たべる", "たべた", "たべて", "たべます"],
        "correct": 0,
        "explanation": "Trước khi làm gì: V(nguyên thể / thể từ điển) + まえに."
    },
    {
        "id": "gf_029",
        "sentence": "おんがくを（　　）ながら、べんきょうします。",
        "options": ["きき", "きく", "きいて", "きいた"],
        "correct": 0,
        "explanation": "Vừa làm A vừa làm B: V-masu (bỏ ます) + ながら."
    },
    {
        "id": "gf_030",
        "sentence": "にほんに（　　）ことが ありますか。",
        "options": ["いった", "いく", "いって", "いかない"],
        "correct": 0,
        "explanation": "Hỏi kinh nghiệm đã từng làm gì: V-た ことが ありますか."
    },
    {
        "id": "gf_031",
        "sentence": "やすみの ひは テレビを みたり、ほんを（　　）します。",
        "options": ["よんだり", "よむ", "よんで", "よみます"],
        "correct": 0,
        "explanation": "Liệt kê hành động: V-たり、V-たり します."
    },
    {
        "id": "gf_032",
        "sentence": "らいねん にほんへ いきたい（　　）。",
        "options": ["です", "ます", "でした", "ました"],
        "correct": 0,
        "explanation": "Muốn làm gì: V-たいです (Thể hiện mong muốn của người nói)."
    },
    {
        "id": "gf_033",
        "sentence": "のどが かわきましたから、みずが（　　）です。",
        "options": ["ほしい", "すき", "のみたい", "おいしい"],
        "correct": 0,
        "explanation": "Muốn có danh từ vật gì đó: N が ほしいです."
    },
    {
        "id": "gf_034",
        "sentence": "デパートへ ふくを（　　）に いきます。",
        "options": ["かい", "かう", "かって", "かいました"],
        "correct": 0,
        "explanation": "Đi đâu để làm mục đích gì: V-masu (bỏ ます) + に いきます."
    },
    {
        "id": "gf_035",
        "sentence": "きのうは とても（　　）です。",
        "options": ["さむかった", "さむい", "さむくない", "さむくなかった"],
        "correct": 0,
        "explanation": "Quá khứ khẳng định của tính từ đuôi い: bỏ い + かったです."
    },
    {
        "id": "gf_036",
        "sentence": "この へやは あまり（　　）です。",
        "options": ["ひろくない", "ひろい", "ひろかった", "ひろいでした"],
        "correct": 0,
        "explanation": "Phó từ「あまり」đi với thể phủ định: あまり ひろくない (không rộng lắm)."
    },
    {
        "id": "gf_037",
        "sentence": "この まちは しずかで、（　　）まちです。",
        "options": ["きれいな", "きれい", "きれいくて", "きれいに"],
        "correct": 0,
        "explanation": "Tính từ đuôi な bổ nghĩa cho danh từ まち cần thêm「な」."
    },
    {
        "id": "gf_038",
        "sentence": "らいしゅうは（　　）ないです。",
        "options": ["ひまじゃ", "ひま", "ひまで", "ひまな"],
        "correct": 0,
        "explanation": "Phủ định tính từ đuôi な: ひまじゃない (không rảnh)."
    },
    {
        "id": "gf_039",
        "sentence": "おとうとは わたしより せが（　　）。",
        "options": ["たかいです", "たかくないです", "たかいでした", "たかい"],
        "correct": 0,
        "explanation": "So sánh hơn: A は B より (A cao hơn B)."
    },
    {
        "id": "gf_040",
        "sentence": "スポーツの なかで、サッカーが（　　）すきです。",
        "options": ["いちばん", "もっと", "ずっと", "とても"],
        "correct": 0,
        "explanation": "So sánh nhất trong một nhóm: 〜のなかで 〜がいちばん すきです."
    },
    {
        "id": "gf_041",
        "sentence": "あめが ふっていますから、かさを（　　）いきましょう。",
        "options": ["もって", "もつ", "もちます", "もった"],
        "correct": 0,
        "explanation": "Mẫu kết hợp hành động: もって いきます (mang theo đi)."
    },
    {
        "id": "gf_042",
        "sentence": "わたしは たなかさんに ほんを（　　）。",
        "options": ["あげました", "くれました", "いただきました", "もらいました"],
        "correct": 0,
        "explanation": "Tôi tặng cho người khác dùng「あげます」."
    },
    {
        "id": "gf_043",
        "sentence": "たなかさんは わたしに プレゼントを（　　）。",
        "options": ["くれました", "あげました", "やりました", "さしあげました"],
        "correct": 0,
        "explanation": "Người khác tặng cho tôi dùng「くれます」."
    },
    {
        "id": "gf_044",
        "sentence": "わたしは せんせいに じしょを（　　）。",
        "options": ["いただきました", "あげました", "くれました", "やりました"],
        "correct": 0,
        "explanation": "Nhận từ người bề trên (thầy giáo) dùng khiêm nhường ngữ「いただく」."
    },
    {
        "id": "gf_045",
        "sentence": "まだ ひるごはんを（　　）いません。",
        "options": ["たべて", "たべる", "たべます", "たべた"],
        "correct": 0,
        "explanation": "Vẫn chưa làm việc gì: まだ V-ていません."
    }
]

sentence_arrangement = [
    {
        "id": "sa_001",
        "lead": "わたしは",
        "tail": "かいました。",
        "segments": ["きのう", "デパートで", "あおい", "シャツを"],
        "correct_order": [0, 1, 2, 3],
        "star_index": 2, # 0-indexed blank position
        "explanation": "Thứ tự: わたしは きのう デパートで [★ あおい] シャツを かいました。"
    },
    {
        "id": "sa_002",
        "lead": "あした",
        "tail": "いきます。",
        "segments": ["ともだちと", "とうきょうへ", "しんかんせんで", "いっしょに"],
        "correct_order": [0, 3, 2, 1],
        "star_index": 2,
        "explanation": "Thứ tự: あした ともだちと いっしょに [★ しんかんせんで] とうきょうへ いきます。"
    },
    {
        "id": "sa_003",
        "lead": "この",
        "tail": "おいしいです。",
        "segments": ["りょうりは", "からいですが", "とても", "すこし"],
        "correct_order": [0, 3, 1, 2],
        "star_index": 2,
        "explanation": "Thứ tự: この りょうりは すこし [★ からいですが] とても おいしいです。"
    },
    {
        "id": "sa_004",
        "lead": "まいあさ",
        "tail": "がっこうへ いきます。",
        "segments": ["ごはんを", "７じに", "たべてから", "あさ"],
        "correct_order": [3, 0, 2, 1],
        "star_index": 2,
        "explanation": "Thứ tự: まいあさ あさ ごはんを [★ たべてから] ７じに がっこうへ いきます。"
    },
    {
        "id": "sa_005",
        "lead": "としょかんで",
        "tail": "いけません。",
        "segments": ["おおきい", "はなしては", "こえで", "ほんを よむとき"],
        "correct_order": [3, 0, 2, 1],
        "star_index": 2,
        "explanation": "Thứ tự: としょかんで ほんを よむとき おおきい [★ こえで] はなしては いけません。"
    },
    {
        "id": "sa_006",
        "lead": "わたしは",
        "tail": "すきです。",
        "segments": ["えを", "ことが", "じかんに", "ひまな"],
        "correct_order": [3, 2, 0, 1],
        "star_index": 2,
        "explanation": "Thứ tự: わたしは ひまな じかんに [★ えを] かく ことが すきです。"
    },
    {
        "id": "sa_007",
        "lead": "すみませんが、",
        "tail": "おしえて ください。",
        "segments": ["えきまでの", "を", "みち", "この"],
        "correct_order": [3, 0, 2, 1],
        "star_index": 2,
        "explanation": "Thứ tự: すみませんが、この えきまでの [★ みち] を おしえて ください。"
    },
    {
        "id": "sa_008",
        "lead": "あめが",
        "tail": "でかけます。",
        "segments": ["ふっていますが、", "かさを", "さして", "いま"],
        "correct_order": [3, 0, 1, 2],
        "star_index": 2,
        "explanation": "Thứ tự: あめが いま ふっていますが、[★ かさを] さして でかけます。"
    },
    {
        "id": "sa_009",
        "lead": "わたしは",
        "tail": "ありません。",
        "segments": ["ふじさんに", "ことが", "いちども", "のぼった"],
        "correct_order": [2, 0, 3, 1],
        "star_index": 2,
        "explanation": "Thứ tự: わたしは いちども ふじさんに [★ のぼった] ことが ありません。"
    },
    {
        "id": "sa_010",
        "lead": "にほんごで",
        "tail": "できますか。",
        "segments": ["てがみを", "ことが", "かく", "ひとりで"],
        "correct_order": [3, 0, 2, 1],
        "star_index": 2,
        "explanation": "Thứ tự: にほんごで ひとりで てがみを [★ かく] ことが できますか。"
    },
    {
        "id": "sa_011",
        "lead": "へやを",
        "tail": "でかけました。",
        "segments": ["でるとき、", "けして", "でんきを", "ちゃんと"],
        "correct_order": [0, 3, 2, 1],
        "star_index": 2,
        "explanation": "Thứ tự: へやを でるとき、ちゃんと [★ でんきを] けして でかけました。"
    },
    {
        "id": "sa_012",
        "lead": "きのう",
        "tail": "もらいました。",
        "segments": ["ともだちから", "かわいい", "たんじょうびに", "にんぎょうを"],
        "correct_order": [2, 0, 1, 3],
        "star_index": 2,
        "explanation": "Thứ tự: きのう たんじょうびに ともだちから [★ かわいい] にんぎょうを もらいました。"
    },
    {
        "id": "sa_013",
        "lead": "この",
        "tail": "できません。",
        "segments": ["パソコンは", "つかう", "ふるくて", "ことが"],
        "correct_order": [0, 2, 1, 3],
        "star_index": 2,
        "explanation": "Thứ tự: この パソコンは ふるくて [★ つかう] ことが できません。"
    },
    {
        "id": "sa_014",
        "lead": "あさ",
        "tail": "のみます。",
        "segments": ["おきてから", "つめたい", "まず", "みずを"],
        "correct_order": [0, 2, 1, 3],
        "star_index": 2,
        "explanation": "Thứ tự: あさ おきてから まず [★ つめたい] みずを のみます。"
    },
    {
        "id": "sa_015",
        "lead": "かれは",
        "tail": "はいりました。",
        "segments": ["だいがくを", "かいしゃに", "そつぎょうして", "ゆうめいな"],
        "correct_order": [0, 2, 3, 1],
        "star_index": 2,
        "explanation": "Thứ tự: かれは だいがくを そつぎょうして [★ ゆうめいな] かいしゃに はいりました。"
    }
]

paraphrase = [
    {
        "id": "pp_001",
        "sentence": "この りょうりは とても <u>おいしい</u> です。",
        "underlined": "おいしい",
        "options": [
            "あじが いい",
            "あじが わるい",
            "ねだんが たかい",
            "りょうが おおい"
        ],
        "correct": 0,
        "explanation": "おいしい = vị ngon (あじが いい)."
    },
    {
        "id": "pp_002",
        "sentence": "わたしは <u>きょうだい</u> が ふたり います。",
        "underlined": "きょうだい",
        "options": [
            "あにと いもうと",
            "ちちと はは",
            "おじと おば",
            "そふと そぼ"
        ],
        "correct": 0,
        "explanation": "きょうだい = anh chị em (ở đây là anh trai và em gái)."
    },
    {
        "id": "pp_003",
        "sentence": "がっこうは えきから <u>ちかい</u> です。",
        "underlined": "ちかい",
        "options": [
            "あまり とおくない",
            "とても とおい",
            "あるいて いけない",
            "バスが ひつような"
        ],
        "correct": 0,
        "explanation": "ちかい (gần) = あまり とおくない (không xa lắm)."
    },
    {
        "id": "pp_004",
        "sentence": "きのうは <u>ゆうがた</u> あめが ふりました。",
        "underlined": "ゆうがた",
        "options": [
            "ひるの あと、よるの まえ",
            "あさ はやく",
            "よる おそく",
            "ひる ごろ"
        ],
        "correct": 0,
        "explanation": "ゆうがた (chiều tối) = sau buổi trưa, trước buổi tối (ひるの あと、よるの まえ)."
    },
    {
        "id": "pp_005",
        "sentence": "たなかさんは えいごが <u>じょうず</u> です。",
        "underlined": "じょうず",
        "options": [
            "よく できます",
            "あまり できません",
            "へたです",
            "すきじゃ ありません"
        ],
        "correct": 0,
        "explanation": "じょうず (giỏi) = よく できます (làm tốt/thành thạo)."
    },
    {
        "id": "pp_006",
        "sentence": "この テストは <u>かんたん</u> でした。",
        "underlined": "かんたん",
        "options": [
            "むずかしくなかった",
            "とても むずかしかった",
            "ながかった",
            "つまらなかった"
        ],
        "correct": 0,
        "explanation": "かんたん (đơn giản, dễ) = むずかしくなかった (không khó)."
    },
    {
        "id": "pp_007",
        "sentence": "かれは <u>ゆうめいな</u> ひとです。",
        "underlined": "ゆうめいな",
        "options": [
            "たくさんの ひとが しっている",
            "だれも しらない",
            "しんせつな",
            "おもしろい"
        ],
        "correct": 0,
        "explanation": "ゆうめい (nổi tiếng) = nhiều người biết (たくさんの ひとが しっている)."
    },
    {
        "id": "pp_008",
        "sentence": "あしたは <u>やすみ</u> です。",
        "underlined": "やすみ",
        "options": [
            "しごとが ありません",
            "しごとが たくさん あります",
            "がっこうへ いきます",
            "かいしゃへ いきます"
        ],
        "correct": 0,
        "explanation": "やすみ (nghỉ) = しごとが ありません (không có việc làm/không phải đi làm)."
    },
    {
        "id": "pp_009",
        "sentence": "きょうは <u>ひま</u> です。",
        "underlined": "ひま",
        "options": [
            "じかんが たくさん あります",
            "いそがしいです",
            "ようじが おおいです",
            "つかれています"
        ],
        "correct": 0,
        "explanation": "ひま (rảnh) = có nhiều thời gian (じかんが たくさん あります)."
    },
    {
        "id": "pp_010",
        "sentence": "かのじょは <u>あたまが いい</u> です。",
        "underlined": "あたまが いい",
        "options": [
            "とても スマートです",
            "あたまが 痛いです",
            "かおが かわいいです",
            "せが たかいです"
        ],
        "correct": 0,
        "explanation": "あたまが いい = thông minh, sáng dạ (スマート)."
    },
    {
        "id": "pp_011",
        "sentence": "わたしは <u>まいばん</u> にほんごを べんきょうします。",
        "underlined": "まいばん",
        "options": [
            "よる いつも",
            "あさ いつも",
            "ひる いつも",
            "ときどき"
        ],
        "correct": 0,
        "explanation": "まいばん (mỗi tối) = đêm nào cũng (よる いつも)."
    },
    {
        "id": "pp_012",
        "sentence": "この くつは <u>たかい</u> です。",
        "underlined": "たかい",
        "options": [
            "ねだんが やすくない",
            "ねだんが やすい",
            "サイズが おおきい",
            "いろが くろい"
        ],
        "correct": 0,
        "explanation": "たかい (đắt) = ねだんが やすくない (giá không rẻ)."
    },
    {
        "id": "pp_013",
        "sentence": "あの ひとは <u>しんせつ</u> です。",
        "underlined": "しんせつ",
        "options": [
            "やさしくて いいひと",
            "きびしいひと",
            "こわいひと",
            "いそがしいひと"
        ],
        "correct": 0,
        "explanation": "しんせつ (tử tế, thân thiện) = やさしくて いいひと (người tốt bụng, hiền hòa)."
    },
    {
        "id": "pp_014",
        "sentence": "でんしゃが <u>こんで</u> いました。",
        "underlined": "こんで",
        "options": [
            "ひとが たくさん いました",
            "ひとが あまり いませんでした",
            "すいていました",
            "とまっていました"
        ],
        "correct": 0,
        "explanation": "こんでいる (đông đúc) = ひとが たくさん いました (có rất nhiều người)."
    },
    {
        "id": "pp_015",
        "sentence": "あした <u>かならず</u> きてください。",
        "underlined": "かならず",
        "options": [
            "ぜったいに",
            "たぶん",
            "ときどき",
            "もしかしたら"
        ],
        "correct": 0,
        "explanation": "かならず (nhất định) = ぜったいに (tuyệt đối, chắc chắn)."
    }
]

contextual_vocab = [
    {
        "id": "cv_001",
        "sentence": "あめが ふっていますから、（　　）を さして でかけます。",
        "options": ["かさ", "ぼうし", "めがね", "くつ"],
        "correct": 0,
        "explanation": "Trời mưa thì che ô (かさを さす)."
    },
    {
        "id": "cv_002",
        "sentence": "ごはんを たべたあとで、（　　）を みがきます。",
        "options": ["は", "て", "かお", "あたま"],
        "correct": 0,
        "explanation": "Sau khi ăn cơm thì đánh răng (はを みがく)."
    },
    {
        "id": "cv_003",
        "sentence": "あさ おきて、まず かおを（　　）。",
        "options": ["あらいます", "みがきます", "たべます", "よみます"],
        "correct": 0,
        "explanation": "Rửa mặt dùng động từ「あらう」: かおを あらう."
    },
    {
        "id": "cv_004",
        "sentence": "ぎんこうへ おかねを（　　）に いきます。",
        "options": ["おろし", "かり", "ださ", "もらい"],
        "correct": 0,
        "explanation": "Rút tiền ở ngân hàng dùng「おかねを おろす」."
    },
    {
        "id": "cv_005",
        "sentence": "へやが くらいですから、でんきを（　　）ください。",
        "options": ["つけて", "けして", "あけて", "しめて"],
        "correct": 0,
        "explanation": "Phòng tối nên xin hãy bật đèn (でんきを つける)."
    },
    {
        "id": "cv_006",
        "sentence": "さむいですから、まどを（　　）ください。",
        "options": ["しめて", "あけて", "つけて", "けして"],
        "correct": 0,
        "explanation": "Trời lạnh nên xin hãy đóng cửa sổ (まどを しめる)."
    },
    {
        "id": "cv_007",
        "sentence": "わからない ことばが ありますから、（　　）で しらべます。",
        "options": ["じしょ", "さいふ", "とけい", "かばん"],
        "correct": 0,
        "explanation": "Tra cứu từ không biết bằng từ điển (じしょで しらべる)."
    },
    {
        "id": "cv_008",
        "sentence": "びょうきですから、びょういんへ いって（　　）を もらいました。",
        "options": ["くすり", "おかし", "ジュース", "みず"],
        "correct": 0,
        "explanation": "Bị bệnh đi bệnh viện lấy thuốc uống (くすりを もらう)."
    },
    {
        "id": "cv_009",
        "sentence": "のどが かわきましたから、つめたい おちゃを（　　）たいです。",
        "options": ["のみ", "たべ", "かい", "み"],
        "correct": 0,
        "explanation": "Khát nước thì muốn uống trà lạnh (おちゃを のみたい)."
    },
    {
        "id": "cv_010",
        "sentence": "おなかが すきましたから、レストランで ごはんを（　　）ましょう。",
        "options": ["たべ", "のみ", "み", "きき"],
        "correct": 0,
        "explanation": "Đói bụng thì cùng ăn cơm (ごはんを たべましょう)."
    },
    {
        "id": "cv_011",
        "sentence": "バスの なかに かばんを（　　）しまいました。",
        "options": ["わすれて", "なくして", "おとして", "すてて"],
        "correct": 0,
        "explanation": "Bỏ quên đồ trên xe bus dùng「わすれる」: かばんを わすれる."
    },
    {
        "id": "cv_012",
        "sentence": "あした テストが ありますから、こんばん（　　）します。",
        "options": ["べんきょう", "かいもの", "さんぽ", "りょこう"],
        "correct": 0,
        "explanation": "Mai có bài kiểm tra nên tối nay phải học (べんきょうする)."
    },
    {
        "id": "cv_013",
        "sentence": "あついですね。（　　）を つけましょうか。",
        "options": ["エアコン", "ストーブ", "コート", "セーター"],
        "correct": 0,
        "explanation": "Trời nóng thì bật máy điều hòa (エアコンを つける)."
    },
    {
        "id": "cv_014",
        "sentence": "あさ ねぼうして、じゅぎょうに（　　）しまいました。",
        "options": ["おくれて", "まにあって", "やすんで", "おわって"],
        "correct": 0,
        "explanation": "Ngủ quên nên bị trễ giờ học: じゅぎょうに おくれる."
    },
    {
        "id": "cv_015",
        "sentence": "ホテルを まえもって（　　）しておきました。",
        "options": ["よやく", "そうだん", "けっこん", "しゅっちょう"],
        "correct": 0,
        "explanation": "Đặt trước phòng khách sạn dùng「よやくする」."
    }
]

js_content = f"""// JLPT Practice Test Data Bank (JLPT N5 Format)
const JLPT_PRACTICE_DATA = {{
  grammar_fill: {json.dumps(grammar_fill, ensure_ascii=False, indent=2)},
  sentence_arrangement: {json.dumps(sentence_arrangement, ensure_ascii=False, indent=2)},
  paraphrase: {json.dumps(paraphrase, ensure_ascii=False, indent=2)},
  contextual_vocab: {json.dumps(contextual_vocab, ensure_ascii=False, indent=2)}
}};
"""

with open('js/jlpt_data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Generated js/jlpt_data.js successfully!")
