#!/usr/bin/env python3
"""Add the GoatCounter visit counter to every real HTML page that lacks it.
Inserts one script tag right before the first </head>. Never touches anything else.
Skips: pages that already have it, redirect pages (meta refresh), fragments without </head>."""
import os, re, sys

TAG = '<script data-goatcounter="https://ofu-mansour.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>'
dry = len(sys.argv) > 1 and sys.argv[1] == "dry"
changed, had, redirect, nohead, errors = [], 0, [], [], []
for root, dirs, files in os.walk("."):
    dirs[:] = [d for d in dirs if d not in (".git", "node_modules", ".github")]
    for f in files:
        if not f.lower().endswith((".html", ".htm")):
            continue
        p = os.path.join(root, f)
        try:
            raw = open(p, "rb").read()
            s = raw.decode("utf-8", "surrogateescape")
            if "goatcounter" in s or "gc.zgo.at" in s:
                had += 1; continue
            if re.search(r'http-equiv=["\']?refresh', s, re.I):
                redirect.append(p); continue
            m = re.search(r"</head\s*>", s, re.I)
            if not m:
                nohead.append(p); continue
            nl = "\r\n" if "\r\n" in s else "\n"
            out = s[:m.start()] + TAG + nl + s[m.start():]
            if not dry:
                open(p, "wb").write(out.encode("utf-8", "surrogateescape"))
            changed.append(p)
        except Exception as e:
            errors.append((p, str(e)))
print(f"edited={len(changed)} already_had={had} skipped_redirect={len(redirect)} skipped_no_head={len(nohead)} errors={len(errors)}")
for p in redirect: print("REDIRECT", p)
for p in nohead: print("NOHEAD", p)
for p, e in errors: print("ERROR", p, e)
