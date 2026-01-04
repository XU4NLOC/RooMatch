// RooMatch - Main App Logic

let allProperties = [];
let filteredProperties = [];

// Load and display properties
function loadProperties() {
    allProperties = StorageManager.getProperties();
    filteredProperties = [...allProperties];
    displayProperties(filteredProperties);
}

function displayProperties(properties) {
    const grid = document.getElementById('propertyGrid');
    if (!grid) return;

    if (properties.length === 0) {
        grid.innerHTML = '<p class="no-results">No properties found</p>';
        return;
    }

    grid.innerHTML = properties.map(property => createPropertyCard(property)).join('');
    
    // Add click listeners
    document.querySelectorAll('.property-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.id;
            window.location.href = `property-detail.html?id=${id}`;
        });
    });

    updateLanguage();
}

function createPropertyCard(property) {
    const likedClass = StorageManager.isPropertyLiked(property.id) ? 'liked' : '';
    const partnerBadge = property.partnership ? '<span class="property-badge">⭐ Partner</span>' : '';
    
    return `
        <div class="property-card ${likedClass}" data-id="${property.id}">
            <div style="position: relative;">
                <img src="${property.images[0]}" alt="${property.title}" class="property-image">
                ${partnerBadge}
            </div>
            <div class="property-content">
                <h3 class="property-title">${property.title}</h3>
                <p class="property-location">📍 ${property.location}</p>
                <div class="property-features">
                    <span>🛏️ ${property.bedrooms}</span>
                    <span>🚿 ${property.bathrooms}</span>
                    <span>📐 ${property.area}</span>
                </div>
                <div class="property-price">${property.price}</div>
            </div>
        </div>
    `;
}

// Filter properties by category
function filterProperties(category) {
    if (category === 'all') {
        filteredProperties = [...allProperties];
    } else {
        filteredProperties = allProperties.filter(p => p.category === category);
    }
    displayProperties(filteredProperties);
}

// Search properties
function searchProperties(query) {
    if (!query.trim()) {
        filteredProperties = [...allProperties];
    } else {
        const lowerQuery = query.toLowerCase();
        filteredProperties = allProperties.filter(p => 
            p.title.toLowerCase().includes(lowerQuery) ||
            p.location.toLowerCase().includes(lowerQuery) ||
            p.description.toLowerCase().includes(lowerQuery)
        );
    }
    displayProperties(filteredProperties);
}

// For property detail page - will be called from property-detail.html
window.loadProperties = loadProperties;
window.filterProperties = filterProperties;
window.searchProperties = searchProperties;