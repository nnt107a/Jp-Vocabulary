from html.parser import HTMLParser

class TagTracer(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.void_elements = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}

    def handle_starttag(self, tag, attrs):
        if tag not in self.void_elements:
            attr_dict = dict(attrs)
            id_val = attr_dict.get('id', '')
            class_val = attr_dict.get('class', '')
            self.stack.append((tag, id_val, class_val, self.getpos()))

    def handle_endtag(self, tag):
        if tag in self.void_elements:
            return
        if self.stack and self.stack[-1][0] == tag:
            self.stack.pop()
        else:
            print(f"Mismatch at line {self.getpos()[0]}: found </{tag}> but expected </{self.stack[-1][0]}> (opened at line {self.stack[-1][3][0]} id={self.stack[-1][1]} class={self.stack[-1][2]})")

with open(r"d:\CODE\Random\Jp-Vocabulary\index.html", "r", encoding="utf-8") as f:
    content = f.read()

parser = TagTracer()
parser.feed(content)
print("\nUnclosed tags:")
for t in parser.stack:
    print(f"Tag <{t[0]}> opened at line {t[3][0]} with id='{t[1]}' class='{t[2]}'")
