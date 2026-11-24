# Cover Page Builder

A lab report cover page generator for students of Hajee Mohammad Danesh Science and Technology University (HSTU). It runs in the browser from **one HTML file**, so it works offline and needs no installation.

[**⬇ Download index.html**](https://github.com/bhujonggoroy/Cover-Page-Builder/releases/latest/download/index.html)

---

## Features

- Live A4 preview with 5 cover layouts (Classic, Modern, Minimal, Formal, New design)
- Faculty → Department → Teacher → Designation auto-fill, with 400+ teachers from 8 faculties
- Course code list with the course title filled in automatically
- Every field stays editable, including a custom department and a custom designation
- Custom dropdowns and a bottom sheet, designed for phones as well as desktops
- Logo upload (resized and re-encoded, so EXIF metadata is removed)
- One-click PDF download

---

## How to download (only the `index.html` file)

You do **not** need to download the whole repository or a ZIP. You only need one file: `index.html`.

### Method 1: Releases (easiest, works on phone and PC)

1. Click the **⬇ Download index.html** button at the top of this page.
   Or open the **Releases** section on the right side of this page, then under **Assets** click `index.html`.
2. The file is saved to your **Downloads** folder.

### Method 2: Download raw file (PC)

1. Open `index.html` in this repository.
2. Click the **Download raw file** button (the ⬇ icon in the file toolbar, near the top right of the file view).
3. The file is saved to your **Downloads** folder.

> GitHub sometimes moves its buttons around. On a small screen the button may be inside the **⋯** menu.

### Do not do this

- Do not copy and paste the code from the page. The file contains embedded fonts, a PDF library and images, so it is very large.
- Do not use "Save page as" on the GitHub page itself. That saves GitHub's page, not the generator.

---

## How to use

1. Open **Downloads** and open `index.html` with **Chrome, Edge, Firefox or Safari**.
   - On a phone, open it from the **Files / Downloads** app and choose your browser.
   - Avoid opening it straight from a WhatsApp or Messenger preview, because the browser may not remember your layout choice.
2. Fill in the form. The cover updates live in the preview.
3. Press **Download Cover PDF**, check the summary, and confirm.

It works **without internet** once the file is on your device.

---

## Version dropdown

At the top right of the **Cover Builder** header, the **Version** dropdown shows whether you are using **Online** or **Offline** and lets you switch or install at any time:

- **Online**: Opens the hosted online site (does nothing if you are already on it).
- **Offline**: Downloads the single self-contained `index.html` file from the latest release while keeping the current page open.
- **Install WebApp (Online)**: Installs Cover Builder as an app (PWA) so it also works offline after the first visit. Installing works only from the online site—choosing this from the offline file opens the online site so you can install it there.

---

## Privacy and security

- Works offline: fonts, the PDF library, the logo and the teacher data are all inside the file
- Strict Content-Security-Policy: only lets the app's own site provide the service worker, the web app manifest and the icons when hosted online, while `connect-src 'none'` ensures the page itself still makes no network requests
- No cookies and no analytics. Only your layout choice is saved in `localStorage`
- The page reloads after use, so no student data stays on screen

## Note about teacher data

Teacher names and designations come from the public HSTU faculty pages. Some of the lists were compiled by hand and may be out of date. Please check them against the official site before formal use. Every field is editable, so you can correct any name or designation yourself.

---

# বাংলায় নির্দেশনা

## শুধু `index.html` ফাইলটা ডাউনলোড করবেন যেভাবে

পুরো রিপোজিটরি বা ZIP ডাউনলোড করার দরকার নেই। শুধু একটা ফাইল লাগবে: `index.html`।

### পদ্ধতি ১: Releases (সবচেয়ে সহজ, ফোন আর পিসি দুটোতেই চলে)

1. এই পেজের উপরের **⬇ Download index.html** বাটনে ক্লিক করুন।
   অথবা পেজের ডান পাশে **Releases** অংশ খুলুন, তারপর **Assets**-এর নিচে `index.html`-এ ক্লিক করুন।
2. ফাইলটা আপনার **Downloads** ফোল্ডারে সেভ হবে।

### পদ্ধতি ২: Download raw file (পিসিতে)

1. রিপোজিটরিতে `index.html` ফাইলটা খুলুন।
2. ফাইলের উপরের ডান দিকের টুলবারে **Download raw file** (⬇ আইকন) বাটনে ক্লিক করুন।
3. ফাইলটা **Downloads** ফোল্ডারে সেভ হবে।

> ছোট স্ক্রিনে বাটনটা **⋯** মেনুর ভেতরে থাকতে পারে।

### যা করবেন না

- পেজ থেকে কোড কপি-পেস্ট করবেন না। ফাইলে ফন্ট, PDF লাইব্রেরি আর ছবি এমবেড করা আছে, তাই এটা অনেক বড়।
- GitHub-এর পেজে "Save page as" করবেন না। এতে জেনারেটর নয়, GitHub-এর পেজ সেভ হয়।

## ব্যবহার করার নিয়ম

1. **Downloads** থেকে `index.html` ফাইলটা **Chrome, Edge, Firefox বা Safari** দিয়ে খুলুন।
   - ফোনে **Files / Downloads** অ্যাপ থেকে ফাইলটা খুলে ব্রাউজার বেছে নিন।
   - WhatsApp বা Messenger-এর প্রিভিউ থেকে সরাসরি খুলবেন না, কারণ তাতে ব্রাউজার আপনার Layout-এর পছন্দ মনে রাখতে নাও পারে।
2. ফর্ম পূরণ করুন। প্রিভিউতে কভার সাথে সাথে বদলাবে।
3. **Download Cover PDF** চাপুন, সারাংশ দেখে নিশ্চিত করুন।

ফাইলটা একবার ডিভাইসে নামানো হলে **ইন্টারনেট ছাড়াই** চলে।

## শিক্ষকের তথ্য নিয়ে একটা কথা

শিক্ষকদের নাম আর পদবি HSTU-র পাবলিক ফ্যাকাল্টি পেজ থেকে নেওয়া। কিছু তালিকা হাতে সংকলন করা, তাই পুরনো হতে পারে। আনুষ্ঠানিক কাজে ব্যবহারের আগে অফিসিয়াল সাইটের সাথে মিলিয়ে নিন। সব ফিল্ডই এডিট করা যায়, তাই নাম বা পদবি নিজেই ঠিক করে নিতে পারবেন।



