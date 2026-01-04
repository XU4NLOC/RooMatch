// RooMatch - Language Management

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = StorageManager.getCurrentLanguage();
    updateLanguageButtons(currentLang);
    updateLanguage();
    
    // Setup language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            StorageManager.setLanguage(lang);
            updateLanguageButtons(lang);
            updateLanguage();
        });
    });
});

function updateLanguageButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function updateLanguage() {
    const lang = StorageManager.getCurrentLanguage();
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-en]').forEach(element => {
        const text = element.dataset[lang];
        if (text) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        }
    });
}

// Export for use in other scripts
window.updateLanguage = updateLanguage;