import { PRODUCTION_URL } from "@/config/site";

// IndexNow lets Bing, Yandex and other participating engines index new/changed
// URLs within minutes instead of waiting for a crawl. The key below must match
// the filename served at PRODUCTION_URL/<KEY>.txt (see public/<KEY>.txt).
// To rotate the key: change this value AND rename that file to match.
export const INDEXNOW_KEY = "b3f9a1c7d2e84605f8a9c1b2d3e4f506";

/**
 * Submit up to 10,000 URLs to IndexNow. Best-effort: returns false on any error
 * and never throws, so it can't break the caller. Call it after publishing or
 * updating content (e.g. from a deploy hook, a cron route, or a CMS webhook).
 */
export async function submitToIndexNow(urls: string[]): Promise<boolean> {
  const list = urls.filter(Boolean).slice(0, 10000);
  if (!list.length) return false;

  let host: string;
  try {
    host = new URL(PRODUCTION_URL).host;
  } catch {
    return false;
  }

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation: `${PRODUCTION_URL}/${INDEXNOW_KEY}.txt`,
        urlList: list,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
