// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('mobileMenuBtn');
    if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.add('hidden');
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on scroll
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

// Accordion toggle for lesson sections
function toggleAccordion(id) {
    const content = document.getElementById(id);
    const icon = document.getElementById(id + '-icon');

    if (content.classList.contains('open')) {
        content.classList.remove('open');
        if (icon) icon.textContent = '+';
    } else {
        content.classList.add('open');
        if (icon) icon.textContent = '−';
    }
}

// Tab switching
function switchTab(tabGroup, tabName) {
    // Hide all tab contents in the group
    document.querySelectorAll(`[data-tab-group="${tabGroup}"]`).forEach(el => {
        el.classList.add('hidden');
    });
    // Deactivate all tab buttons
    document.querySelectorAll(`[data-tab-btn="${tabGroup}"]`).forEach(el => {
        el.classList.remove('active');
    });
    // Show selected tab content
    const content = document.getElementById(`${tabGroup}-${tabName}`);
    if (content) content.classList.remove('hidden');
    // Activate selected tab button
    const btn = document.getElementById(`${tabGroup}-btn-${tabName}`);
    if (btn) btn.classList.add('active');
}

// Progress tracker using localStorage
const ProgressTracker = {
    getProgress(classLevel) {
        const data = localStorage.getItem(`cca-progress-${classLevel}`);
        return data ? JSON.parse(data) : {};
    },

    markComplete(classLevel, topicId) {
        const progress = this.getProgress(classLevel);
        progress[topicId] = true;
        localStorage.setItem(`cca-progress-${classLevel}`, JSON.stringify(progress));
        this.updateUI(classLevel);
    },

    isComplete(classLevel, topicId) {
        const progress = this.getProgress(classLevel);
        return progress[topicId] === true;
    },

    getPercentage(classLevel, totalTopics) {
        const progress = this.getProgress(classLevel);
        const completed = Object.keys(progress).filter(k => progress[k]).length;
        return Math.round((completed / totalTopics) * 100);
    },

    updateUI(classLevel) {
        const progressBar = document.getElementById(`progress-bar-${classLevel}`);
        const progressText = document.getElementById(`progress-text-${classLevel}`);
        const totalTopics = document.querySelectorAll(`[data-topic-class="${classLevel}"]`).length;

        if (progressBar && totalTopics > 0) {
            const pct = this.getPercentage(classLevel, totalTopics);
            progressBar.style.width = pct + '%';
            if (progressText) progressText.textContent = pct + '%';
        }

        // Update checkmarks
        document.querySelectorAll(`[data-topic-class="${classLevel}"]`).forEach(el => {
            const topicId = el.dataset.topicId;
            const check = el.querySelector('.topic-check');
            if (check && this.isComplete(classLevel, topicId)) {
                check.textContent = '✅';
                check.classList.add('completed');
            }
        });
    }
};

// Smooth scroll to anchor
document.addEventListener('click', function(e) {
    const anchor = e.target.closest('a[href^="#"]');
    if (anchor) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});
