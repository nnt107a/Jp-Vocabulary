# -*- coding: utf-8 -*-
import json

def conjugate_verb(verb_dict, kanji, vn, group, special_note=None):
    # dictionary is in hiragana, e.g. "あらう", "いく", "たべる", "する", "くる"
    v = verb_dict
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
            prefix = v[:-2] # e.g. "さんか" for "さんかする"
            forms["masu"] = prefix + "します"
            forms["nai"] = prefix + "しない"
            forms["te"] = prefix + "して"
            forms["ta"] = prefix + "した"
            forms["potential"] = prefix + "できる"
            forms["ba"] = prefix + "すれば"
            forms["volitional"] = prefix + "しよう"
    elif group == 2:
        stem = v[:-1] # remove る
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
        
        # masu (u -> i)
        u_to_i = {'う':'い', 'く':'き', 'ぐ':'ぎ', 'す':'し', 'つ':'ち', 'ぬ':'に', 'ぶ':'び', 'む':'み', 'る':'り'}
        forms["masu"] = stem + u_to_i[last] + "ます"
        
        # nai (u -> a, but う -> わ)
        u_to_a = {'う':'わ', 'く':'か', 'ぐ':'が', 'す':'さ', 'つ':'た', 'ぬ':'な', 'ぶ':'ば', 'む':'ま', 'る':'ら'}
        if v == "ある":
            forms["nai"] = "ない"
        else:
            forms["nai"] = stem + u_to_a[last] + "ない"
            
        # te & ta
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
            
        # potential (u -> e)
        u_to_e = {'う':'え', 'く':'け', 'ぐ':'げ', 'す':'せ', 'つ':'て', 'ぬ':'ね', 'ぶ':'べ', 'む':'め', 'る':'れ'}
        forms["potential"] = stem + u_to_e[last] + "る"
        
        # ba (u -> e + ba)
        forms["ba"] = stem + u_to_e[last] + "ば"
        
        # volitional (u -> o + u)
        u_to_o = {'う':'お', 'く':'こ', 'ぐ':'ご', 'す':'そ', 'つ':'と', 'ぬ':'の', 'ぶ':'ぼ', 'む':'も', 'る':'ろ'}
        forms["volitional"] = stem + u_to_o[last] + "う"
        
    forms["te_iru"] = forms["te"] + "いる"
    forms["te_kudasai"] = forms["te"] + "ください"
    
    res = {
        "dictionary": v,
        "kanji": kanji,
        "vietnamese": vn,
        "group": group,
        "forms": forms
    }
    if special_note:
        res["note"] = special_note
    return res

print("Conjugation test for いく:", conjugate_verb("いく", "行く", "Đi", 1, "Ngoại lệ: いって / いった"))
print("Conjugation test for はなす:", conjugate_verb("はなす", "話す", "Nói chuyện", 1))
print("Conjugation test for たべる:", conjugate_verb("たべる", "食べる", "Ăn", 2))
print("Conjugation test for べんきょうする:", conjugate_verb("べんきょうする", "勉強する", "Học", 3))
print("Conjugation test for くる:", conjugate_verb("くる", "来る", "Đến", 3))
