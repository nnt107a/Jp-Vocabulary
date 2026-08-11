// Debug trace of how stripVietnameseAccents processes "âta"
let s = 'âta';
s = s.normalize('NFC').replace(/\s+/g, '');
console.log('Step 0 (NFC):', JSON.stringify(s), 'len:', s.length);

// The regex â([cons]) replaces â followed by consonant 
// âta -> â matches, t is captured as cons group, the 'a' after is NOT part of the match
// So â([bcdfg...]) only matches "ât", replaces with "ata" 
// Leaving the original trailing "a" -> result is "ata" + "a" = "ataa"
let test = s.replace(/â([bcdfghjklmnpqrstvwxyz])/gi, 'a$1a');
console.log('After â+cons regex:', JSON.stringify(test));
// This is THE BUG! "âta" -> "ataa" instead of "ata"
// The regex replaces "ât" with "ata" (a + t + a), but the original trailing "a" remains
// So we get "ata" + "a" = "ataa"

// What we REALLY want:
// â followed by consonant followed by vowel (a,e,i,o,u) -> should drop the circumflex
// Because UniKey produced â from the user typing "aa", and the consonant+vowel after it
// means the user was typing a<cons><vowel> pattern

// The fix: â followed by consonant should just become "a" + consonant (not "a" + consonant + "a")
// Because the vowel after the consonant already exists in the string
let fixed = s.replace(/â([bcdfghjklmnpqrstvwxyz])/gi, 'a$1');
console.log('Fixed â+cons regex:', JSON.stringify(fixed));

// But wait - what about standalone ô at end of string like "kô"? That should be "koo"
// We need: â/ô/ê followed by consonant -> just strip circumflex (a/o/e + cons)
// And: â/ô/ê at end of string or before vowel -> double the vowel (aa/oo/ee)

// Let's also check ôto
let s2 = 'ôto';
s2 = s2.normalize('NFC').replace(/\s+/g, '');
let test2 = s2.replace(/ô([bcdfghjklmnpqrstvwxyz])/gi, 'o$1o');
console.log('\n"ôto" after ô+cons regex:', JSON.stringify(test2), '(should be "oto" not "otoo")');
let fixed2 = s2.replace(/ô([bcdfghjklmnpqrstvwxyz])/gi, 'o$1');
console.log('"ôto" fixed:', JSON.stringify(fixed2));

// And kâta
let s3 = 'kâta';
s3 = s3.normalize('NFC').replace(/\s+/g, '');
let test3 = s3.replace(/â([bcdfghjklmnpqrstvwxyz])/gi, 'a$1a');
console.log('\n"kâta" after â+cons regex:', JSON.stringify(test3), '(should be "kata" not "kataa")');
let fixed3 = s3.replace(/â([bcdfghjklmnpqrstvwxyz])/gi, 'a$1');
console.log('"kâta" fixed:', JSON.stringify(fixed3));

// Now let's check: does the "nn" -> ん issue stem from WanaKana?
const wanakana = require('./scratch/node_modules/wanakana');
console.log('\nwanakana.toHiragana("kann"):', wanakana.toHiragana('kann'));
console.log('wanakana.toHiragana("kan"):', wanakana.toHiragana('kan'));
console.log('wanakana.toHiragana("kn"):', wanakana.toHiragana('kn'));
