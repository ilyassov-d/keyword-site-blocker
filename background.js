const BLOCKED_PAGE = chrome.runtime.getURL('blocked.html');

function normalizeKeyword(keyword) {
  return keyword.trim().toLowerCase();
}

function shouldIgnoreUrl(url) {
  return (
    !url ||
    url.startsWith('chrome://') ||
    url.startsWith('chrome-extension://') ||
    url.startsWith('edge://') ||
    url.startsWith('about:') ||
    url.startsWith(BLOCKED_PAGE)
  );
}

async function getKeywords() {
  const { keywords = [] } = await chrome.storage.sync.get({ keywords: [] });
  return keywords.map(normalizeKeyword).filter(Boolean);
}

function urlContainsKeyword(url, keywords) {
  const lowerUrl = decodeURIComponent(url).toLowerCase();
  return keywords.find((keyword) => lowerUrl.includes(keyword));
}

chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
  if (details.frameId !== 0 || shouldIgnoreUrl(details.url)) return;

  const keywords = await getKeywords();
  if (keywords.length === 0) return;

  const matchedKeyword = urlContainsKeyword(details.url, keywords);
  if (!matchedKeyword) return;

  const blockedUrl = `${BLOCKED_PAGE}?keyword=${encodeURIComponent(matchedKeyword)}&url=${encodeURIComponent(details.url)}`;
  await chrome.tabs.update(details.tabId, { url: blockedUrl });
});
