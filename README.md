# HSTU Cover Generator

A lab report cover page generator for students of Hajee Mohammad Danesh Science and Technology University (HSTU). It runs entirely in the browser from one HTML file, so it works offline and needs no installation.

## Features
- Live A4 preview with 5 cover layouts (Classic, Modern, Minimal, Formal, New design)
- Faculty → Department → Teacher → Designation auto-fill, with 400+ teachers from 8 faculties
- Course code list with auto-filled course title
- Every field is editable, including custom department and designation
- Custom dropdowns and a bottom sheet, designed for phones as well as desktops
- Logo upload (resized and re-encoded, so EXIF metadata is removed)
- One-click PDF download

## Privacy and security
- Works offline: fonts, PDF library, logo and teacher data are all embedded
- Strict Content-Security-Policy (`connect-src 'none'`), so the page cannot make network requests
- No cookies and no analytics. Only your layout choice is saved in `localStorage`
- The page reloads after use, so no student data stays on screen

## Usage
Download `index.html` and open it in any modern browser.

