---

<p align="center">
  <img src="icons/icon128.png" width="120">
</p>

<h1 align="center">Keyword Site Blocker</h1>

A lightweight and minimal browser extension that helps users avoid unwanted websites by blocking URLs containing custom keywords.

## Features

- Minimal and distraction-free UI
- Add multiple keywords to block
- Persistent storage using browser local storage
- Automatic URL detection
- Custom blocked page instead of the original website
- Fast and lightweight
- No account, tracking, or external dependencies

## How It Works

The extension monitors navigation requests. Whenever the URL of a website contains one of the user-defined keywords, the original page is prevented from loading and a custom block page is shown instead.

### Example

Keywords:

```
youtube
twitter
reddit
```

Blocked URLs:

- `https://youtube.com`
- `https://www.reddit.com/r/programming`
- `https://twitter.com/home`
- `https://news.example.com/youtube-review`


## Installation

### Chrome / Edge

1. Download or clone this repository:

```bash
git clone https://github.com/ilyassov-d/keyword-site-blocker.git
```

2. Open:

```
chrome://extensions
```

3. Enable **Developer mode**.

4. Click **Load unpacked**.

5. Select the extension folder.

The extension will now appear in your browser toolbar.

## Usage

1. Click the extension icon.
2. Enter one or more keywords.
3. Save the list.
4. Whenever you visit a website whose URL contains one of those keywords, the page will be replaced with a blocked screen.

## Privacy

This extension:

- Does not collect data.
- Does not send information to external servers.
- Does not require an account.
- Stores all settings locally on the user's device.

## License

MIT License

---
