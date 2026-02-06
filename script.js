// Create falling roses
function createFallingRoses() {
    const fallingRosesContainer = document.querySelector('.falling-roses');
    const roses = ['🌹', '🌹', '🌹', '🌹', '🌹', '🌹'];
    
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const rose = document.createElement('div');
            rose.className = 'falling-rose';
            rose.textContent = roses[Math.floor(Math.random() * roses.length)];
            rose.style.left = Math.random() * 100 + '%';
            rose.style.animationDuration = (Math.random() * 3 + 5) + 's';
            rose.style.animationDelay = Math.random() * 2 + 's';
            fallingRosesContainer.appendChild(rose);
            
            setTimeout(() => {
                rose.remove();
            }, 8000);
        }, i * 250);
    }
}

// Create roses grid
function createRosesGrid() {
    const rosesGrid = document.getElementById('rosesGrid');
    const roseEmojis = ['🌹', '🌹', '🌹', '🌹', '🌹', '🌹', '🌹'];
    
    for (let i = 0; i < 12; i++) {
        const roseItem = document.createElement('div');
        roseItem.className = 'rose-item';
        roseItem.textContent = roseEmojis[Math.floor(Math.random() * roseEmojis.length)];
        roseItem.style.animationDelay = (i * 0.2) + 's';
        
        roseItem.addEventListener('click', function() {
            this.style.transform = 'scale(1.5) rotate(360deg)';
            this.style.transition = 'transform 0.5s ease';
            setTimeout(() => {
                this.style.transform = '';
            }, 500);
            createHeart();
        });
        
        rosesGrid.appendChild(roseItem);
    }
}

// Create floating hearts
function createHeart() {
    const heartsContainer = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💖';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Continuous floating hearts
function createContinuousHearts() {
    setInterval(() => {
        if (Math.random() > 0.7) {
            createHeart();
        }
    }, 2000);
}

// Heart button click handler
document.getElementById('heartBtn').addEventListener('click', function() {
    const loveMessage = document.getElementById('loveMessage');
    
    if (loveMessage.classList.contains('show')) {
        loveMessage.classList.remove('show');
        setTimeout(() => {
            loveMessage.style.display = 'none';
        }, 500);
    } else {
        loveMessage.style.display = 'block';
        setTimeout(() => {
            loveMessage.classList.add('show');
        }, 10);
        
        // Scroll to message card smoothly
        setTimeout(() => {
            loveMessage.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center',
                inline: 'nearest'
            });
        }, 300);
    }
    
    // Create multiple hearts
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 100);
    }
    
    // Animate button
    this.style.transform = 'scale(0.9)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createFallingRoses();
    createRosesGrid();
    createContinuousHearts();
    
    // Refresh falling roses periodically
    setInterval(() => {
        createFallingRoses();
    }, 10000);
    
    // Add sparkle effect to title
    const title = document.querySelector('.title');
    title.addEventListener('mouseenter', function() {
        this.style.animation = 'shimmer 0.5s ease-in-out';
    });
});

// Add click effect to main rose
document.getElementById('mainRose').addEventListener('click', function() {
    this.style.animation = 'rotateRose 0.5s ease-in-out';
    setTimeout(() => {
        this.style.animation = 'rotateRose 3s ease-in-out infinite';
    }, 500);
    
    // Create hearts around the rose
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 50);
    }
});

