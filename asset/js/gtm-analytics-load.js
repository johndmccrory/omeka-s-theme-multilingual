function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
// Function to load GTM
function loadGTM() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    const f = document.getElementsByTagName('script')[0];
    const j = document.createElement('script');
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-MTKP79D';
    f.parentNode.insertBefore(j, f);
}

// Check on page load
if (getCookie('cb-enabled') === 'accepted') {
    loadGTM();
}

// Also listen for changes (user clicking 'Accept')
const observer = new MutationObserver(() => {
    if (getCookie('cb-enabled') === 'accepted') {
        loadGTM();
        observer.disconnect(); // Stop observing once loaded
    }
});

observer.observe(document.documentElement, { childList: true, subtree: true });