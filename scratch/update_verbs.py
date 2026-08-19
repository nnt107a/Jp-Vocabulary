# -*- coding: utf-8 -*-
import json
import re

verbs_to_add = [
    # Group 1
    ("はいる", "入る", "Vào", 1),
    ("のる", "乗る", "Lên xe, cưỡi", 1),
    ("のぼる", "登る", "Leo (núi)", 1),
    ("つく", "着く", "Đến (nơi)", 1),
    ("とぶ", "飛ぶ", "Bay", 1),
    ("はしる", "走る", "Chạy", 1),
    ("とおる", "通る", "Đi qua", 1),
    ("わたる", "渡る", "Băng qua", 1),
    ("あるく", "歩く", "Đi bộ", 1),
    ("たつ", "立つ", "Đứng", 1),
    ("すわる", "座る", "Ngồi", 1),
    ("とまる", "泊まる", "Trọ lại", 1),
    ("おく", "置く", "Đặt, để", 1),
    ("はる", "貼る", "Dán", 1),
    ("かす", "貸す", "Cho mượn", 1),
    ("だす", "出す", "Nộp, gửi, lấy", 1),
    ("かえす", "返す", "Trả lại", 1),
    ("おくる", "送る", "Gửi", 1),
    ("かかる", "掛かる", "Tốn (thời gian, tiền)", 1),
    ("はじまる", "始まる", "Bắt đầu", 1),
    ("おわる", "終わる", "Kết thúc", 1),
    ("みがく", "磨く", "Đánh (răng)", 1),
    ("かわく", "乾く", "Khô", 1),
    ("すむ", "住む", "Sinh sống", 1),
    ("なる", "成る", "Trở thành", 1),
    ("あたる", "当たる", "Trúng (số)", 1),
    ("かわる", "変わる", "Thay đổi", 1),
    ("おこる", "起こる", "Xảy ra", 1),
    ("もつ", "持つ", "Cầm, mang", 1),
    ("けす", "消す", "Tắt (đèn)", 1),
    ("はたらく", "働く", "Làm việc", 1),
    ("さく", "咲く", "Hoa nở", 1),
    ("むく", "剥く", "Gọt (vỏ)", 1),
    ("おろす", "下ろす", "Rút tiền", 1),
    ("なくす", "無くす", "Làm mất", 1),
    ("よぶ", "呼ぶ", "Gọi", 1),
    ("しる", "知る", "Biết", 1),
    ("やく", "焼く", "Nướng", 1),
    ("いそぐ", "急ぐ", "Vội vàng", 1),
    ("ころす", "殺す", "Giết", 1),
    ("さわる", "触る", "Chạm, đụng", 1),
    ("まもる", "守る", "Tuân thủ, bảo vệ", 1),
    ("はらう", "払う", "Trả tiền", 1),
    ("はこぶ", "運ぶ", "Khuân vác", 1),
    ("かぶる", "被る", "Đội (nón)", 1),
    ("はかる", "測る", "Đo", 1),
    ("わらう", "笑う", "Cười", 1),
    ("なく", "泣く", "Khóc", 1),
    ("あく", "開く", "Mở (tự động từ)", 1),
    ("しまる", "閉まる", "Đóng (tự động từ)", 1),
    ("おとす", "落とす", "Đánh rơi", 1),
    ("てつだう", "手伝う", "Phụ giúp", 1),
    ("さそう", "誘う", "Mời, rủ rê", 1),
    ("はく", "履く", "Mang (giày)", 1),
    ("かつ", "勝つ", "Thắng", 1),
    
    # Group 2
    ("でる", "出る", "Rời khỏi, đi ra", 2),
    ("おりる", "降りる", "Xuống (xe)", 2),
    ("かりる", "借りる", "Mượn, vay", 2),
    ("みせる", "見せる", "Cho xem", 2),
    ("いれる", "入れる", "Bỏ vào", 2),
    ("かける", "掛ける", "Treo, gọi (điện)", 2),
    ("こたえる", "答える", "Trả lời", 2),
    ("わかれる", "別れる", "Chia tay", 2),
    ("あつめる", "集める", "Thu thập", 2),
    ("おくれる", "遅れる", "Trễ, muộn", 2),
    ("でかける", "出かける", "Ra ngoài", 2),
    ("できる", "出来る", "Có thể", 2),
    ("つかれる", "疲れる", "Mệt", 2),
    ("われる", "割れる", "Bị vỡ", 2),
    ("おぼえる", "覚える", "Nhớ, học thuộc", 2),
    ("つける", "点ける", "Bật (đèn)", 2),
    ("つとめる", "勤める", "Làm việc", 2),
    ("たすける", "助ける", "Giúp đỡ", 2),
    ("あびる", "浴びる", "Tắm (vòi sen)", 2),
    ("しめる", "閉める", "Đóng (tha động từ)", 2),
    ("あける", "開ける", "Mở (tha động từ)", 2),
    ("むかえる", "迎える", "Đón tiếp", 2),
    ("なげる", "投げる", "Ném", 2),
    ("わすれる", "忘れる", "Quên", 2),
    ("とめる", "止める", "Dừng (xe)", 2),
    ("まぜる", "混ぜる", "Trộn", 2),
    ("すてる", "捨てる", "Vứt bỏ", 2),
    ("きる", "着る", "Mặc", 2),
    ("やめる", "辞める", "Nghỉ việc, bỏ", 2),
    ("しらべる", "調べる", "Tìm hiểu, tra cứu", 2),
    ("くれる", "呉れる", "Cho tôi", 2),
    ("あげる", "上げる", "Cho, tặng", 2),
    ("くらべる", "比べる", "So sánh", 2),
    
    # Group 3
    ("れんしゅうする", "練習する", "Luyện tập", 3),
    ("べんきょうする", "勉強する", "Học", 3),
    ("さんぽする", "散歩する", "Đi dạo", 3),
    ("りょこうする", "旅行する", "Du lịch", 3),
    ("けっこんする", "結婚する", "Kết hôn", 3),
    ("よやくする", "予約する", "Đặt trước", 3),
    ("ざんぎょうする", "残業する", "Tăng ca", 3),
    ("あんしんする", "安心する", "An tâm", 3),
    ("ちゅういする", "注意する", "Chú ý", 3),
    ("しょうかいする", "紹介する", "Giới thiệu", 3),
    ("ふくしゅうする", "復習する", "Ôn tập", 3)
]

def generate_verb_entry(v, kanji, vn, group):
    forms = {
        "dictionary": v,
        "masu": "",
        "nai": "",
        "te": "",
        "ta": "",
        "potential": "",
        "ba": "",
        "volitional": "",
        "te_iru": "",
        "te_kudasai": ""
    }
    
    if group == 3:
        if "くる" in v or v == "くる":
            forms["masu"] = "きます"
            forms["nai"] = "こない"
            forms["te"] = "きて"
            forms["ta"] = "きた"
            forms["potential"] = "こられる"
            forms["ba"] = "くれば"
            forms["volitional"] = "こよう"
        elif "する" in v or v == "する":
            prefix = v[:-2]
            forms["masu"] = prefix + "します"
            forms["nai"] = prefix + "しない"
            forms["te"] = prefix + "して"
            forms["ta"] = prefix + "した"
            forms["potential"] = prefix + "できる"
            forms["ba"] = prefix + "すれば"
            forms["volitional"] = prefix + "しよう"
    elif group == 2:
        stem = v[:-1]
        forms["masu"] = stem + "ます"
        forms["nai"] = stem + "ない"
        forms["te"] = stem + "て"
        forms["ta"] = stem + "た"
        forms["potential"] = stem + "られる"
        forms["ba"] = stem + "れば"
        forms["volitional"] = stem + "よう"
    elif group == 1:
        last = v[-1]
        stem = v[:-1]
        u_to_i = {'う':'い', 'く':'き', 'ぐ':'ぎ', 'す':'し', 'つ':'ち', 'ぬ':'に', 'ぶ':'び', 'む':'み', 'る':'り'}
        forms["masu"] = stem + u_to_i[last] + "ます"
        
        u_to_a = {'う':'わ', 'く':'か', 'ぐ':'が', 'す':'さ', 'つ':'た', 'ぬ':'な', 'ぶ':'ば', 'む':'ま', 'る':'ら'}
        if v == "ある":
            forms["nai"] = "ない"
        else:
            forms["nai"] = stem + u_to_a[last] + "ない"
            
        if v == "いく":
            forms["te"] = "いって"
            forms["ta"] = "いった"
        elif last in ['う', 'つ', 'る']:
            forms["te"] = stem + "って"
            forms["ta"] = stem + "った"
        elif last in ['む', 'ぶ', 'ぬ']:
            forms["te"] = stem + "んで"
            forms["ta"] = stem + "んだ"
        elif last == 'く':
            forms["te"] = stem + "いて"
            forms["ta"] = stem + "いた"
        elif last == 'ぐ':
            forms["te"] = stem + "いで"
            forms["ta"] = stem + "いだ"
        elif last == 'す':
            forms["te"] = stem + "して"
            forms["ta"] = stem + "した"
            
        u_to_e = {'う':'え', 'く':'け', 'ぐ':'げ', 'す':'せ', 'つ':'て', 'ぬ':'ね', 'ぶ':'べ', 'む':'め', 'る':'れ'}
        forms["potential"] = stem + u_to_e[last] + "る"
        forms["ba"] = stem + u_to_e[last] + "ば"
        
        u_to_o = {'う':'お', 'く':'こ', 'ぐ':'ご', 'す':'そ', 'つ':'と', 'ぬ':'の', 'ぶ':'ぼ', 'む':'め', 'る':'ろ'}
        forms["volitional"] = stem + u_to_o[last] + "う"
        
    forms["te_iru"] = forms["te"] + "いる"
    forms["te_kudasai"] = forms["te"] + "ください"
    
    return {
        "dictionary": v,
        "kanji": kanji,
        "vietnamese": vn,
        "group": group,
        "forms": forms
    }

entries = [generate_verb_entry(v, k, vn, g) for (v, k, vn, g) in verbs_to_add]

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Append entries to VERB_CONJUGATION_DATA.verbs
# Find the end of VERB_CONJUGATION_DATA.verbs
# It ends with:
#       forms: {
#         nai: "しない", masu: "します", dictionary: "する", potential: "できる", ba: "すれば", volitional: "しよう", te: "して", te_iru: "している", te_kudasai: "してください", ta: "した"
#       }
#     }
#   ]
# };

verbs_js = ",\n" + ",\n".join([
    f"    {{\n"
    f"      dictionary: {json.dumps(e['dictionary'], ensure_ascii=False)}, "
    f"kanji: {json.dumps(e['kanji'], ensure_ascii=False)}, "
    f"vietnamese: {json.dumps(e['vietnamese'], ensure_ascii=False)}, "
    f"group: {e['group']},\n"
    f"      forms: {{\n"
    f"        nai: {json.dumps(e['forms']['nai'], ensure_ascii=False)}, "
    f"masu: {json.dumps(e['forms']['masu'], ensure_ascii=False)}, "
    f"dictionary: {json.dumps(e['forms']['dictionary'], ensure_ascii=False)}, "
    f"potential: {json.dumps(e['forms']['potential'], ensure_ascii=False)}, "
    f"ba: {json.dumps(e['forms']['ba'], ensure_ascii=False)}, "
    f"volitional: {json.dumps(e['forms']['volitional'], ensure_ascii=False)}, "
    f"te: {json.dumps(e['forms']['te'], ensure_ascii=False)}, "
    f"te_iru: {json.dumps(e['forms']['te_iru'], ensure_ascii=False)}, "
    f"te_kudasai: {json.dumps(e['forms']['te_kudasai'], ensure_ascii=False)}, "
    f"ta: {json.dumps(e['forms']['ta'], ensure_ascii=False)}\n"
    f"      }}\n"
    f"    }}"
    for e in entries
])

target_marker = 'dictionary: "する", potential: "できる", ba: "すれば", volitional: "しよう", te: "して", te_iru: "している", te_kudasai: "してください", ta: "した"\n      }\n    }'
if target_marker not in data_content:
    print("Warning: target marker not exact match, searching regex")
    target_match = re.search(r'dictionary:\s*"する"[\s\S]*?ta:\s*"した"\s*\n\s*\}\s*\n\s*\}', data_content)
    if target_match:
        pos = target_match.end()
        data_content = data_content[:pos] + verbs_js + data_content[pos:]
    else:
        print("Error: Could not locate end of verbs")
        exit(1)
else:
    pos = data_content.find(target_marker) + len(target_marker)
    data_content = data_content[:pos] + verbs_js + data_content[pos:]

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print(f"Added {len(entries)} conjugated verbs to VERB_CONJUGATION_DATA.verbs!")
