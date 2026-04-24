// Archiver Section Navigation - Right Side Panel
(function() {
    // Only run on archiver pages, but NOT on the introduction/index page
    if (!window.location.pathname.includes('/archiver/')) return;
    
    // Skip the introduction page
    const path = window.location.pathname;
    if (path.endsWith('/archiver/') || path.endsWith('/archiver')) return;

    const navItems = [
        { title: 'Getting Started', items: [
            { name: 'Introduction', href: 'index.md' },
            { name: 'User Notice', href: 'user-notice.md' },
            { name: 'Enable Archiver', href: 'enable-archiver.md' },
        ]},
        { title: 'Administration', items: [
            { name: 'Admin Roles & Permissions', href: 'admin-roles-permissions.md' },
            { name: 'User Roles & Permissions', href: 'user-roles-permissions.md' },
            { name: 'System Requirements', href: 'system-requirements.md' },
        ]},
        { title: 'Storage Connections', items: [
            { name: 'Linking Storages', href: 'connect-storage.md' },
            { name: 'Google Drive', href: 'connect-gdrive.md' },
            { name: 'Box', href: 'connect-box.md' },
            { name: 'Dropbox', href: 'connect-dropbox.md' },
            { name: 'SFTP', href: 'connect-sftp.md' },
            { name: 'SFTP Security Upgrade', href: 'sftp-security-upgrade.md' },
            { name: 'Smarsh', href: 'connect-smarsh.md' },
        ]},
        { title: 'Settings & Monitoring', items: [
            { name: 'Sync Options', href: 'sync-options.md' },
            { name: 'Archive Logs', href: 'archive-logs.md' },
            { name: 'Retry Mechanism', href: 'retry-mechanism.md' },
            { name: 'Archive Status', href: 'archive-status.md' },
            { name: 'Notifications', href: 'notifications.md' },
        ]},
        { title: 'Help', items: [
            { name: 'General Questions', href: 'questions.md' },
        ]},
    ];

    function getCurrentPage() {
        const path = window.location.pathname;
        const parts = path.split('/');
        let page = parts[parts.length - 1] || parts[parts.length - 2];
        if (page === '' || page === 'archiver') page = 'index.md';
        if (!page.endsWith('.md')) page += '.md';
        // Handle trailing slash
        if (page === '.md') page = 'index.md';
        return page.replace(/\/$/, '');
    }

    function buildNav() {
        const currentPage = getCurrentPage();
        
        // Get the base path for archiver section
        const pathParts = window.location.pathname.split('/');
        const archiverIndex = pathParts.indexOf('archiver');
        const basePath = pathParts.slice(0, archiverIndex + 1).join('/') + '/';
        
        let html = '<div class="archiver-section-nav">';
        html += '<h4>In This Section</h4>';

        navItems.forEach(group => {
            html += `<div class="nav-group-title">${group.title}</div>`;
            html += '<ul class="nav-group">';
            group.items.forEach(item => {
                const itemPage = item.href.replace('.md', '');
                const isActive = currentPage === item.href || 
                                 currentPage === itemPage ||
                                 currentPage.replace('.md', '') === itemPage ||
                                 (itemPage === 'index' && (currentPage === '' || currentPage === 'index'));
                const activeClass = isActive ? ' class="active"' : '';
                // Use absolute path from archiver base
                const href = itemPage === 'index' ? basePath : basePath + itemPage + '/';
                html += `<li><a href="${href}"${activeClass}>${item.name}</a></li>`;
            });
            html += '</ul>';
        });

        html += '</div>';
        return html;
    }

    function injectNav() {
        if (!document.querySelector('.archiver-section-nav')) {
            // Insert at body level for fixed positioning
            document.body.insertAdjacentHTML('beforeend', buildNav());
            // Add class to body for content margin adjustment
            document.body.classList.add('has-archiver-nav');
        }
    }
    
    function removeNav() {
        const nav = document.querySelector('.archiver-section-nav');
        if (nav) {
            nav.remove();
            document.body.classList.remove('has-archiver-nav');
        }
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectNav);
    } else {
        injectNav();
    }

    // Handle navigation for instant loading (MkDocs Material)
    function shouldShowNav() {
        const path = window.location.pathname;
        if (!path.includes('/archiver/')) return false;
        if (path.endsWith('/archiver/') || path.endsWith('/archiver')) return false;
        return true;
    }

    function updateNav() {
        const existingNav = document.querySelector('.archiver-section-nav');
        if (shouldShowNav()) {
            if (!existingNav) {
                injectNav();
            } else {
                // Update active state
                const currentPage = getCurrentPage();
                existingNav.querySelectorAll('a').forEach(link => {
                    const href = link.getAttribute('href');
                    const linkPage = href.split('/').filter(Boolean).pop();
                    const isActive = currentPage.replace('.md', '') === linkPage || 
                                     (linkPage === 'archiver' && currentPage === 'index');
                    link.classList.toggle('active', isActive);
                });
            }
        } else if (existingNav) {
            removeNav();
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        // Watch for URL changes (instant navigation)
        let lastPath = window.location.pathname;
        const observer = new MutationObserver(function() {
            if (window.location.pathname !== lastPath) {
                lastPath = window.location.pathname;
                setTimeout(updateNav, 100);
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    });
})();

