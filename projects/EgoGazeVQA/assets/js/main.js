// ===== Navigation Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Sticky Navigation =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== Ablation Study Chart =====
const ctx = document.getElementById('ablationChart');
if (ctx) {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Full Model', 'w/o Gaze', 'w/o Temporal', 'w/o Balance', 'Baseline'],
            datasets: [{
                label: 'Accuracy (%)',
                data: [58.7, 52.1, 49.8, 51.3, 45.2],
                backgroundColor: [
                    'rgba(37, 99, 235, 0.8)',
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(107, 114, 128, 0.8)'
                ],
                borderColor: [
                    'rgba(37, 99, 235, 1)',
                    'rgba(239, 68, 68, 1)',
                    'rgba(245, 158, 11, 1)',
                    'rgba(16, 185, 129, 1)',
                    'rgba(107, 114, 128, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 70,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// ===== Copy to Clipboard =====
function copyToClipboard() {
    const codeBlock = document.querySelector('.citation-box code');
    const text = codeBlock.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        copyBtn.style.background = '#10b981';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
            copyBtn.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// ===== Demo Functionality =====
function runDemo() {
    const videoSelect = document.getElementById('video-select');
    const questionInput = document.getElementById('question-input');
    const demoResult = document.getElementById('demo-result');
    
    // Show loading state
    demoResult.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    demoResult.style.color = '#64748b';
    
    // Simulate API call
    setTimeout(() => {
        // Mock responses based on question
        const responses = {
            'default': 'The person is preparing breakfast in the kitchen. They are currently cracking eggs into a bowl while looking at the recipe on their phone.',
            'cooking': 'Based on the gaze patterns and hand movements, the person is following a recipe to make scrambled eggs. The gaze fixations indicate they are checking the ingredient list.',
            'assembling': 'The person is assembling an IKEA bookshelf. Their gaze is focused on the instruction manual while their hands manipulate the screwdriver.',
            'navigation': 'The person is navigating through a building looking for room 302. Their gaze patterns show they are reading door numbers and directional signs.'
        };
        
        let response = responses.default;
        const question = questionInput.value.toLowerCase();
        
        if (question.includes('what') || question.includes('doing')) {
            response = responses.default;
        } else if (videoSelect.value.includes('Cooking')) {
            response = responses.cooking;
        } else if (videoSelect.value.includes('Assembling')) {
            response = responses.assembling;
        } else if (videoSelect.value.includes('Navigation')) {
            response = responses.navigation;
        }
        
        // Display result with typing effect
        demoResult.style.color = '#1e293b';
        typeWriter(response, demoResult);
    }, 2000);
}

// ===== Typing Effect =====
function typeWriter(text, element, speed = 20) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.stat-card, .result-card, .vis-item, .feature-list li').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add animation class
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ===== Video Demo Controls =====
const demoVideo = document.getElementById('demo-video');
const videoSelect = document.getElementById('video-select');

if (videoSelect && demoVideo) {
    videoSelect.addEventListener('change', (e) => {
        // In a real implementation, this would load different video files
        // For now, we'll just restart the current video
        demoVideo.currentTime = 0;
        demoVideo.play();
    });
}

// ===== Lazy Loading Images =====
const images = document.querySelectorAll('img[data-src]');
const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 300px 0px'
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
}, imageOptions);

images.forEach(img => imageObserver.observe(img));

// ===== Page Load Animations =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== Console Easter Egg =====
console.log('%c🎯 Welcome to EgoGazeVQA!', 'font-size: 20px; color: #2563eb; font-weight: bold;');
console.log('%cExploring egocentric vision with gaze-aware AI', 'font-size: 14px; color: #64748b;');
