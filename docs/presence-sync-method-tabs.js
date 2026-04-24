// OAuth / Microsoft Azure pill switch — Presence Sync admin + Teams Embedded App admin
(function () {
    var path = window.location.pathname || '';
    var isPresence = path.indexOf('presence-sync-admin') !== -1;
    var isEmbedded = path.indexOf('embedded-app-admin') !== -1;
    if (!isPresence && !isEmbedded) return;

    var picker = document.querySelector('.presence-sync-method-picker');
    var buttons = document.querySelectorAll('.presence-method-btn[data-presence-method]');
    var panels = document.querySelectorAll('[data-presence-method-panel]');
    var hint = document.getElementById('presence-method-hint');
    if (!picker || !buttons.length || !panels.length) return;

    var storageKey = isEmbedded ? 'rc-embedded-app-admin-tab' : 'rc-presence-sync-admin-tab';

    function readSaved() {
        try {
            var s = window.sessionStorage.getItem(storageKey);
            if (s === 'azure' || s === 'oauth') return s;
        } catch (e) {
            /* ignore */
        }
        return null;
    }

    function writeSaved(method) {
        try {
            window.sessionStorage.setItem(storageKey, method);
        } catch (e) {
            /* ignore */
        }
    }

    function methodFromHash() {
        var h = (window.location.hash || '').toLowerCase();
        if (isEmbedded) {
            if (h.indexOf('install-using-oauth') !== -1) return 'oauth';
            if (h.indexOf('installing-the-embedded-app-oauth') !== -1) return 'oauth';
            if (h.indexOf('download-the-desktop-plugin-and-enable-mobile-mode-oauth') !== -1) return 'oauth';
            var azureIds = [
                'installing-the-embedded-app-using-microsoft-azure',
                'getting-credentials-from-microsoft-azure',
                'authenticating-ringcentral-with-azure-credentials',
                'installing-the-embedded-app-azure',
                'download-the-desktop-plugin-and-enable-mobile-mode-azure',
                'updating-the-azure-client-secret',
                'updating-the-azure-secret-value-and-expiration',
            ];
            for (var i = 0; i < azureIds.length; i++) {
                if (h.indexOf(azureIds[i]) !== -1) return 'azure';
            }
            return readSaved() || 'oauth';
        }
        /* presence-sync-admin */
        if (h.indexOf('microsoft-azure-step-1') !== -1 || h.indexOf('microsoft-azure') !== -1) return 'azure';
        if (h.indexOf('oauth-step-1') !== -1) return 'oauth';
        return readSaved() || 'oauth';
    }

    function hashForMethod(method) {
        if (isEmbedded) {
            return method === 'azure' ? '#installing-the-embedded-app-using-microsoft-azure' : '#install-using-oauth';
        }
        return method === 'azure' ? '#microsoft-azure-step-1-connect-your-microsoft-365-account' : '#oauth-step-1-connect-your-microsoft-365-account';
    }

    function scrollIdForMethod(method) {
        if (isEmbedded) {
            return method === 'azure' ? 'installing-the-embedded-app-using-microsoft-azure' : 'install-using-oauth';
        }
        return method === 'azure' ? 'microsoft-azure-step-1-connect-your-microsoft-365-account' : 'oauth-step-1-connect-your-microsoft-365-account';
    }

    function setHint(method) {
        if (!hint) return;
        if (isEmbedded) {
            hint.innerHTML =
                method === 'azure'
                    ? '<strong>Microsoft Azure</strong> install steps are shown below.'
                    : '<strong>OAuth</strong> install steps are shown below.';
        } else {
            hint.innerHTML =
                method === 'azure'
                    ? '<strong>Microsoft Azure</strong> setup is shown below.'
                    : '<strong>OAuth</strong> setup is shown below.';
        }
    }

    function setMethod(method, opts) {
        opts = opts || {};
        var scroll = !!opts.scroll;

        buttons.forEach(function (btn) {
            var on = btn.getAttribute('data-presence-method') === method;
            btn.classList.toggle('is-active', on);
            btn.setAttribute('aria-selected', on ? 'true' : 'false');
            btn.tabIndex = on ? 0 : -1;
        });

        panels.forEach(function (panel) {
            var on = panel.getAttribute('data-presence-method-panel') === method;
            if (on) {
                panel.removeAttribute('hidden');
            } else {
                panel.setAttribute('hidden', '');
            }
        });

        setHint(method);
        writeSaved(method);

        if (opts.replaceHash === true) {
            try {
                window.history.replaceState(null, '', hashForMethod(method));
            } catch (e) {
                /* ignore */
            }
        }

        if (scroll) {
            var id = scrollIdForMethod(method);
            var el = document.getElementById(id);
            if (el) {
                window.requestAnimationFrame(function () {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
            }
        }
    }

    buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var method = btn.getAttribute('data-presence-method');
            if (method) setMethod(method, { replaceHash: true, scroll: false });
        });
    });

    window.addEventListener('hashchange', function () {
        setMethod(methodFromHash(), { replaceHash: false, scroll: true });
    });

    function boot() {
        setMethod(methodFromHash(), { replaceHash: false, scroll: !!window.location.hash });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
