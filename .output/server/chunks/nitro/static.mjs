import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';
import { c as buildAssetsDir } from './server.mjs';
import 'unenv/runtime/polyfill/fetch.node';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'unenv/runtime/fetch/index';
import 'defu';

const assets = {
  "/README.md": {
    "type": "text/markdown; charset=utf-8",
    "etag": "\"4b-XNjxODUTB5dZhkZswkbfs15PsxU\"",
    "mtime": "2022-02-04T14:41:15.422Z",
    "path": "../public/README.md"
  },
  "/_nuxt/Calendar-21eefd95.mjs": {
    "type": "application/javascript",
    "etag": "\"3be-4zlXkHlsMzM7iha3ooK3OwM3ktk\"",
    "mtime": "2022-02-04T14:41:15.451Z",
    "path": "../public/_nuxt/Calendar-21eefd95.mjs"
  },
  "/_nuxt/Calendar.a82d7785.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"377-tefrZqB2ZKiWC1/pgwn+JvGDvAQ\"",
    "mtime": "2022-02-04T14:41:15.451Z",
    "path": "../public/_nuxt/Calendar.a82d7785.css"
  },
  "/_nuxt/CalendarItem-f37da6cf.mjs": {
    "type": "application/javascript",
    "etag": "\"1c3-XNLzJmQmuM6Rr9RqtKomVlG9eSk\"",
    "mtime": "2022-02-04T14:41:15.450Z",
    "path": "../public/_nuxt/CalendarItem-f37da6cf.mjs"
  },
  "/_nuxt/CalendarItem.65bcd88c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c9-xR+BUUc4Xy/jb9CqbQiyocuZwl0\"",
    "mtime": "2022-02-04T14:41:15.450Z",
    "path": "../public/_nuxt/CalendarItem.65bcd88c.css"
  },
  "/_nuxt/DailyTask-e4058c15.mjs": {
    "type": "application/javascript",
    "etag": "\"23f-yRab7s6yD68K62l6qsmlNsphM8g\"",
    "mtime": "2022-02-04T14:41:15.449Z",
    "path": "../public/_nuxt/DailyTask-e4058c15.mjs"
  },
  "/_nuxt/DailyTask.b90b9833.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a1-qpUyHx5aEG04mW5Wc59JoDHTjAQ\"",
    "mtime": "2022-02-04T14:41:15.449Z",
    "path": "../public/_nuxt/DailyTask.b90b9833.css"
  },
  "/_nuxt/DailyTaskItem-7e1c0255.mjs": {
    "type": "application/javascript",
    "etag": "\"18e-0GDHkv8lzC3NZWjKvCqbMConTec\"",
    "mtime": "2022-02-04T14:41:15.448Z",
    "path": "../public/_nuxt/DailyTaskItem-7e1c0255.mjs"
  },
  "/_nuxt/DailyTaskItem.dcdb820a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d6-ihuOXqX9haUa+KoFSGMOrf2cjKs\"",
    "mtime": "2022-02-04T14:41:15.448Z",
    "path": "../public/_nuxt/DailyTaskItem.dcdb820a.css"
  },
  "/_nuxt/Header-029a2bfd.mjs": {
    "type": "application/javascript",
    "etag": "\"5b9-eiD9TodTK4fg4da+V9Dilw0Ff7A\"",
    "mtime": "2022-02-04T14:41:15.447Z",
    "path": "../public/_nuxt/Header-029a2bfd.mjs"
  },
  "/_nuxt/Header.68d3988b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2eb-j3472mmPIM5+aF5HqJjvjw41yro\"",
    "mtime": "2022-02-04T14:41:15.447Z",
    "path": "../public/_nuxt/Header.68d3988b.css"
  },
  "/_nuxt/Meetings-af5151bb.mjs": {
    "type": "application/javascript",
    "etag": "\"1d4-WgUabKrgQc7oNOR7Pqx1bTkRb80\"",
    "mtime": "2022-02-04T14:41:15.446Z",
    "path": "../public/_nuxt/Meetings-af5151bb.mjs"
  },
  "/_nuxt/Meetings.7d356f37.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"cc-uniTjewjkrMfRzDmXHu7ENbjsbw\"",
    "mtime": "2022-02-04T14:41:15.446Z",
    "path": "../public/_nuxt/Meetings.7d356f37.css"
  },
  "/_nuxt/MeetingsItem-5bbc4084.mjs": {
    "type": "application/javascript",
    "etag": "\"236-bhCZMoHN7rNdH68SNTtAlIwSSoA\"",
    "mtime": "2022-02-04T14:41:15.445Z",
    "path": "../public/_nuxt/MeetingsItem-5bbc4084.mjs"
  },
  "/_nuxt/MeetingsItem.98eb9b92.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3a5-Ov89qKn1yr3kwyTTPu8sv/2nU04\"",
    "mtime": "2022-02-04T14:41:15.445Z",
    "path": "../public/_nuxt/MeetingsItem.98eb9b92.css"
  },
  "/_nuxt/Shared-97062b78.mjs": {
    "type": "application/javascript",
    "etag": "\"1e1-xAT7yKH/3DBFtkvhYYe9b0hA2Jc\"",
    "mtime": "2022-02-04T14:41:15.444Z",
    "path": "../public/_nuxt/Shared-97062b78.mjs"
  },
  "/_nuxt/Shared.1a1a2677.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-n+LOhvKTtlBt9IeLWLr4jE+MJxo\"",
    "mtime": "2022-02-04T14:41:15.444Z",
    "path": "../public/_nuxt/Shared.1a1a2677.css"
  },
  "/_nuxt/SharedItem-c880afb4.mjs": {
    "type": "application/javascript",
    "etag": "\"219-QzET/yfYcCFZf0Z9i7hK2vX+714\"",
    "mtime": "2022-02-04T14:41:15.443Z",
    "path": "../public/_nuxt/SharedItem-c880afb4.mjs"
  },
  "/_nuxt/SharedItem.834450fe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"287-jkXanGOBMoFsTzHGhZdbOLl/Yp4\"",
    "mtime": "2022-02-04T14:41:15.441Z",
    "path": "../public/_nuxt/SharedItem.834450fe.css"
  },
  "/_nuxt/UserInfo-d1f9765b.mjs": {
    "type": "application/javascript",
    "etag": "\"300-NMFCcpkJ4IFDNtXQIJCYoZfXclQ\"",
    "mtime": "2022-02-04T14:41:15.437Z",
    "path": "../public/_nuxt/UserInfo-d1f9765b.mjs"
  },
  "/_nuxt/UserInfo.08a45152.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"429-tL33w6Ty3E4GlOiPzk83JKJFFJQ\"",
    "mtime": "2022-02-04T14:41:15.432Z",
    "path": "../public/_nuxt/UserInfo.08a45152.css"
  },
  "/_nuxt/Welcome-1fb3ab4a.mjs": {
    "type": "application/javascript",
    "etag": "\"1cd-J7XBQMElHZEE+HA3AeaziE/FiX8\"",
    "mtime": "2022-02-04T14:41:15.432Z",
    "path": "../public/_nuxt/Welcome-1fb3ab4a.mjs"
  },
  "/_nuxt/Welcome.d8c0caf0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"233-ZAegoavI+8uDuJDhArme4/uOa7k\"",
    "mtime": "2022-02-04T14:41:15.431Z",
    "path": "../public/_nuxt/Welcome.d8c0caf0.css"
  },
  "/_nuxt/about-d1dee09a.mjs": {
    "type": "application/javascript",
    "etag": "\"e7-HkpMp3ZDGpxV0cqOGDdSoI+ajIw\"",
    "mtime": "2022-02-04T14:41:15.431Z",
    "path": "../public/_nuxt/about-d1dee09a.mjs"
  },
  "/_nuxt/bank-584c12aa.mjs": {
    "type": "application/javascript",
    "etag": "\"aa-TsWFm7adiU/ywzG/CcqzqPbPpuw\"",
    "mtime": "2022-02-04T14:41:15.430Z",
    "path": "../public/_nuxt/bank-584c12aa.mjs"
  },
  "/_nuxt/bootstrap-8f944e24.mjs": {
    "type": "application/javascript",
    "etag": "\"1cd64-fTmUQuHfcNp6GNWQezvN/b+rHQ8\"",
    "mtime": "2022-02-04T14:41:15.430Z",
    "path": "../public/_nuxt/bootstrap-8f944e24.mjs"
  },
  "/_nuxt/bootstrap.8d933489.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c3-X29skibE2yDfRHhxPDNLvBQqY9I\"",
    "mtime": "2022-02-04T14:41:15.429Z",
    "path": "../public/_nuxt/bootstrap.8d933489.css"
  },
  "/_nuxt/default-ead67337.mjs": {
    "type": "application/javascript",
    "etag": "\"134-5O6PaiWkt2l1g+BiS9L9nsgvFrw\"",
    "mtime": "2022-02-04T14:41:15.429Z",
    "path": "../public/_nuxt/default-ead67337.mjs"
  },
  "/_nuxt/default.2b969e7b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"69-BPZvdBJYET6Yxe2q0mXZeWa9frw\"",
    "mtime": "2022-02-04T14:41:15.428Z",
    "path": "../public/_nuxt/default.2b969e7b.css"
  },
  "/_nuxt/docs-88a9e14a.mjs": {
    "type": "application/javascript",
    "etag": "\"a0-ZqoxlvavpscxNdjIAZOzK+JFDZM\"",
    "mtime": "2022-02-04T14:41:15.428Z",
    "path": "../public/_nuxt/docs-88a9e14a.mjs"
  },
  "/_nuxt/entry-50f8712c.mjs": {
    "type": "application/javascript",
    "etag": "\"65-Mv9T+N84hj4gH2trArZgQWJejCY\"",
    "mtime": "2022-02-04T14:41:15.427Z",
    "path": "../public/_nuxt/entry-50f8712c.mjs"
  },
  "/_nuxt/index-58661a2c.mjs": {
    "type": "application/javascript",
    "etag": "\"4a9-WAODqnMsg2h8spkateYRABwhJiY\"",
    "mtime": "2022-02-04T14:41:15.426Z",
    "path": "../public/_nuxt/index-58661a2c.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"157d-h0Y0NscfKq32/lKCcg+6sgYlsA0\"",
    "mtime": "2022-02-04T14:41:15.425Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/message-50b63031.mjs": {
    "type": "application/javascript",
    "etag": "\"ca-zqcqYTeHY0xuAlAhZ10Vjwm3tX8\"",
    "mtime": "2022-02-04T14:41:15.425Z",
    "path": "../public/_nuxt/message-50b63031.mjs"
  },
  "/_nuxt/settings-bc79cbc9.mjs": {
    "type": "application/javascript",
    "etag": "\"ae-ezmaE7kxcJhCP97Y6oKUWg2BDsY\"",
    "mtime": "2022-02-04T14:41:15.424Z",
    "path": "../public/_nuxt/settings-bc79cbc9.mjs"
  },
  "/icons/bank.svg": {
    "type": "image/svg+xml",
    "etag": "\"350-ZwCM67kBaxqaiSS+juWaG6Ivv+o\"",
    "mtime": "2022-02-04T14:41:15.422Z",
    "path": "../public/icons/bank.svg"
  },
  "/icons/docs.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d9-qQN/i/vkT/eSU0O5gCvZkmnSVQM\"",
    "mtime": "2022-02-04T14:41:15.421Z",
    "path": "../public/icons/docs.svg"
  },
  "/icons/home.svg": {
    "type": "image/svg+xml",
    "etag": "\"3ca-SiTfnlWViWP/dF68GbmRakGiOMo\"",
    "mtime": "2022-02-04T14:41:15.420Z",
    "path": "../public/icons/home.svg"
  },
  "/icons/logout.svg": {
    "type": "image/svg+xml",
    "etag": "\"575-8Bk36id076FVJ1QxUXKDm5XfKOo\"",
    "mtime": "2022-02-04T14:41:15.419Z",
    "path": "../public/icons/logout.svg"
  },
  "/icons/message.svg": {
    "type": "image/svg+xml",
    "etag": "\"1cf-1bm0xaqm6IqiaANWpUqXDhML0Og\"",
    "mtime": "2022-02-04T14:41:15.419Z",
    "path": "../public/icons/message.svg"
  },
  "/icons/settings.svg": {
    "type": "image/svg+xml",
    "etag": "\"623-zw0w747L0oexqBeX8rgtPKN9lvw\"",
    "mtime": "2022-02-04T14:41:15.418Z",
    "path": "../public/icons/settings.svg"
  },
  "/icons/userSection/bell.svg": {
    "type": "image/svg+xml",
    "etag": "\"87b-+D+W1Cs/DLTD+G3iWqeEASx2N4M\"",
    "mtime": "2022-02-04T14:41:15.418Z",
    "path": "../public/icons/userSection/bell.svg"
  },
  "/icons/userSection/comment.svg": {
    "type": "image/svg+xml",
    "etag": "\"385-D+5i18ck1a6epy1hS+LswUbzgOk\"",
    "mtime": "2022-02-04T14:41:15.417Z",
    "path": "../public/icons/userSection/comment.svg"
  },
  "/icons/userSection/contactLogo.svg": {
    "type": "image/svg+xml",
    "etag": "\"1306-Y5oF9K6/0hME5yPZ2onVRVdCEss\"",
    "mtime": "2022-02-04T14:41:15.416Z",
    "path": "../public/icons/userSection/contactLogo.svg"
  },
  "/icons/userSection/folder.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d9-mjBBp/vs04cvMyY9vU4OqEjY1lw\"",
    "mtime": "2022-02-04T14:41:15.415Z",
    "path": "../public/icons/userSection/folder.svg"
  },
  "/icons/userSection/girl.svg": {
    "type": "image/svg+xml",
    "etag": "\"1201-dbeXBUDgOAZN5Ynr1idZJ6+Uz28\"",
    "mtime": "2022-02-04T14:41:15.415Z",
    "path": "../public/icons/userSection/girl.svg"
  },
  "/icons/userSection/sms.svg": {
    "type": "image/svg+xml",
    "etag": "\"19c-F6MU3CcRHr3Jmk4HSoFSeeOjksY\"",
    "mtime": "2022-02-04T14:41:15.414Z",
    "path": "../public/icons/userSection/sms.svg"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/_nuxt/Users/maksimbelfer/Desktop/Vue/dashboard/dist" + "/" + "1643985671";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  const isBuildAsset = id.startsWith(buildAssetsDir());
  if (!asset) {
    if (isBuildAsset && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (isBuildAsset) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
