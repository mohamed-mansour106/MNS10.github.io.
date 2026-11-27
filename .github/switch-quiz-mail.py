#!/usr/bin/env python3
"""Switch quiz result emails from EmailJS set B to the OFU Google Apps Script mailer.
Only edits Courses/*/Quiz/script.js whose EmailJS public key equals the one in Heater/Quiz/script.js.
Replaces only the body of sendQuizResultEmail(). Old EmailJS config lines stay. Bank, other sets and Exam pages untouched."""
import os, re, sys
URL = "https://script.google.com/macros/s/AKfycbyqeYWre8BPTqTcQskjXSfNjlL4hDOmIHBdy670HHUHnv1En1Mv3HebDNYV08OIoWicXA/exec"
dry = len(sys.argv) > 1 and sys.argv[1] == "dry"
ROOT = "branchsites/SWT-Community/Learn/Courses"
KEY = re.compile(r'publicKey:\s*"([^"]+)"')
ref = KEY.search(open(f"{ROOT}/Heater/Quiz/script.js", encoding="utf-8").read()).group(1)
NEW = '''function sendQuizResultEmail({ userName, userEmail, scorePercent, scoreRaw, courseName }) {
  // Sends the result to the OFU Google Apps Script mailer (one email to the owner).
  try {
    fetch("%s", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        name: userName,
        result: `${scoreRaw} (${scorePercent}%%)`,
        course: courseName,
        time: new Date().toISOString()
      }),
      keepalive: true
    }).catch(() => {});
  } catch (err) {
    console.error("Result email failed:", err);
  }
}''' % URL
changed, skipped, errs = [], [], []
for d in sorted(os.listdir(ROOT)):
    p = f"{ROOT}/{d}/Quiz/script.js"
    if not os.path.isfile(p): continue
    raw = open(p, "rb").read(); s = raw.decode("utf-8")
    m = KEY.search(s)
    if not m or m.group(1) != ref or "function sendQuizResultEmail(" in s and URL in s:
        skipped.append(d); continue
    a = s.index("function sendQuizResultEmail(")
    b = s.index("\n}\n", a) + 2
    nl = "\r\n" if "\r\n" in s else "\n"
    new = s[:a] + NEW.replace("\n", nl) + s[b:]
    if new.count("function sendQuizResultEmail(") != 1: errs.append(d); continue
    if not dry: open(p, "wb").write(new.encode("utf-8"))
    changed.append(d)
print(f"changed={len(changed)} skipped_other_sets={len(skipped)} errors={len(errs)}")
print("CHANGED", " ".join(changed)); print("SKIPPED", " ".join(skipped)); print("ERRORS", errs)
