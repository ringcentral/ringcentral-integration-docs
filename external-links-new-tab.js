// Open external (different-origin) links in a new tab; keep internal doc links in the same tab.
(function () {
    function isSkippableScheme(href) {
        var h = (href || '').trim().toLowerCase();
        return (
            !h ||
            h.indexOf('#') === 0 ||
            h.indexOf('javascript:') === 0 ||
            h.indexOf('mailto:') === 0 ||
            h.indexOf('tel:') === 0
        );
    }

    function enhanceExternalLinks() {
        var root = document.querySelector('.md-content') || document.body;
        root.querySelectorAll('a[href]').forEach(function (a) {
            var href = a.getAttribute('href');
            if (isSkippableScheme(href)) return;

            try {
                var abs = new URL(href, window.location.href);
                if (abs.origin === window.location.origin) return;
            } catch (e) {
                return;
            }

            a.setAttribute('target', '_blank');
            var rel = (a.getAttribute('rel') || '').trim();
            var parts = rel ? rel.split(/\s+/) : [];
            if (parts.indexOf('noopener') === -1) parts.push('noopener');
            if (parts.indexOf('noreferrer') === -1) parts.push('noreferrer');
            a.setAttribute('rel', parts.join(' ').trim());
        });
    }

    var debounceTimer;
    function scheduleEnhance() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(enhanceExternalLinks, 50);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', enhanceExternalLinks);
    } else {
        enhanceExternalLinks();
    }

    if (typeof MutationObserver !== 'undefined' && document.body) {
        var mo = new MutationObserver(scheduleEnhance);
        mo.observe(document.body, { childList: true, subtree: true });
    }
})();
