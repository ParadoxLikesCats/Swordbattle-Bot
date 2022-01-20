const validPages = {
    "swordbattle.codergautamyt.repl.co": {
        scriptURL: "https://hackhost.sedated.repl.co/script.js"
    }
};

function injectScript(url) {
    let script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function hookCheat(url) {
    injectScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js");
    const waitJquery = () => {
        if (window.jQuery) {
            injectScript(validPages[url].scriptURL);
        } else {
            setTimeout(() => waitJquery(), 50);
        }
    };
    waitJquery();
}

function getPage() {
    let url = window.location.hostname;
    if (url in validPages) {
        hookCheat(url);
    }
}

getPage();
