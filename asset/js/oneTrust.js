function OptanonWrapper() {
var e = document.querySelector("body");
if (e.classList.contains("cookie-banner-active") && !1 === e.classList.contains("cookie-script-executed")) {
    let t = document.querySelectorAll(".responsiveVideo iframe[class^='optanon-category-'], .videoWrapper iframe[class^='optanon-category-'], .videowrapper iframe[class^='optanon-category-'], .embed-container iframe[class^='optanon-category-'], .soundcloud-container iframe[class^='optanon-category-'], .embed-container-unibuddy-dashboard iframe[class^='optanon-category-'], .podomatic-container iframe[class*='optanon-category-'], .embed-container-autosize iframe[class^='optanon-category-'], .embed-container-facebook iframe[class^='optanon-category-'], .embed-container-yammer iframe[class^='optanon-category-'], .embed-container-spotify iframe[class^='optanon-category-']"),
    o = 0;
    t.forEach(function(e) {
    let t = e.getAttribute("data-src"),
        i, a;
    if (null !== t) {
        t.includes("vimeo") ? (i = " from Vimeo", a = "video") : t.includes("video.manchester") ? (i = " from The University of Manchester", a = "video") : t.includes("soundcloud") ? (i = " from SoundCloud", a = "audio") : t.includes("youtube") ? (i = " from YouTube", a = "video") : t.includes("unibuddy") ? (i = " from Unibuddy", a = "") : t.includes("knightlab.com") ? (i = "", a = "timeline") : t.includes("podomatic.com") ? (i = " from Podomatic", a = "audio") : t.includes("issuu.com") ? (i = " from Issuu", a = "") : t.includes("google.com/maps") ? (i = "", a = "Google Maps") : t.includes("docs.google.com") ? (i = "", a = "Google Docs") : t.includes("spotify.com") ? (i = " from Spotify", a = "audio") : t.includes("emarketing.manchester.ac.uk") ? (i = "", a = "web form") : t.includes("formstack.com") ? (i = "", a = "web form") : t.includes("clickdimensions.com") ? (i = "", a = "web form") : t.includes("facebook.com") ? (i = " from Facebook", a = "") : t.includes("yammer.com") && (i = " from Yammer", a = ""), e.classList.add("cookie-warning-added"), e.parentNode.classList.add("with-cookie-warning"), e.setAttribute("data-cookiewarning", "cookie-warning-iframe-" + o);
        let n = document.createElement("div");
        n.classList.add("cookie-warning"), n.id = "cookie-warning-iframe-" + o, e.parentNode.insertBefore(n, e.parentNode.firstChild);
        let d = document.createElement("p");
        var c = document.createTextNode("This " + a + " content" + i + " is currently blocked due to your cookie preferences. It uses the following types of cookies:");
        d.appendChild(c), n.appendChild(d);
        let r = document.createElement("ul");
        if (n.appendChild(r), e.classList.value.includes("C0002")) {
        let s = document.createElement("li"),
            l = document.createTextNode("Performance cookies");
        s.appendChild(l), r.appendChild(s)
        }
        if (e.classList.value.includes("C0003")) {
        let p = document.createElement("li"),
            u = document.createTextNode("Functional cookies");
        p.appendChild(u), r.appendChild(p)
        }
        if (e.classList.value.includes("C0004")) {
        let m = document.createElement("li"),
            f = document.createTextNode("Targeting cookies");
        m.appendChild(f), r.appendChild(m)
        }
        let h = document.createElement("p");
        var k = document.createTextNode("Please review your cookie preferences if you want to enable this content:");
        h.appendChild(k), n.appendChild(h);
        let g = document.createElement("p");
        n.appendChild(g);
        let C = document.createElement("button");
        C.classList.add("ot-sdk-show-settings"), C.id = "ot-sdk-btn";
        let w = document.createTextNode("Cookie settings");
        C.appendChild(w), g.appendChild(C)
    }
    o++
    });
    let i = document.querySelectorAll(".twitterEmbed script[class^='optanon-category-'][type='text/plain'], .embed-container-twitter script[class^='optanon-category-'][type='text/plain'], #nav-twitter script[class^='optanon-category-'][type='text/plain']"),
    a = 0;
    if (i.forEach(function(e) {
        e.classList.add("cookie-warning-added"), e.setAttribute("data-cookiewarning", "cookie-warning-twitter-" + a), e.parentNode.classList.add("with-cookie-warning");
        let t = document.createElement("div");
        t.classList.add("cookie-warning"), t.id = "cookie-warning-twitter-" + a, e.parentNode.insertBefore(t, e.parentNode.firstChild);
        let o = document.createElement("p");
        var i = document.createTextNode("This content from X (Twitter) is currently blocked due to your cookie preferences. It uses the following types of cookies:");
        o.appendChild(i), t.appendChild(o);
        let n = document.createElement("ul");
        t.appendChild(n);
        let d = document.createElement("li"),
        c = document.createTextNode("Targeting cookies");
        d.appendChild(c), n.appendChild(d);
        let r = document.createElement("p");
        var s = document.createTextNode("Please review your cookie preferences if you want to enable this content:");
        r.appendChild(s), t.appendChild(r);
        let l = document.createElement("p");
        t.appendChild(l);
        let p = document.createElement("button");
        p.classList.add("ot-sdk-show-settings"), p.id = "ot-sdk-btn";
        let u = document.createTextNode("Cookie settings");
        p.appendChild(u), l.appendChild(p), a++
    }), -1 == OnetrustActiveGroups.indexOf(",C0003") || -1 == OnetrustActiveGroups.indexOf(",C0004")) {
    let n = document.querySelectorAll(".issuuembed"),
        d = 0;
    n.forEach(function(e) {
        e.classList.add("cookie-warning-added"), e.setAttribute("data-cookiewarning", "cookie-warning-issuu-" + d), e.parentNode.classList.add("with-cookie-warning");
        let t = document.createElement("div");
        t.classList.add("cookie-warning"), t.id = "cookie-warning-issuu-" + d, e.parentNode.insertBefore(t, e.parentNode.firstChild);
        let o = document.createElement("p");
        var i = document.createTextNode("This content from Issuu is currently blocked due to your cookie preferences. It uses the following types of cookies:");
        o.appendChild(i), t.appendChild(o);
        let a = document.createElement("ul");
        t.appendChild(a);
        let n = document.createElement("li"),
        c = document.createTextNode("Functional cookies");
        n.appendChild(c), a.appendChild(n);
        let r = document.createElement("li"),
        s = document.createTextNode("Targeting cookies");
        r.appendChild(s), a.appendChild(r);
        let l = document.createElement("p");
        var p = document.createTextNode("Please review your cookie preferences if you want to enable this content:");
        l.appendChild(p), t.appendChild(l);
        let u = document.createElement("p");
        t.appendChild(u);
        let m = document.createElement("button");
        m.classList.add("ot-sdk-show-settings"), m.id = "ot-sdk-btn";
        let f = document.createTextNode("Cookie settings");
        m.appendChild(f), u.appendChild(m), d++
    })
    }
    if (-1 == OnetrustActiveGroups.indexOf(",C0003")) {
    let c = document.querySelectorAll(".embed-container.cincopa script[class^='optanon-category-'][type='text/plain']"),
        r = 0;
    c.forEach(function(e) {
        e.classList.add("cookie-warning-added"), e.setAttribute("data-cookiewarning", "cookie-warning-cincopa-" + r), e.parentNode.classList.add("with-cookie-warning");
        let t = document.createElement("div");
        t.classList.add("cookie-warning"), t.id = "cookie-warning-cincopa-" + r, e.parentNode.insertBefore(t, e.parentNode.firstChild);
        let o = document.createElement("p");
        var i = document.createTextNode("This content from Cincopa is currently blocked due to your cookie preferences. It uses the following types of cookies:");
        o.appendChild(i), t.appendChild(o);
        let a = document.createElement("ul");
        t.appendChild(a);
        let n = document.createElement("li"),
        d = document.createTextNode("Functional cookies");
        n.appendChild(d), a.appendChild(n);
        let c = document.createElement("p");
        var s = document.createTextNode("Please review your cookie preferences if you want to enable this content:");
        c.appendChild(s), t.appendChild(c);
        let l = document.createElement("p");
        t.appendChild(l);
        let p = document.createElement("button");
        p.classList.add("ot-sdk-show-settings"), p.id = "ot-sdk-btn";
        let u = document.createTextNode("Cookie settings");
        p.appendChild(u), l.appendChild(p), r++
    })
    }
    e.classList.add("cookie-script-executed")
}
OneTrust.OnConsentChanged(function() {
    $(".cookie-warning-added").each(function() {
    var e = $(this);
    if (e.is("script")) {
        var t = e.attr("type");
        ("text/javascript" == t || void 0 === t) && ($("#" + e.data("cookiewarning")).remove(), e.parent().removeClass("with-cookie-warning"))
    } else if (e.is("iframe")) {
        var o = e.attr("src");
        void 0 !== o && !1 !== o && ($("#" + e.data("cookiewarning")).remove(), e.parent().removeClass("with-cookie-warning"))
    } else e.is("div") && e.hasClass("issuuembed") && OnetrustActiveGroups.indexOf(",C0003") > -1 && OnetrustActiveGroups.indexOf(",C0004") > -1 && ($("#" + e.data("cookiewarning")).remove(), e.parent().removeClass("with-cookie-warning"))
    })
})
}