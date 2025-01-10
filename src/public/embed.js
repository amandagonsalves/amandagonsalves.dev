(function (C, A, L) {
  let p = function (a, ar) {
    a.q.push(ar);
  };
  
  let d = C.document;
  
  C.Cal = C.Cal || function () {
    let cal = C.Cal;
    let ar = arguments;
    
    if (!cal.loaded) {
      cal.ns = {};
      cal.q = cal.q || [];
      d.head.appendChild(d.createElement("script")).src = A;
      cal.loaded = true;
    }
    
    if (ar[0] === L) {
      const api = function () {
        p(api, arguments);
      };
      
      const namespace = ar[1];
      api.q = api.q || [];
      
      if (typeof namespace === "string") {
        cal.ns[namespace] = cal.ns[namespace] || api;
        p(cal.ns[namespace], ar);
        p(cal, ["initNamespace", namespace]);
      } else {
        p(cal, ar);
      }
      
      return;
    }
    
    p(cal, ar);
  };
})(window, "https://app.cal.com/embed/embed.js", "init");

Cal("init", "general", {
  origin: "https://cal.com"
});

Cal.ns["general"]("inline", {
  elementOrSelector: "#book-a-call",
  config: {
    "layout": "column_view",
    "theme": "light"
  },
  calLink: "amandagonsalves",
});

Cal.ns["general"]("ui", {
  "theme": "light",
  "cssVarsPerTheme": {
    "light": {
			"cal-brand": "#e94560",
			"cal-bg-emphasis": "#efefef73",
			"cal-bg-muted": "#efefef73",
			"cal-border-booker": "#fff",
			"cal-border-subtle": "#efefef73",
    }
  },
  "hideEventTypeDetails": false,
  "layout": "month_view"
});
