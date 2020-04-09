if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        r[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const r = document.createElement("script");
              (r.src = e), document.head.appendChild(r), (r.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!r[e]) throw new Error(`Module ${e} didn’t register its module`);
          return r[e];
        })
      );
    },
    s = (s, r) => {
      Promise.all(s.map(e)).then((e) => r(1 === e.length ? e[0] : e));
    },
    r = { require: Promise.resolve(s) };
  self.define = (s, i, n) => {
    r[s] ||
      (r[s] = Promise.resolve().then(() => {
        let r = {};
        const a = { uri: location.origin + s.slice(1) };
        return Promise.all(
          i.map((s) => {
            switch (s) {
              case "exports":
                return r;
              case "module":
                return a;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = n(...e);
          return r.default || (r.default = s), r;
        });
      }));
  };
}
define("./sw.js", ["./workbox-a47805b1"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        {
          url: "assets/blank.png",
          revision: "83065c6a95d8a7b339f3e32be233fedc",
        },
        {
          url: "assets/buggs bunny.png",
          revision: "7d779102a6b9f2104de7fa58e3423ee0",
        },
        { url: "assets/cat.png", revision: "95cb7bceace129e92444f8492cc3abd5" },
        {
          url: "assets/heart.png",
          revision: "f9083fa23bde74baa20aa9d7709ab010",
        },
        {
          url: "assets/question mark.png",
          revision: "d553e0f457709b6aa50940963c32f4c4",
        },
        {
          url: "assets/smile.png",
          revision: "c2c2849628702138aa3683e1989bf4c2",
        },
        {
          url: "assets/sword.png",
          revision: "6474ce14e8a3d692df8f1308a5faac13",
        },
        {
          url: "assets/watermelon.png",
          revision: "c92cf0dc6d42bbb372357376114dc148",
        },
        { url: "css/app.css", revision: "5967487f9dc3cc98d408383f117551ed" },
        { url: "index.html", revision: "51bf268d7b7ee00d80042442e290628e" },
        { url: "js/app.js", revision: "8e81ee4406f8a33cb1c9225205e99a70" },
      ],
      {}
    );
});
//# sourceMappingURL=sw.js.map
