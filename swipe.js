// RooMatch - Swipe Functionality

let properties = [];
let currentIndex = 0;
let startX = 0;
let startY = 0;
let currentX = 0;
let currentY = 0;
let isDragging = false;

document.addEventListener('DOMContentLoaded', () => {
    const user = StorageManager.getCurrentUser();
    if (!user) {
        window.location.href = 'index.html';
        return;
    }

    loadSwipeProperties();
    setupSwipeListeners();
});

function loadSwipeProperties() {
    properties = StorageManager.getProperties();
    currentIndex = 0;
    renderSwipeCard();
}

function renderSwipeCard() {
    const container = document.getElementById('swipeCards');
    const emptyState = document.getElementById('swipeEmpty');
    
    if (currentIndex >= properties.length) {
        container.style.display = 'none';
        emptyState.style.display = 'block';
        document.querySelector('.swipe-actions').style.display = 'none';
        return;
    }

    const property = properties[currentIndex];
    
    container.innerHTML = `
        <div class="swipe-card" id="currentCard" data-id="${property.id}">
            <img src="${property.images[0]}" alt="${property.title}" class="swipe-card-image">
            <div class="swipe-card-content">
                <h2 class="swipe-card-title">${property.title}</h2>
                <p class="swipe-card-location">📍 ${property.location}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 16px;">
                    <div class="swipe-card-price">${property.price}</div>
                    <div style="display: flex; gap: 12px; color: #666;">
                        <span>🛏️ ${property.bedrooms}</span>
                        <span>🚿 ${property.bathrooms}</span>
                        <span>📐 ${property.area}</span>
                    </div>
                </div>
            </div>
            <div class="swipe-indicator like-indicator">
                <span data-en="LIKE" data-vi="THÍCH">LIKE</span>
            </div>
            <div class="swipe-indicator pass-indicator">
                <span data-en="PASS" data-vi="BỎ QUA">PASS</span>
            </div>
        </div>
    `;

    updateLanguage();
    const card = document.getElementById('currentCard');
    setupCardDrag(card);
}

function setupSwipeListeners() {
    const btnLike = document.getElementById('btnLike');
    const btnPass = document.getElementById('btnPass');
    const btnInfo = document.getElementById('btnInfo');

    if (btnLike) {
        btnLike.addEventListener('click', () => swipeCard('right'));
    }

    if (btnPass) {
        btnPass.addEventListener('click', () => swipeCard('left'));
    }

    if (btnInfo) {
        btnInfo.addEventListener('click', showPropertyInfo);
    }
}

function setupCardDrag(card) {
    if (!card) return;

    card.addEventListener('mousedown', handleDragStart);
    card.addEventListener('touchstart', handleDragStart);
    
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('touchmove', handleDragMove);
    
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchend', handleDragEnd);
}

function handleDragStart(e) {
    isDragging = true;
    const card = document.getElementById('currentCard');
    if (!card) return;

    if (e.type === 'touchstart') {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    } else {
        startX = e.clientX;
        startY = e.clientY;
    }
}

function handleDragMove(e) {
    if (!isDragging) return;

    const card = document.getElementById('currentCard');
    if (!card) return;

    if (e.type === 'touchmove') {
        currentX = e.touches[0].clientX;
        currentY = e.touches[0].clientY;
    } else {
        currentX = e.clientX;
        currentY = e.clientY;
    }

    const deltaX = currentX - startX;
    const deltaY = currentY - startY;
    const rotation = deltaX * 0.1;

    card.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${rotation}deg)`;
    card.style.transition = 'none';

    // Show indicators
    if (deltaX > 50) {
        card.classList.add('show-like');
        card.classList.remove('show-pass');
    } else if (deltaX < -50) {
        card.classList.add('show-pass');
        card.classList.remove('show-like');
    } else {
        card.classList.remove('show-like', 'show-pass');
    }
}

function handleDragEnd(e) {
    if (!isDragging) return;
    isDragging = false;

    const card = document.getElementById('currentCard');
    if (!card) return;

    const deltaX = currentX - startX;

    if (Math.abs(deltaX) > 100) {
        // Swiped
        if (deltaX > 0) {
            swipeCard('right');
        } else {
            swipeCard('left');
        }
    } else {
        // Return to center
        card.style.transform = '';
        card.style.transition = 'transform 0.3s ease';
        card.classList.remove('show-like', 'show-pass');
    }
}

function swipeCard(direction) {
    const card = document.getElementById('currentCard');
    if (!card) return;

    const property = properties[currentIndex];

    // Animate card out
    if (direction === 'right') {
        card.classList.add('swiped-right');
        StorageManager.addLikedProperty(property.id);
    } else {
        card.classList.add('swiped-left');
    }

    // Move to next card after animation
    setTimeout(() => {
        currentIndex++;
        renderSwipeCard();
    }, 300);
}

function showPropertyInfo() {
    const property = properties[currentIndex];
    if (property) {
        window.location.href = `property-detail.html?id=${property.id}`;
    }
}